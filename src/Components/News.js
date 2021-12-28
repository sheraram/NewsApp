import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    constructor(){
            super();
            this.state={
                articles : [],
                loading : false,
                page: 1
            }
        }
    
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=f7444080d87a40aca9559ffdce51da3e&page=1&pageSize=15";
        let data = await fetch(url);
        let datajson= await data.json();
        console.log(datajson);
        this.setState({articles : datajson.articles, totalResults : datajson.totalResults})
    }

    handlenextclick=async ()=>{
        console.log("next");

        
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f7444080d87a40aca9559ffdce51da3e&page=${this.state.page + 1}&pageSize=15`;
            let data = await fetch(url);
            let datajson= await data.json();
            console.log(datajson);
            this.setState({
                page : this.state.page +1 ,
                articles : datajson.articles
            })
        
    }

    handleprevclick=async ()=>{
        console.log("previous");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f7444080d87a40aca9559ffdce51da3e&page=${this.state.page - 1}&pageSize=15`;
        let data = await fetch(url);
        let datajson= await data.json();
        console.log(datajson);
        this.setState({
            page : this.state.page - 1,
            articles : datajson.articles            
        })
    }

    render() {
        
        return (
            <div className="container my-3">
                <h2>Top Headlines .. </h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItems title={!element.title?"":element.title} description={element.description?element.description:""} imageUrl={!element.urlToImage?"https://fox8.com/wp-content/uploads/sites/12/2021/12/AP21300808623855.jpg?w=1280":element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprevclick}> &laquo; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/15)} className="btn btn-dark" onClick={this.handlenextclick} >Next &raquo;</button>
                </div>
                
            </div>
        )
    }
}

export default News

