import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const [search, setsearch] = useState('')
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    const filterData = movieList.filter((movie)=> movie.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()} <spam><input onChange={(e)=>setsearch(e.target.value)} type="text" name="SEARCH ...." id="" /></spam></h2>
            <div className="list__cards">
                {
                    filterData?.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList