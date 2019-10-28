import React,{Component} from 'react'
import './favourite.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Topnav from '../topnav/topnav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Favourite extends Component{

    state={
        localStorageData:""
    }
   deleteFavourite=(favphoto)=>
   {
          let lsd=JSON.parse(localStorage.getItem("item"));
          lsd.splice(lsd.indexOf(favphoto),1);
          localStorage.setItem('item',JSON.stringify(lsd));
          this.setState({localStorageData:lsd})
          console.log(JSON.parse(localStorage.getItem("item")));
   }

    render(){
        this.state.localStorageData=localStorage.getItem("item");
        let favouritephoto ="";
        if(this.state.localStorageData != null){
            favouritephoto = JSON.parse(this.state.localStorageData).map((favphoto,index)=>{
                return(
                    <div key={index} className="image_div "> 
                    <img className="image" src={favphoto} alt=" Not Found"/>
                    <div className="favourite" >
                        
                                <FontAwesomeIcon id={index}  
                                                 icon={faTrash} 
                                                 color="grey"
                                                 onClick={(event)=>this.deleteFavourite(favphoto)}/> 
                                
                        </div>
                    </div>
                )
               
            })
        }
        
        return(
           <React.Fragment>
            <Topnav/>
            <div className="favourite_gallery">
            <div className="favourite_container">
                
            {favouritephoto}
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Favourite;