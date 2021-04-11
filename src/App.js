import React, {Component, createContext} from 'react';
import './App.css';
import Card from './Card/Card'
import DrawButton from './Draw/DrawButton'
import firebase from 'firebase/app';
import 'firebase/database';
import { DB_CONFIG } from './Config/Firebase/db_configg';

class App extends Component {
  constructor(props) {
    super(props);

    this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = { 
      cards:[],
      currentCard:{}
     }
  }

  componentWillMount(){
    const currentCards = this.state.cards
    this.database.on('child_added', snap => {
      currentCards.push({
        id:snap.key,
        eng: snap.val().eng,
        meaning: snap.val().meaning,
      })
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
    })

  }
  getRandomCard(currentCards){
    let randomIndex = Math.floor(Math.random() * currentCards.length);
    let card = currentCards[randomIndex];
    if(card === this.state.currentCard){
      this.getRandomCard(currentCards)
    }

    return(card);
  }
  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }
  render() { 
    return ( 
      <div className="App">
        <div className="cardRow">
          <Card eng={this.state.currentCard.eng} 
                meaning={this.state.currentCard.meaning} 
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
     );
  }
}
 
export default App;