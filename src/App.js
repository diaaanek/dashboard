import React from 'react';
import Header from "./components/Header"
import Sidebar from './containers/SideBar'
import Footer from "./components/Footer"

import './App.css';

function App() {
  return (
    <div className="grid-container">
      <div className="menu-icon">
       <i className="fas fa-bars header__menu"></i>
     </div>

     <Header/>

     <Sidebar/>

     <main className="main">
       <div className="main-header">
         <div className="main-header__heading">Hello User</div>
         <div className="main-header__updates">Recent Items</div>
       </div>

         <h2 style={{margin:"1em"}}>Job Search Tracker</h2>
       <div className="main-overview">


         <div className="overviewcard">
           <div className="overviewcard__icon">Total Updates</div>
           <div className="overviewcard__info"><h1>55</h1></div>
         </div>
         <div className="overviewcard">
           <div className="overviewcard__icon">Jobs Applied</div>
           <div className="overviewcard__info"><h1>25</h1></div>
         </div>
         <div className="overviewcard">
           <div className="overviewcard__icon">Git Commits </div>
           <img src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1554317654/git.png" alt="git-icon"/>
           <div className="overviewcard__info"><h1>227</h1></div>
         </div>
         <div className="overviewcard">
           <div className="overviewcard__icon">Interviews Completed</div>
           <div className="overviewcard__info"><h1>8</h1></div>
         </div>
       </div>

       <div className="main-cards">
         <div className="card">Card</div>
         <div className="card">Card</div>
         <div className="card">Card</div>
       </div>
     </main>

     <Footer/>
   </div>





  );
}

export default App;
