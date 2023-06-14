import React from 'react';
import axios from 'axios';

import  {useEffect, useState} from 'react';
import {  useParams} from 'react-router-dom';




export default function Details() {

 const {id} =   useParams()

    const [Details, setDetails] = useState([]);


    async function details(){
    
    
    
     let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6e142246c809346fca9416eb01cbeb39`)
     setDetails(data)
    
     console.log(data)
    
    }
    
    
    
    
    useEffect(()=> {
    
        details()
    
    } , [])

  return<>
  
    
<div className="row py-3 px-5">


    <div className="col-md-3">


    <img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+Details.poster_path} alt="" />

    </div>

    <div className="col-md-9">

    <h2>{Details.title}</h2>

<h4> {Details.overview}</h4>


<h4>{Details.tagline}</h4>

    </div>
</div>


  </>
  
}
