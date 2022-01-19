import React from 'react';

/*Local dependencies*/
import './network.css';
import networkImg from '../../images/network-img.svg';

const Network = () => {
    return (
        <div className='network'>
            <div className='container'>
                <div className='network-text'>
                    <div style={{ display: 'flex' }}>
                        <div className='line'></div>
                        <p>0.5 NETWORK</p>
                    </div>
                </div>
                <div className='network-content'>
                    <div>
                        <h2>Growing Global Network</h2>
                        <p>
                            Lymcoin is rapidly gaining popularity among crypto
                            community. Lots of real companies and exchanges have
                            adopted our coin already. There is much more to
                            come. Stay tuned.
                        </p>
                        <div className='network-box'>
                            <div>
                                <h3>50+</h3>
                                <p>Exchanges</p>
                            </div>
                            <div>
                                <h3>180+</h3>
                                <p>Companies</p>
                            </div>
                        </div>
                    </div>
                    <div className='network-img'>
                        <img width='560px' src={networkImg} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Network;
