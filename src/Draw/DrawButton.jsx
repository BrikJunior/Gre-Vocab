import React, { Component } from 'react';
import './DrawButton.css'

class DrawButton extends Component {
    constructor(props) {
        super(props);
        this.drawCard = this.drawCard.bind(this)
    }
    drawCard(){
        this.props.drawCard()
    }
    render() { 
        return ( 
            <div className="buttonContainer">
                <p>Hold the card to reveal the meaning</p>
                <button className="btn" onClick={this.drawCard}>Next Word</button>
            </div>
         );
    }
}
 
export default DrawButton;