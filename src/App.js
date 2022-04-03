import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Event from './MainPages/Event';
import Blog from './MainPages/Blog';
import Gallery from './MainPages/Gallery';
import Home from './MainPages/Home';
import MainAbout from './MainPages/MainAbout';
import SignIn from './MainPages/SignIn';


import OurMission from './AboutUs/OurMission';
import OurVision from './AboutUs/OurVision';
import CoreValue from './AboutUs/CoreValue';
import Bio from './AboutUs/Bio';

import Contact from './ContactUs/Contact';
import Partners from './ContactUs/Partners';
import Sponsorships from './ContactUs/Sponsorships';
import Support from './ContactUs/Support';

import ThankYou from './Components/ThankYou';

import CYCLOPLOGGING from './Cards/CYCLOPLOGGING';
import CYCLOENDURO from './Cards/CYCLOENDURO';
import CYCLOFIRECHAT from './Cards/CYCLOFIRECHAT';
import CYCLOTOURING from './Cards/CYCLOTOURING';
import SignUp from './MainPages/SignUp';
// import FormSignup from './Components/FormSignup';
import ErrorPage from './MainPages/ErrorPage';
import Gallery1 from './DemoGallery/Gallery1';
import Gallery2 from './DemoGallery/Gallery2';
import Gallery3 from './DemoGallery/Gallery3';
import Gallery4 from './DemoGallery/Gallery4';

import OngoingEvent from './Event/OngoingEvent';
import PreviousEvent from './Event/PreviousEvent';
import UpcomingEvent from './Event/UpcomingEvent';
import EventDetails from './Event/EventDetails';
import WeeklyBoard from './Event/WeeklyBoard';
import Profile from './MainPages/Profile';


function App() {

  return (
    <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/mainabout">
              <MainAbout />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>


            <Route exact path="/OurMission">
              <OurMission />
            </Route>
            <Route exact path="/OurVision">
              <OurVision />
            </Route>
            <Route exact path="/CoreValues">
              <CoreValue />
            </Route>
            <Route exact path="/Bio">
              <Bio />
            </Route>

            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Partners">
              <Partners />
            </Route>
            <Route exact path="/Sponsorships">
              <Sponsorships />
            </Route>
            <Route exact path="/Support">
              <Support />
            </Route>

            <Route exact path="/thankyou">
              <ThankYou />
            </Route>


            <Route exact path="/Cycloplogging">
              <CYCLOPLOGGING />
            </Route>
            <Route exact path="/Cycloenduro">
              <CYCLOENDURO />
            </Route>
            <Route exact path="/Cyclofirechat">
              <CYCLOFIRECHAT />
            </Route>
            <Route exact path="/Cyclotouring">
              <CYCLOTOURING />
            </Route>

            {/* Gallery  */}

            <Route exact path="/gallery1">
              <Gallery1 />
            </Route>
            <Route exact path="/gallery2">
              <Gallery2 />
            </Route>
            <Route exact path="/gallery3">
              <Gallery3 />
            </Route>
            <Route exact path="/gallery4">
              <Gallery4 />
            </Route>

            <Route exact path="/currentevent">
              <OngoingEvent />
            </Route>
            <Route exact path="/previousevent">
              <PreviousEvent />
            </Route>
            <Route exact path="/upcomingevent">
              <UpcomingEvent />
            </Route>
            <Route exact path="/eventdetails">
              <EventDetails />
            </Route>

            <Route exact path="/weeklyboard">
              <WeeklyBoard />
            </Route>


            {/*  */}

            <Route path="*">
              <ErrorPage />
            </Route>

          </Switch>
        </Router>
    </>
  );
}

export default App;

