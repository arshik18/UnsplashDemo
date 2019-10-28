import React,{Component} from 'react';
import Topnav from '../topnav/topnav';
import PhotoGallery from '../photogallery/photogallery';
class Home extends Component{

    componentWillMount(){
        if(!localStorage.getItem('authenticated'))
        this.props.history.push('/loginfirst');
    }

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