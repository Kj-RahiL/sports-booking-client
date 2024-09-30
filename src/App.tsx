import { Outlet } from 'react-router-dom';

import Navbar from "./components/Shared/Navbar";
import Footer from './components/Shared/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
     <>
      <Navbar />
      <div className='min-h-screen'><Outlet/></div>
      <Footer/>
      <ScrollToTop/>
      </>
 
  );
};

export default App;
