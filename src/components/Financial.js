import React, { useState } from 'react';
import "./Financial.css";

function Financial() {

    const [dataFinancial, setDataFinancial] = useState([{
        title: "Total Revenue",
        price: "1,352.22",
        unit: "Million Baht"
    }, {
        title: "Total Asset",
        price: "4,878.48",
        unit: "Million Baht"
    }, {
        title: "Net Profit",
        price: "144.68",
        unit: "Million Baht"
    }, {
        title: "EBITDA",
        price: "337.81",
        unit: "Million Baht"
    }
    ])

    return (
        <div className='financial'>
            <div className='box-story'>
                <div>
                    <div className='title-black'>FINANCIAL HIGHLIGHTS</div>
                    <p>Q2/2018 Earnings - Excellent performance</p>
                </div>
            </div>
            <div className='detail-finan'>
                {dataFinancial.map(data =>
                    <div className='animate__animated animate__bounceInRight animate__delay-1s '>
                        <div className='box-finan'>
                            <div>
                                <div className='total'>
                                    {data.title}
                                </div>
                                <div className='price'>
                                    {data.price}
                                </div>
                                <div className='unit'>
                                    {data.unit}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='box-btn-finan'>
                <div>
                    <button className='btn-finan'>FINANCIAL HIGHLIGHTS</button>
                </div>
            </div>
        </div>
    )
}

export default Financial;