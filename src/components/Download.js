import React, { useState } from 'react';
import "./Download.css";

function Download() {

    const [dataDownload, setDataDownload] = useState([{
        icon: "/home/icon-ar.png",
        title: "Annual Report",
        years: "2017",
        iconDownload: "/home/icon-download.png",
        pdf: "PDF Download"
    }, {
        icon: "/home/icon-form56.png",
        title: "Form 56-1",
        years: "2017",
        iconDownload: "/home/icon-download.png",
        pdf: "PDF Download"
    }, {
        icon: "/home/icon-financial.png",
        title: "Financial Statements",
        years: "Q3/2018",
        iconDownload: "/home/icon-download.png",
        pdf: "PDF Download"
    }, {
        icon: "/home/icon-md&a.png",
        title: "MD&A",
        years: "Q3/2018",
        iconDownload: "/home/icon-download.png",
        pdf: "PDF Download"
    }
    ])

    return (
        <div className='download'>
            <div className='box-total-download'>
                <div>
                    <div className='title-download'>
                        <div className='title'>QUICK DOWNLOAD</div>
                    </div>
                    <div className='total-box'>
                        {dataDownload.map(data =>
                            <div className='box-download'>
                                <div>
                                    <div className='box-icon'>
                                        <div className='icon-ar'>
                                            <img src={data.icon} width={40} alt="icon-ar" />
                                        </div>
                                    </div>
                                    <div className='box-title-download'>
                                        <div className='title-name'>
                                            {data.title}
                                        </div>
                                        <div className='box-year'>
                                            {data.years}
                                        </div>
                                    </div>
                                    <div className='box-pdf-dl'>
                                        <div className='icon-dl'>
                                            <img src={data.iconDownload} width={13} alt="icon-download" />
                                        </div>
                                        <div className='boxpdf'>{data.pdf}</div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    <div className='box-total-investor'>
                        <div className='box-in-ar'>
                            <div className='box-investor'>
                                Investor Kits
                            </div>
                            <div className='icon-arrow'>
                                <img src='/home/icon-arrow.png' width={8} alt="icon-arrow-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Download;