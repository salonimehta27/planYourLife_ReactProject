import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { nanoid } from 'nanoid'
import "./NewsCard.css"

function NewsContainer({ news, setNews }) {
    const [selectNewsCategory, setSelectNewsCategory] = useState("Tech Crunch")

    const displayNews = Object.values(news).filter(k => k === news.articles).flat()
        .map(n => {
            return <NewsCard key={nanoid()} newsObj={n}></NewsCard>
        })

    const apiKey = "bdff385f2d4342ae913c30dcda75ccf4"
    const baseUrl = "https://newsapi.org/v2/"
    const businessUrl = `${baseUrl}top-headlines?country=us&category=business&apiKey=${apiKey}`
    const apple = `${baseUrl}everything?q=apple&from=2021-07-31&to=2021-07-31&sortBy=popularity&apiKey=${apiKey}`
    const techCrunch = `${baseUrl}top-headlines?sources=techcrunch&apiKey=${apiKey}`
    const wallStreetJournal = `${baseUrl}/everything?domains=wsj.com&apiKey=${apiKey}`
    // console.log(test)
    const newArr = [businessUrl, apple, techCrunch, wallStreetJournal]

    // if (selectNewsCategory === "Tech Crunch") {
    //     fetch(techCrunch)
    //         .then(resp => resp.json())
    //         .then(data => setNews(data))
    // }
    // else if (selectNewsCategory === "Wall Street Journal") {
    //     fetch(wallStreetJournal)
    //         .then(resp => resp.json())
    //         .then(data => setNews(data))
    // }
    // else if (selectNewsCategory === "Apple") {
    //     fetch(apple)
    //         .then(resp => resp.json())
    //         .then(data => setNews(data))
    // }
    // else if (selectNewsCategory === "Business Headlines") {
    //     fetch(businessUrl)
    //         .then(resp => resp.json())
    //         .then(data => setNews(data))
    // }


    // console.log(news) 
    // console.log(displayNews)
    return (
        <div className="center">
            <h1 >Top News Headlines</h1>
            <br></br>
            <div>
                <label htmlFor="newsSource">News Source : </label>
                <select name="newsSource" value={selectNewsCategory} onChange={(e) => setSelectNewsCategory(e.target.value)}>
                    <option>Choose Category</option>
                    <option>Apple</option>
                    <option>Tech Crunch</option>
                    <option>Wall Street Journal</option>
                    <option>Business Headlines</option>
                </select>

            </div>
            {/* <p >Sorry, it's on repair! :(</p> */}
            {displayNews}
        </div>
    )
}

export default NewsContainer
