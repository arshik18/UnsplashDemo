import React,{Component} from 'react';
import './photogallery.css';
import axios from 'axios';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import { faStar as faStarO} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{YOUR_ACCESS_KEY, ApiUrl} from '../../constants/constants';

class PhotoGallery extends Component{

    state={
        datas:[],
        photos:[],
        favouritesList:[],
        icon:faStarO,
        
    }
    onFavouriteClick = (data) =>
    {
        var favList=[];
        var localStorageData=localStorage.getItem("item");
        if(localStorageData != null){
            favList=JSON.parse(localStorageData);
        }
        if(favList==null || favList.length==0 || !favList.includes(data.urls.small))
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
    componentDidMount(){
            axios.get(ApiUrl + `?client_id=${YOUR_ACCESS_KEY}`,{
                header:{
                    'Accept-Version': 'v1'
                }
            })
            .then(response=>{
                this.setState({datas:response.data})
            })
    }
    render(){
        let lsd = localStorage.getItem("item");
        let photo= this.state.datas.map(data=>{
            return(
                <div key={data.id} className="image_div "> 
                    <img className="image"  src={data.urls.small} alt=" Not Found" />
                    <div className="favourite" >
                        {(lsd != null && lsd.includes(data.urls.small)) ?
                            <FontAwesomeIcon id={data.id} onClick={(event)=>this.onFavouriteClick(data)} 
                                icon={faStar} color="grey"/> :
                                <FontAwesomeIcon id={data.id} onClick={(event)=>this.onFavouriteClick(data)} 
                                icon={faStarO} color="grey"/>
                        }
                            
                    </div>
                </div>
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
