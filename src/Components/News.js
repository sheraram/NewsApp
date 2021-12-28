import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "England never stood a chance - Agnew",
            "description": "The structure of domestic cricket and a lack of preparation left England primed for another Ashes humbling, says Jonathan Agnew.",
            "url": "http://www.bbc.co.uk/sport/cricket/59808295",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3086/production/_122522421_australiacelebrate.jpg",
            "publishedAt": "2021-12-28T09:37:24.9773291Z",
            "content": "Realistically, England never stood a chance.\r\nLike plenty of others, I thought there were a number of factors going into this Ashes series that would level the playing field: the disrupted preparatio… [+5094 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "'Press the reset button' - how pundits reacted to England's Ashes defeat",
            "description": "Minutes had barely passed before the fall-out from England's dismal Ashes defeat had begun, from Joe Root's future to the state of county cricket, here is the best reaction.",
            "url": "http://www.bbc.co.uk/sport/cricket/59806990",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/81BC/production/_122521233_gettyimages-1361425448.jpg",
            "publishedAt": "2021-12-28T04:22:25.0939018Z",
            "content": "Minutes had barely passed before the fall-out from England's dismal Ashes defeat had begun.\r\nThere was talk of an \"embarrassing\" performance, Joe Root stepping down as captain, the future of head coa… [+6501 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
        
    ]
    constructor(){
            super();
            this.state={
                articles : this.articles,
                loading : false
            }
        }
    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines .. </h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News

