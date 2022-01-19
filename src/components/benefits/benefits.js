import React from 'react';

/*Local dependencies*/
import './benefits.css';
import pie from '../../images/pie-chart.svg';
import Group from '../../images/Group.svg';
import objective from '../../images/objective.png';
import suitcase from '../../images/suitcase.png';

let card = [
    {
        position: 0.1,
        img: pie,
        cardText: 'Lymcoin Benefits',
        cardP: 'Use Lymcoin to make instant',
    },
    {
        position: 0.2,
        img: suitcase,
        cardText: 'Lymcoin Benefits',
        cardP: 'Use Lymcoin to make instant',
    },
    {
        position: 0.3,
        img: objective,
        cardText: 'Lymcoin Benefits',
        cardP: 'Use Lymcoin to make instant',
    },
    {
        position: 0.4,
        img: Group,
        cardText: 'Lymcoin Benefits',
        cardP: 'Use Lymcoin to make instant',
    },
];

const Benefits = () => {
    return (
        <div>
            <div className='container'>
                <div className='benefits'>
                    <div style={{ display: 'flex' }}>
                        <div className='line'></div>
                        <p>02. BENEFITS</p>
                    </div>
                    <h2>Lymcoin Benefits</h2>
                </div>
                <div className='benefits-card'>
                    {card.map((card) => (
                        <div>
                            <p>{card.position}</p>
                            <div className='card-box'>
                                <img src={card.img} alt='' />
                                <h4>{card.cardText}</h4>
                                <p>{card.cardP}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
