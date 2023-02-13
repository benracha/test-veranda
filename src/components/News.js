import React, {useState} from 'react';
import "./News.css";

function News() {

    const [dataNews, setDataNews] = useState([{
        date:"June 14,2016",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed diam sapien. Sed semper urna dictum tellus…",
        read:"Read more"
    },{
        date:"June 14,2016",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed diam sapien. Sed semper urna dictum tellus…",
        read:"Read more"
    },{
        date:"June 14,2016",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed diam sapien. Sed semper urna dictum tellus…",
        read:"Read more"
    }
])

    return (
        <div className='news'>
            <div>
                <div className='title-news'>
                    <div className='box-title'>
                        <div className='title-black'>LATEST NEWS</div>
                    </div>
                    <div className='detail-news'>
                        {dataNews.map(data =>
                        <div className='box-news'>
                            <div className='box-detail-news'>
                                <div className='date'>{data.date}</div>
                                <div className='content'>
                                    <p>{data.content}</p>
                                </div>
                                <div className='read'>{data.read}</div>
                            </div>
                        </div>)}
                    </div>
                    <div className='box-btn-news'>
                        <button className='btn-news'>VIEW ALL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;