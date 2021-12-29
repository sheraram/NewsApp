import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country : 'in',
        pageSize : '8',
        category : 'general'
    }

    static propTypes={
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    constructor(){
            super();
            this.state={
                articles : [],
                loading : true,
                page: 1
            }
        }
    
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e190297e049b4e8687d5b7ebc22681d2&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let datajson= await data.json();
        console.log(datajson);
        this.setState({articles : datajson.articles, 
            totalResults : datajson.totalResults, 
            loading: false})
    }

    handlenextclick=async ()=>{
        console.log("next");        
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e190297e049b4e8687d5b7ebc22681d2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true})
            let data = await fetch(url);
            let datajson= await data.json();
            console.log(datajson);
            this.setState({
                page : this.state.page +1 ,
                articles : datajson.articles,
                loading : false
            })
        
    }

    handleprevclick=async ()=>{
        console.log("previous");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e190297e049b4e8687d5b7ebc22681d2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let datajson= await data.json();
        console.log(datajson);
        this.setState({
            page : this.state.page - 1,
            articles : datajson.articles,
            loading : false
        })
    }

    render() {
        
        return (
            <div className="container my-3">               
                <h2 className='text-center' style={{margin : '30px'}}>NewsApp - Top Headlines .. </h2> 
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItems title={!element.title?"":element.title} author={element.author} date={element.publishedAt} description={element.description?element.description:""} imageUrl={!element.urlToImage?"https://c.ndtvimg.com/2021-12/m51mksno_delhi-omicron-ward-ani_650x400_20_December_21.jpg":element.urlToImage} newsUrl={element.url} source={element.source.name}/>
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprevclick}> &laquo; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handlenextclick} >Next &raquo;</button>
                </div>
                
            </div>
        )
    }
}

export default News

