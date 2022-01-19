import React from 'react';
import person from '../../images/person.svg';
import './section-two.css';

const SectionTwo = () => {
    return (
        <div>
            <div className='container'>
                <div className='section-two'>
                    <div>
                        <img src={person} alt='' />
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <div className='line'></div>
                            <p>0.1 WELCOME</p>
                        </div>

                        <div>
                            <h2 className='digital-text'>
                                Lymcoin is Digital Cash You Can Spend Anywhere
                            </h2>
                            <p className='digital-p-text'>
                                Use Lymcoin to make instant, private payments
                                online or in-store using our secure open-source
                                platform hosted by thousands of users around the
                                world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
