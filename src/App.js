import './App.css';
import TwitchStreamers from './components/TwitchStreamers';

function App() {
  return (
    <div className="App">
      <header className="App-header h-20">
        <nav className='flex w-full justify-between items-center px-5 '>
          <h1 className='font-bold hover:text-red-500 transition cursor-pointer text-3xl'>yalahbadi.ma</h1>
          <ul className='flex gap-5 text-xl font-semibold items-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li className='bg-red-500 hover:bg-gray-900 transition px-3 py-2 rounded-full'><a href="#">New Streamer</a></li>
          </ul>
        </nav>
      </header>
      <TwitchStreamers />
    </div>
  );
}

export default App;
