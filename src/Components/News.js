import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: '8',
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`
    }

    async updateNews() {
        this.props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(50);
        let datajson = await data.json();
        this.props.setProgress(80)
        console.log(datajson);
        this.setState({
            articles: datajson.articles,
            totalResults: datajson.totalResults,
            loading: false
            // page : this.state.page
        })
        this.props.setProgress(100)
    }

    async componentDidMount() {
        this.updateNews();
    }

    // handlenextclick = async () => {
    //     // console.log("next");  
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();

    // }

    // handleprevclick = async () => {
    //     // console.log("previous");
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews()
    // }

    fetchMoreData = async() => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let datajson = await data.json();
        console.log(datajson);
        this.setState({
            articles: this.state.articles.concat(datajson.articles),
            totalResults: datajson.totalResults,
            loading: false
            // page : this.state.page
        })
    };

    render() {

        return (
            <>
                <h1 className='text-center' style={{ margin: '30px' }}>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
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
}

export default News

