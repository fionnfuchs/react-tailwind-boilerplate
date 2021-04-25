import React from 'react'
import '../styles/styles.css'
import Navbar from './Navbar'
import FeatureSection from './FeatureSection'
import ContactToday from './ContactToday'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Impressum from './Impressum'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <Navbar></Navbar>
        <div className="container flex-grow">
          <Switch>
            <Route path="/" exact component={FeatureSection}></Route>
            <Route path="/impressum" component={Impressum}></Route>
          </Switch>
        </div>
        <footer>
          <ContactToday></ContactToday>
        </footer>
      </div>
    </Router>

  )
}

export default App
