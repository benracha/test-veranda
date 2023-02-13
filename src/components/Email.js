import React from 'react';
import "./Email.css";

function Email() {
    return (
        <div className='e-mail'>
            <div className='bg'>
                <div className='box-total'>
                    <div className='box-total-email'>
                        <div>
                            <div className='title-email'>EMAIL ALERTS</div>
                            <div className='box-sub'>
                                <div className='box-content-email'>
                                    <p>
                                        Keep yourself up to date with all the latest announcements from the company.
                                    </p>
                                </div>
                                <button className='btn-sub'>SUBSCRIBE</button>
                            </div>
                            <hr />
                            <div className='box-dl'>
                                <div className='box-code'>
                                    IR CODE OF CONDUCT
                                </div>
                                <div className='box-pdf'>
                                    <div className='icon-dl'>
                                    <img src='/home/icon-download.png' width={13} alt="icon-download" />
                                    </div>
                                    <div className='boxpdf-email'>PDF Download</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contract-section'>
                        <div className='hr-left'></div>
                        <div className='box-total-contact'>
                            <div>
                                <div className='title-ir'>IR CONTACT</div>
                                <div className='box-resort'>
                                    Veranda Resort Public Company Limited
                                </div>
                                <div className='box-address'>
                                    <p>
                                        178/7 Ratchadapisek Road
                                        <br />
                                        Chandrakasem, Chatuchak, Bangkok 10900
                                    </p>
                                </div>
                                <div className='box-tel'>
                                    <p>
                                        Telephone: (66) 2513 3003
                                    </p>
                                </div>
                                <div>
                                    <button className='btn-email'>EMAIL: IR@VRANDA.CO.TH</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hr'></div>
        </div>
    )
}

export default Email;