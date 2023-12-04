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
        <div className="heading text-center">
          <h1 className='text-black text-3xl font-bold'>I am Sender !</h1>
          <h3 className="text-xl mt-5 text-gray-500">Explore your travel opportunities with us !</h3>
        </div>
        <div className="travel-card bg-white w-10/12 my-20 shadow-sm p-7 rounded-lg">
          Travel info card here
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
