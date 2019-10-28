import React,{Component} from 'react';
import Topnav from '../topnav/topnav';
import PhotoGallery from '../photogallery/photogallery';
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';
import Favourite from '../favourite/favourite';
class Home extends Component{

    render(){
        console.log(this.props.location);
        return(
           
            <React.Fragment>
            <Topnav/>
            <PhotoGallery/>
            </React.Fragment>
          
            
            
        )
    }
}

export default Home;