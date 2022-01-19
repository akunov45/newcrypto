import React from 'react';
import './implementation.css';

import alpha from '../../images/alpha.svg';
import architecture from '../../images/architectur.svg';
import copixel from '../../images/copixel.svg';
import denvers from '../../images/denvers.svg';
import remark from '../../images/remark.png';
import remote from '../../images/remote.png';

const roadImages = [
    {
        img: copixel,
    },
    {
        img: remark,
    },
    {
        img: remote,
    },
    {
        img: architecture,
    },
    {
        img: denvers,
    },
    {
        img: alpha,
    },
];

export default function Implementation() {
    return (
        <div>
            <div className='container'>
                <div className='implementation'>
                    <div className='road-map'>
                        <div></div>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div className='line'></div>
                                <p>0.4 ROADMAP</p>
                            </div>
                        </div>
                    </div>
                    <div className='road-content'>
                        <h2>Implementation Sheet</h2>
                        <p>
                            At Lymcoin we have one focus - creating a viable
                            data marketplace to start returning value to token
                            holders in the shortest time possible.
                        </p>
                    </div>
                    <div className='roads'>
                        <div className='road-range'>
                            <div>
                                <span className='t-text'>November 2017</span>
                                <span className='yellow'></span>
                                <span className='yellow-line'></span>
                                <span className='b-text'>January 2018</span>
                            </div>
                            <div>
                                <span className='yellow'></span>
                                <span className='yellow-line'></span>
                                <p style={{ paddingTop: '28px' }}>
                                    Development of different types of smart
                                    contracts (CPA, CPL, CPC, CPS, CPI)
                                </p>
                            </div>

                            <div>
                                <span className='t-text'>March 2018</span>

                                <span className='yellow'></span>

                                <span className='yellow-line'></span>
                                <span className='b-text'>March 2019</span>
                            </div>
                            <div>
                                <span className='black'></span>
                                <span className='yellow-black'></span>
                                <p style={{ paddingTop: '28px' }}>
                                    Release of a decentralized app for merchants
                                    / affiliates
                                </p>
                            </div>
                            <div>
                                <span className='t-text'>May 2020</span>

                                <span className='black'></span>
                                <span className='yellow-black'></span>
                                <span className='b-text'>September 2020</span>
                            </div>
                            <div>
                                <span className='black'></span>
                                <span className='yellow-black'></span>
                                <p style={{ paddingTop: '28px' }}>
                                    Launch of the world's first decentralized
                                    affiliate network based on the HOQU platform
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='roads-img'>
                        {roadImages.map((img) => (
                            <img className='road-img' src={img.img} alt='' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
