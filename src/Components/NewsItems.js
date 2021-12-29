import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, date, author, source }=this.props;
        return (
            <div className='my-3'>
                <div className="card" ><span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '88%',zIndex: '1'}}>{source}</span>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text"><small class="text-muted">By {!author?"Unkonown":author} on {new Date(date).toGMTString()}</small></p>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        
                        
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-secondary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
