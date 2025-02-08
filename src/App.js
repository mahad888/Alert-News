import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';

import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import HomePage from './Components/homep';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chatbot from './Components/Chatbot';

export default class App extends Component {

  constructor(){
    super();
    this.state ={
      progress: 0
    }
  }
  setProgress =(progress)=>{
    this.setState({
      progress:progress
    })
  }

  
  render() {
    
    return (
 
     <div>
       <Router>

       <LoadingBar
        color='#f11946'
        progress={this.state.progress}

      />
        <Navbar></Navbar>
       
       <Routes>

        
       <Route path='/homep' element = {<HomePage/>}>
       
        </Route>
        

       <Route path='/general' element = {<News setProgress = {this.setProgress}  key = "general" country = "in" pagesize = {9} Category ="General"></News>}>
       
        </Route>

       <Route path="/business" element = { <News setProgress = {this.setProgress}  key = "business" country = "in" pagesize = {9} Category ="Business"></News>}>
      
       </Route>

       <Route path="/entertainment" element ={ <News setProgress ={this.setProgress}  key = "entertainment" country = "in" pagesize = {9} Category ="Entertainment"></News>}>
       </Route>

       <Route path="/health" element ={ <News setProgress ={this.setProgress}   key = "health" pagesize = {9} country = "in" Category ="Health"></News>}>
       in       </Route>

       <Route path="/sports" element ={<News setProgress ={this.setProgress}  key = "sports" pagesize = {9} country = "in" Category ="Sports"></News>}>
       
       </Route>

       <Route path="/science" element={ <News setProgress ={this.setProgress}  key = "science" pagesize = {9} country = "in" Category ="Science"></News>}>
      
       </Route>

       <Route path="/technology" element ={<News setProgress ={this.setProgress}  key = "technology" pagesize = {9} country = "in" Category ="Technology"></News>}>
       
       </Route>
       

     </Routes>

    </Router>

    {/* <Chatbot></Chatbot> */}


     </div>
     
      
    )
  }
}

