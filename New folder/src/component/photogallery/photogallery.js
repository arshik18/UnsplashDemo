import React,{Component} from 'react';
import './photogallery.css';
import axios from 'axios';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fav from '../favourite/favourite';
class PhotoGallery extends Component{

    state={
        datas:[],
        photos:[],
        favouritesList:[],
        icon:faStarO,
        
    }
    onFavouriteClick = (data) =>
    {
        console.log(data.id);
        
        
        let x=document.getElementById(data.id);
        if(x==data.id){
            this.setState({icon:faStar});
        }
        console.log(x.icon);
        var favList=[];
        var localStorageData=localStorage.getItem("item");
        if(localStorageData != null){
            favList=JSON.parse(localStorageData);
        }
        if(favList.length===0 || !favList.includes(data.urls.small))
        {
            favList.push(data.urls.small)
        }
        else
       {
            favList.splice(favList.indexOf(data),1);
        }
            localStorage.setItem('item',JSON.stringify(favList));
            this.setState({favouritesList:favList}) ;
           
        
       
    }
   /*  componentWillMount(){
        this.setState({favouritesList:JSON.parse(localStorage.getItem('item'))})
    } */
    componentDidMount(){
        var YOUR_ACCESS_KEY='db4121687e78dde12fd5be776998a37a512f9d9be917ec4decfe22b5066ad495';
            axios.get(`https://api.unsplash.com/photos/?client_id=${YOUR_ACCESS_KEY}`,{
                header:{
                    'Accept-Version': 'v1'
                }
            })
            .then(response=>{
                this.setState({datas:response.data})
            })
    }
    render(){
        let photo= this.state.datas.map(data=>{
            return(
                <div key={data.id} className="image_div "> 
                    <img className="image"  src={data.urls.small} alt=" Not Found" />
                    <div className="favourite" id={data.id} >
                            <FontAwesomeIcon  onClick={(event)=>this.onFavouriteClick(data)} 
                                icon={this.state.icon} color="grey"/> 
                            {/* <FontAwesomeIcon icon={faStarO} /> */}
                    </div>
                </div>
            )

        })
       /*  if(this.state.favouritesList.length === 0){
            let lsd = localStorage.getItem("item");
            if(lsd != null) this.setState({
                favouritesList : JSON.parse(lsd)
            });
        } */
        
         let favouritephoto = this.state.favouritesList.map(favphoto=>{
            return(
                <img src={favphoto}/>
            )
        })     
        
        return(
            <div className="photo_gallery">
              <div className="photo_container">
              {photo}
              </div>
            </div>
        )
    }
}

export default PhotoGallery;
