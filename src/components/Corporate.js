import React, { useState } from 'react';
import "./Corporate.css";

function Corporate() {

    return (
        <div className='corporate'>
            <div>
                <div className='box-left'>
                    <div className='img-coporate'>
                        <img src='/1.Homepage/img-cg.jpg' alt='img-cg' />
                    </div>
                    <div className='detail-corporate'>
                        <div className='box-corporate'>
                            <div className='box-detail'>
                                <div className='title-black'>CORPORATE GOVERNANCE</div>
                                <div className='detail-cp'>
                                    <p>Veranda Resort is committed to the highest levels of ethical conduct and corporate governance standards which are consistent with our corporate culture. See the documents below that guide the members of the Board in their oversight of the Company.</p>
                                </div>
                                <div className='menu-corporate'>
                                    <div className='cg'>
                                        CG Principle
                                        <div className='arrow'>
                                            <img src='/1.Homepage/icon/icon-arrow.svg' width={8} alt="icon-arrow" />
                                        </div>
                                    </div>
                                    <div className='document'>
                                        Documents
                                        <div className='arrow'>
                                            <img src='/1.Homepage/icon/icon-arrow.svg' width={8} alt="icon-arrow" />
                                        </div>
                                    </div>
                                    <div className='wb'>
                                        Whistle Blowing
                                        <div className='arrow'>
                                            <img src='/1.Homepage/icon/icon-arrow.svg' width={8} alt="icon-arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-right'>
                <div>
                    <div className='animate__animated animate__flash animate__delay-2s '>
                        <div className='stock'>
                            <div className='detail-stock'>
                                <div className='title'>STOCK PRICE</div>
                                <div className='box-vd'>
                                    VRANDA
                                </div>
                                <div className='pri'>
                                    <div className='box-pri'>
                                        68.50
                                    </div>
                                    <div className='box-unit'>
                                        THB
                                    </div>
                                </div>
                                <div className='box-per'>
                                    <div className='arrow-up'>
                                        <img src='/home/icon-stock-up.png' width={14} alt="icon-right-arrow" />
                                    </div>
                                    <div className='per'>1.25(0.54%)</div>
                                </div>
                                <div className='box-update'>
                                    Updated: 06 Jun 2017 16:02
                                </div>
                                <div className='box-view'>
                                    <div>
                                        View Stock Quote
                                    </div>
                                    <div className='arrow'>
                                        <img src='/home/icon-arrow.png' width={8} alt="icon-arrow-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ir'>
                        <div className='detail-ir'>
                            <div className='title'>IR CALENDAR</div>
                            <div className='box-ir'>
                                Calendar of IR-related information and major dates.
                            </div>
                            <div className='box-event'>
                                <div>
                                    View All Event
                                </div>

                                <div className='arrow'>
                                    <img src='/home/icon-arrow.png' width={8} alt="icon-arrow-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Corporate;