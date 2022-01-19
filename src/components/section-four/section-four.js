import React from 'react';
import { Button } from 'react-bootstrap';

import mobi from '../../images/mobi.svg';
import './section-four.css';

const SectionFour = () => {
    return (
        <div className='section-four-fon'>
            <div className='container'>
                <div className='section-four'>
                    <div className='mobi-fon'>
                        <img height='620px' src={mobi} alt='' />
                    </div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <div className='line'></div>
                            <p>0.3 WELCOME</p>
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
                            <Button className='btn btn-four' size='sm'>
                                CONTUCT US
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
