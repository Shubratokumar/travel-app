import Image from 'next/image'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <main id='login' className="min-h-screen p-6">
      <header className="flex items-center justify-between ">
        <div className="logo">
          <ConnectingAirportsIcon color="primary" sx={{ fontSize: 60 }}/>
        </div>
        <div className="profile">
          <Button variant="outlined" color="primary">All Listings</Button>
          <AccountCircleSharpIcon color="primary" className='ml-2' fontSize="large"/>
        </div>
      </header>
      <section className='flex flex-col items-center justify-center mt-20'>
        <div className="text-center">
          <h1 className='text-black text-3xl font-bold'>I am Sender !</h1>
          <h3 className="text-xl mt-5 text-gray-500">Explore your travel opportunities with us !</h3>
        </div>
        <div className="travel-card bg-white w-3/4 my-20 shadow-sm px-7 pt-7 pb-11 rounded-lg">
          <div className="heading flex items-center justify-start">
            <p className='text-sm text-gray-500 pr-4'>I am: </p>
            <h4 className='text-black px-4 mr-3 text-sm font-medium'>Traveler</h4>
            <h4 className='text-sky-500 border-b-2 border-sky-500 font-medium px-4 text-sm'>Sender</h4>
          </div>
          <div className="mt-8">
            <p className='text-sm text-gray-500 mb-3'>Enter your fields manually:</p>
            <div className="fields w-full flex items-center justify-between">
              <div className="from-to flex items-center justify-between w-1/2 rounded bg-gray-200 px-4 py-2 mr-2">
                <div className="from flex flex-col w-2/6">
                  <label className='text-xs text-gray-500' htmlFor="from">From</label>
                  <input id="from" name="from" type="text" placeholder='New Delhi (DEL)' className='border-none text-black outline-none bg-inherit'/>                  
                </div>
                <div className="">
                    <Image
                      src="/swap.svg"
                      alt="swap-logo"
                      width={16}
                      height={16}
                      priority
                    />
                </div>
                <div className="to flex flex-col w-2/6">
                  <label className='text-xs text-gray-500' htmlFor="to">To</label>
                  <input id="to" name="to" type="text" placeholder='Mumbai (BOM)' className='border-none text-black outline-none bg-inherit '/> 
                </div>
              </div>
              <div className="date flex flex-col rounded w-1/4 bg-gray-200 px-4 py-2 mx-2">
                  <label className='text-xs text-gray-500' htmlFor="date">Date</label>
                  <input id="date" name="date" type="date" placeholder='Thu, 14 Sep' className='border-none outline-none bg-inherit '/>
              </div>
              <div className="w-1/4 mx-2">
                <button className='w-full p-4 bg-sky-600 rounded text-white' >Next</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-text">
          <button className="border-b-2 text-gray-500 p-1">
            How we work?
          </button>
        </div>
      </section>      
    </main>
  )
}
