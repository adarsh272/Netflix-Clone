import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import request from './request'
import Row from './Row'
import Footer from './Footer'


function Homepage() {
  return (
    <div>
        <Navbar />

        <Banner/>
        <Row url={request.fetchTrending} title="Trending Movies" poster='true'/>
        <Row url={request.fetchTopRated} title="Top-Rated" poster='false'/>
        <Row url={request.fetchOriginals} title="Netflix Originals" poster='false'/>
        <Row url={request.fetchActionMovies} title="Action Movies" poster='false'/>
        <Row url={request.fetchComedyMovies} title="Comedy Movies" poster='false'/>
        <Row url={request.fetchRomanceMovies} title="Romance Movies" poster='false'/>
        <Row url={request.fetchHorrorMovies} title="Horror Movies" poster='false'/>
        <Row url={request.fetchDocumentaries} title="Documentaries" poster='false'/>

        <Footer/>

    </div>
  )
}

export default Homepage