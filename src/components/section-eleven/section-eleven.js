import React from 'react'
import './section-eleven.css'
import {Button} from "react-bootstrap";
import ethereum from '../../images/ethereum.svg'
import qrCode from '../../images/qr-code.svg'
import bitCoin from '../../images/bitcoin.svg'

let card = [
    {
        img: ethereum,
        cardText: '177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1',
        cardP: 'Lymcoin Wallet Address',
        img2: qrCode
    },
    {
        img3: bitCoin,
        cardText: '177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1',
        cardP: 'Lymcoin Wallet Address',
        img2: qrCode
    }
]

const SectionEleven = () => {
    return (
        <div>
            <div className='container'>
                <div className='events'>
                    <div className='heading' style={{ display: 'flex' }} >
                        <div className='line'></div>
                        <p>11. DONATE</p>
                    </div>
                    <h2>Donate to Support
                        <br/>Development</h2>
                    <p>Lymcoin is not a pre-mined coin, so all of its development is funded
                        by kind people like you.</p>
                </div>
                <div className='donate-card'>
                    {card.map((card) => (
                        <div className="donate">
                            <div className='donate-box'>
                                <img src={card.img} alt="" />
                                <img src={card.img3} alt="" />
                                <h5>{card.cardText}
                                    <br/>
                                    <p>{card.cardP}</p>
                                </h5>
                                <img src={card.img2} alt=""/>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
    );
};

export default SectionEleven;