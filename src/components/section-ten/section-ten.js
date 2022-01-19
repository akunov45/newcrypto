import React from 'react';

/*Local dependencies*/
import './section-ten.css';
import {Button} from "react-bootstrap";


let card = [
    {
        position: 16,
        data: 'April 2019',
        cardText: 'Ethyl Voting',
        cardP: 'The Ethyl Community Fund Proposal has started their voting.',
        btnText: 'Read more'
    },
    {
        position: 30,
        data: 'May 2019',
        cardText: 'Chainges Conference',
        cardP: 'Join the first world-class quality blockchain and cryptocurrency conference',
        btnText: 'Read more'
    },
    {
        position: 10,
        data: 'June 2019',
        cardText: 'Ethyl Voting',
        cardP: 'Catapult Lymcoin (version 2.0) will come sometime this year',
        btnText: 'Read more'
    }

];

const SectionTen = () => {
    return (
        <div>
            <div className='container'>
                <div className='events'>
                    <div className='heading' style={{ display: 'flex' }} >
                        <div className='line'></div>
                        <p>10. EVENTS</p>
                    </div>
                    <h2>Upcoming Events</h2>
                </div>
                <div className='events-card'>
                    {card.map((card) => (
                        <div>
                            <div className='events-box'>
                                <h2>{card.position}</h2>
                                <h4>{card.data}</h4>
                                <h2>{card.cardText}</h2>
                                <p>{card.cardP}</p>
                                <Button className='btn btn-last' variant='secondary' size='sm'>
                                    {card.btnText.toUpperCase()}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionTen;
