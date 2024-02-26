
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    //fetch trailer video and update the store with trailer data
    const dispatch=useDispatch();
    const getMovieVideo=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US" , API_OPTIONS);
        const json= await data.json();
    
        
        const filterData=json.results.filter((video)=>video.type=="Trailer");
        const trailer= filterData.length ? filterData[0] : json.results[0];
       
     
        dispatch(addTrailerVideo(trailer));



    }

    useEffect(()=>{
        getMovieVideo();
    } , [])
}

export default useMovieTrailer;