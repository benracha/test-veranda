import React from 'react';
import "./Information.css";
import 'animate.css';

function Information() {
    return (
        <div className='information'>
            <div className='animate__animated animate__fadeInUp'>
                <div className='story'>
                    <div className='title-black'>
                        <div>
                            VERANDA RESORT PUBLIC COMPANY LIMITED</div>
                    </div>
                    <p>
                        The Group is committed to be a leading player in the hospitality industry. And real estate development. Restaurant business The focus is on customer destinations. And create a good experience. Recognizing the need for customers to think about the group. Is the beginning When customers want to rest. Want to have a shelter or eat and dessert. In order for the Group Sustainable growth in this industry.
                    </p>
                    <div className='btn-story'>
                        <button className='btn-information'>GENERAL INFORMATION</button>
                        <button className='btn-information'>NATURE OF BUSINESS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;