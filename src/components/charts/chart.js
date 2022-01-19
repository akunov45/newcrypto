import React from 'react';
// import { Button } from 'react-bootstrap';

// import mobi from '../../images/mobi.svg';
import './chart.css';
import pie from "../../images/pie-chart.svg";
import suitcase from "../../images/suitcase.png";
import objective from "../../images/objective.png";
import Group from "../../images/Group.svg";

import chartGroup from "../../images/chart1.svg"

let group = [
    {
        chartText: "Current Price",
        chartTxt: "$541.27",
        chartImg: chartGroup
    },
    {
        chartText: "Market Cap ",
        chartTxt: "$147 547 106",
        chartImg: chartGroup
    },
];

const Charts = () => {
    return (
        <div>
            <div className='container'>

                <div className='group9'>
                    <div style={{display: 'flex'}}>
                        <div className='line'>

                        </div>
                        <p>02. BENEFITS</p>
                    </div>
                    <h2>Lymcoin Benefits</h2>
                </div>

                <div style={{display: 'flex'}}>
                    {group.map((item, key) => {
                        return<div className='group10' key={key}>
                            <div>
                                <p>{item.chartText}</p>
                                <h3>{item.chartTxt}</h3>
                            </div>
                            <img src={item.chartImg} alt=""/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Charts;
