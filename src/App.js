import './App.css';
import NavigationBar from './Comp/Navbar';
import Intro from './Comp/Home';
import About from './Comp/About';
import "./style/homepage.css"
import Price from './Comp/Price';
import Contact from './Comp/Contact';

function App() {
  return (
    <div>
      {/*home*/}
      <div className='myBG'>
      <NavigationBar/>
      <Intro />
      </div>
      {/*end of home*/}

      {/*about*/}
      <div className='myBG2'>
        <About/>
      </div>
      {/*end of about*/}

      {/*price*/}
        <div className='myBG3'>
        <Price/>
      </div>
      {/*end of about*/}

      <div className='myBG4'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
