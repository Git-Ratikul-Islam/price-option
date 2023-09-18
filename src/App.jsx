import './App.css';
// import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navbar from './Components/NavBar/Navbar';
// import PriceOption from './Components/PriceOption/PriceOption';
import PriceOptions from './Components/PriceOptions/PriceOptions';


function App() {


  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <h1 className='text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>


    </>
  );
}

export default App;
