import React from 'react';
import "./Card.css"

const Card = (props) => (
    <div className="card-container">
        <div className="card flip">
            <div className="front">
                <div className="eng">{props.eng}</div>
            </div>
            <div className="back">
                <div className="meaning">{props.meaning}</div>
            </div>
        </div>
    </div>
)

export default Card;