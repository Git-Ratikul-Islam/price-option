import './App.css';
import LineChart from './Components/LineChart/LineChart';
import Navbar from './Components/NavBar/Navbar';
import PriceOptions from './Components/PriceOptions/PriceOptions';


function App() {


  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <h1 className='text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>



    </>
  );
}

export default App;
