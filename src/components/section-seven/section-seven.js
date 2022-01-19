import React from 'react';
import './section-seven.css'
import john1 from '../../images/johne.svg'
import john2 from '../../images/johne1.svg'
import john3 from '../../images/johne2.svg'

let card = [
    {
        img: john1,
        cardName: 'John Nelson',
        cardProf: 'Account Manager'
    },
    {
        img: john2,
        cardName: 'John Nelson',
        cardProf: 'Account Manager'
    },
    {
        img: john3,
        cardName: 'John Nelson',
        cardProf: 'Account Manager'
    }
]

const SectionSeven = () => {
    return (
        <div>
            <div className='container'>
                <div className='events'>
                    <div className='heading' style={{ display: 'flex' }} >
                        <div className='line'></div>
                        <p>07. TEAM</p>
                    </div>
                    <h2>Team & Advisors</h2>
                    <p>With a team of top technology and finance professionals, the nonprofit Lymcoin <br/>
                        expands access to low-cost financial services to fight poverty and maximize individual potential.</p>
                </div>
                <div className='team-card'>
                    {card.map((card) => (
                        <div className="team">
                            <div className='team-box'>
                                    <img src={card.img} alt=""/>
                                    <h5>{card.cardName}</h5>
                                    <p>{card.cardProf}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionSeven;
