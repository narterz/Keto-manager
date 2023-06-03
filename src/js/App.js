import '../scss/App.scss';
import React, { useState } from 'react';
import Meal from './pages/Meals';
import { NavBar, SideBar } from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import WhatIsKeto from './pages/WhatIsKeto';
import Location from './pages/Location';
import Contact from './pages/Contacts';
import Footer from './pages/Footer';
import { useMediaQuery } from 'react-responsive';
import { GoThreeBars } from 'react-icons/go';

//Navigation will change from a navbar on lg, xl, xxl breakpoints to a sidebar on xs, sm, md breakpoints

function App() {
  const isPhoneScreen = useMediaQuery({ query: '(max-width: 600px)' });
  const [toggled, setToggled] = useState(false);

  const toggleSidebar = () => {
    setToggled(!toggled);
    console.log(toggled);
  }

  return (
    <div className="App">
      {isPhoneScreen
        ? <>
            <GoThreeBars
              className='fixed-top'
              id={toggled ?  'sidebar__icon-active' : 'sidebar__icon'}
              onClick={toggleSidebar} 
              size={50}
            />
            <SideBar toggled={toggled} toggleOnClick={toggleSidebar} />
          </>
        : <NavBar />
      }
      <Home />
      <About />
      <WhatIsKeto />
      <Meal />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
