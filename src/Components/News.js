import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`


    const updateNews = async () => {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading({ loading: true });
        let data = await fetch(url);
        props.setProgress(50);
        let datajson = await data.json();
        props.setProgress(80)
        console.log(datajson);
        setarticles(datajson.articles)
        settotalResults(datajson.totalResults)
        setloading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    // const handlenextclick = async () => {
    //     // console.log("next");  
    //     setpage( page + 1 );
    //     updateNews();

    // }

    // const handleprevclick = async () => {
    //     // console.log("previous");
    //     setpage( page- 1 );
    //     updateNews()
    // }

    const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        // setloading( true );
        setpage(page + 1)
        let data = await fetch(url);
        let datajson = await data.json();
        console.log(datajson);
        setarticles(articles.concat(datajson.articles))
        settotalResults(datajson.totalResults)
        setloading(false)
    };

    return (
        <>
            <h1 className='text-center' style={{ margin: '30px', marginTop: '85px'}}>NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles?.length || 0}
                next={fetchMoreData}
                hasMore={articles?.length || 0 !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItems title={!element.title ? "" : element.title} author={element.author} date={element.publishedAt}
                                    description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                                    newsUrl={element.url} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: '8',
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News

