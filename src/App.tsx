import { Outlet } from 'react-router-dom';

import Navbar from "./components/Shared/Navbar";
import Footer from './components/Shared/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
     <>
      <Navbar />
      <Outlet/>
      <Footer/>
      <ScrollToTop/>
      </>
 
  );
};

export default App;
