import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TopNav from './component/topnav/topnav';
import Favourite from './component/favourite/favourite';
import PhotoGallery from './component/photogallery/photogallery';
import Home from './component/home/home';
import Login from './component/login/login'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App" >
      <Switch>
       <Route exact path='/' component={Login}/> 
      <Route exact path='/home' component={Home} />
      <Route path='/home/favourite' component={Favourite} /> 
     </Switch>
     
    {/* <TopNav/>
      <Switch>
              <Route exact path='/' component={PhotoGallery} />
              <Route path='/favourite' component={Favourite} />
          </Switch> */}
    </div>
  );
}
}

export default App;
