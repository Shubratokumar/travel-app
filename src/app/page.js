"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Swap from "../app/assets/images/swap.svg";
import cities from "./assets/data/city_country.json";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [startDate, setStartDate] = useState(dayjs());
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [isSelectedFrom, setIsSelectedFrom] = useState(false);
  const [isSelectedTo, setIsSelectedTo] = useState(false);
  const [rotate, setRotate] = useState(false);

  const filterItems = (term) => {
    const filterCities = cities.filter((city) => {
      if (city.City !== null) {
        return city.City.toLowerCase().includes(term.toLowerCase());
      }
    });
    return filterCities;
  };

  const handleFromChange = (e) => {
    const searchTerm = e.target.value;
    setSearchFrom(searchTerm);
    if (searchFrom) {
      setIsSelectedFrom(false);
    }
    const filteredItems = filterItems(searchTerm);
    setFilteredCities(filteredItems);
  };
  const handleToChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTo(searchTerm);
    if (searchTo) {
      setIsSelectedTo(false);
    }
    const filteredItems = filterItems(searchTerm);
    setFilteredCities(filteredItems);
  };
  const handleFromCity = (selectedCity) => {
    setSearchFrom(selectedCity);
    setIsSelectedFrom(!isSelectedFrom);
  };
  const handleToCity = (selectedCity) => {
    setSearchTo(selectedCity);
    setIsSelectedTo(!isSelectedTo);
  };
  return (
    <main id="login" className="min-h-screen p-6">
      <header className="flex items-center justify-between ">
        <div className="logo">
          <ConnectingAirportsIcon color="primary" sx={{ fontSize: 60 }} />
        </div>
        <div className="profile">
          <Button variant="outlined" color="primary">
            All Listings
          </Button>
          <AccountCircleSharpIcon
            color="primary"
            className="ml-2"
            fontSize="large"
          />
        </div>
      </header>
      <div className="flex flex-col items-center justify-between p-3 md:p-8 lg:p-24">
        <section className="flex flex-col w-full md:w-4/5 items-center justify-center">
          <div className="text-center">
            <h1 className="text-black text-2xl lg:text-3xl font-bold">
              I am Sender !
            </h1>
            <h3 className="text-lg lg:text-xl mt-3 lg:mt-5 text-gray">
              Explore your travel opportunities with us !
            </h3>
          </div>
          <div className="travel-card bg-white my-8 lg:my-16 w-full shadow-sm px-7 pt-7 pb-11 rounded-lg">
            <div className="heading flex items-center justify-start">
              <p className="text-sm text-gray pr-4">I am: </p>
              <button
                className={`${
                  !toggle ? "text-black" : "text-theme border-b-2 border-theme"
                } px-4 mr-3 text-sm font-medium`}
                onClick={() => setToggle(!toggle)}
              >
                Traveler
              </button>
              <button
                className={`${
                  !toggle ? "text-theme border-b-2 border-theme" : "text-black"
                } px-4 mr-3 text-sm font-medium`}
                onClick={() => setToggle(!toggle)}
              >
                Sender
              </button>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray mb-3">
                Enter your fields manually:
              </p>
              <div className="fields  w-full flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
                <div className="from-to relative flex flex-col items-start justify-around lg:flex-row lg:items-center lg:justify-between w-full lg:w-1/2 rounded-md bg-white lg:bg-[#F5F5F5] lg:mr-2">
                  <div className="from relative rounded-md bg-[#F5F5F5] lg:bg-opacity-0 flex flex-col w-full lg:w-[44%] px-4 py-3">
                    <label className="text-xs text-gray" htmlFor="from">
                      From
                    </label>
                    {!rotate && (
                      <>
                        <input
                          id="from"
                          name="from"
                          type="text"
                          value={searchFrom}
                          onChange={handleFromChange}
                          placeholder="Enter City"
                          className="border-none placeholder:text-black text-black text-sm outline-none bg-[#F5F5F5]"
                        />
                        {searchFrom && !isSelectedFrom && (
                          <ul className="w-11/12 min-h-fit max-h-32 overflow-y-auto overflow-x-hidden  absolute z-50 mt-11 rounded-lg bg-white border-[1px] border-[#D9D9D9]">
                            {filteredCities.map((city) => (
                              <li
                                className={`${
                                  isSelectedFrom ? "hidden" : "block"
                                } px-3.5 py-1 text-sm hover:bg-[#EEF4FB] cursor-pointer`}
                                onClick={() => handleFromCity(city.City)}
                                key={city.City}
                              >
                                {city.City}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                    {rotate && (
                      <>
                        <input
                          id="to"
                          name="to"
                          type="text"
                          value={searchTo}
                          onChange={handleToChange}
                          placeholder="Enter City"
                          className="border-none placeholder:text-black text-black text-sm outline-none bg-[#F5F5F5] "
                        />
                        {searchTo && !isSelectedTo && (
                          <ul className="w-11/12 min-h-fit max-h-32 overflow-y-auto overflow-x-hidden  absolute z-50 mt-11 rounded-lg bg-white border-[1px] border-[#D9D9D9]">
                            {filteredCities.map((city) => (
                              <li
                                className={`${
                                  isSelectedTo ? "hidden" : "block"
                                } px-3.5 py-1 text-sm hover:bg-[#EEF4FB] cursor-pointer`}
                                onClick={() => handleToCity(city.City)}
                                key={city.City}
                              >
                                {city.City}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                  <div
                    className="cursor-pointer p-2 z-40 rounded-lg bg-white absolute left-1/2"
                    onClick={() => setRotate(!rotate)}
                  >
                    <Image
                      className={`${
                        rotate ? "rotate-180" : "rotate-0"
                      } transition-transform  ease-in-out duration-500`}
                      src={Swap}
                      alt="swap-logo"
                      width="auto"
                      height="auto"
                      priority
                    />
                  </div>
                  <div className="from relative rounded-md bg-[#F5F5F5] lg:bg-opacity-0 flex flex-col w-full lg:w-[44%] px-4 py-3 mt-2 lg:mt-0">
                    <label className="text-xs text-gray" htmlFor="to">
                      to
                    </label>
                    {rotate && (
                      <>
                        <input
                          id="from"
                          name="from"
                          type="text"
                          value={searchFrom}
                          onChange={handleFromChange}
                          placeholder="Enter City"
                          className="border-none placeholder:text-black text-black text-sm outline-none bg-[#F5F5F5]"
                        />
                        {searchFrom && !isSelectedFrom && (
                          <ul className="w-11/12 min-h-fit max-h-32 overflow-y-auto overflow-x-hidden  absolute z-50 mt-11 rounded-lg bg-white border-[1px] border-[#D9D9D9]">
                            {filteredCities.map((city) => (
                              <li
                                className={`${
                                  isSelectedFrom ? "hidden" : "block"
                                } px-3.5 py-1 text-sm hover:bg-[#EEF4FB] cursor-pointer`}
                                onClick={() => handleFromCity(city.City)}
                                key={city.City}
                              >
                                {city.City}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                    {!rotate && (
                      <>
                        <input
                          id="to"
                          name="to"
                          type="text"
                          value={searchTo}
                          onChange={handleToChange}
                          placeholder="Enter City"
                          className="border-none placeholder:text-black text-black text-sm outline-none bg-[#F5F5F5] "
                        />
                        {searchTo && !isSelectedTo && (
                          <ul className="w-11/12 min-h-fit max-h-32 overflow-y-auto overflow-x-hidden  absolute z-50 mt-11 rounded-lg bg-white border-[1px] border-[#D9D9D9]">
                            {filteredCities.map((city) => (
                              <li
                                className={`${
                                  isSelectedTo ? "hidden" : "block"
                                } px-3.5 py-1 text-sm hover:bg-[#EEF4FB] cursor-pointer`}
                                onClick={() => handleToCity(city.City)}
                                key={city.City}
                              >
                                {city.City}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="date w-1/2 lg:w-1/4 rounded-md  bg-[#F5F5F5] px-4 py-2 mx-0 lg:mx-2 my-2 lg:my-0">
                  <p className="text-xs text-gray">Date</p>
                  <div className="cursor-pointer">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={{
                          ".MuiInput-root": { fontSize: "0.87rem" },
                        }}
                        slotProps={{
                          textField: { size: "small", variant: "standard" },
                        }}
                        orientation="portrait"
                        format="ddd, DD MMM"
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="next w-1/4">
                  <Link href="/package-details">
                    <Button
                      className=" bg-theme hover:bg-theme"
                      variant="contained"
                      size="large"
                    >
                      Next
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-text">
            <button className="border-b-2 text-gray p-1">How we work?</button>
          </div>
        </section>
      </div>
    </main>
  );
}
