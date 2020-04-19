import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Paragraph from './Components/Paragraph';
import Textfield from './Components/Textfield';
import Textarea from './Components/Textarea';
import Button from './Components/Button';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TargetCard from './TargetCard';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { CONSTANTS } from './utils/Constants';
import CardDetails from './CardDetails';
const update = require('immutability-helper');

class App extends Component {

  state = {
    showSuccess: false,
    showErrorAlert: false,
    targetCard: [],
    defaultCardData: 
      [{id: 0, content: <Paragraph content={CONSTANTS.PARAGRAPH_CONTENT}/>, text: "paragraph"},
      {id: 1, content: <Textfield type={CONSTANTS.TEXT_TYPE} keyVal={CONSTANTS.TEXTFIELD_KEY} label={CONSTANTS.TEXTFIELD_NAME_LABEL} placeholder={CONSTANTS.TEXTFIELD_NAME_PLACEHOLDER} handleInput={(key, value) => this.handleInput(key, value)} />, text: "text"},
      {id: 2, content: <Textfield type={CONSTANTS.EMAIL_TYPE} keyVal={CONSTANTS.EMAIL_KEY} label={CONSTANTS.TEXTFIELD_EMAIL_LABEL} placeholder={CONSTANTS.TEXTFIELD_EMAIL_PLACEHOLDER} handleInput={(key, value) => this.handleInput(key, value)} />, text: "text"},
      {id: 3, content: <Textarea label={CONSTANTS.TEXTAREA_LABEL} placeholder={CONSTANTS.TEXTAREA_PLACEHOLDER} handleInput={(key, value) => this.handleInput(key, value)} />, text: 'textArea'},
      {id: 4, content: <div className="text-right"><Button title="Reset" handleReset={(key) => this.handleReset(key)}/><Button title="Back to Source" handleReset={(key) => this.handleReset(key)}/><Button title="Submit" handleSubmit={() => this.handleSubmit()}/></div>}],
    sourceCard: 
      [{id: 0, content: <Paragraph content={CONSTANTS.PARAGRAPH_CONTENT}/>, text: "paragraph"},
      {id: 1, content: <Textfield type={CONSTANTS.TEXT_TYPE} keyVal={CONSTANTS.TEXTFIELD_KEY} label={CONSTANTS.TEXTFIELD_NAME_LABEL} placeholder={CONSTANTS.TEXTFIELD_NAME_PLACEHOLDER} handleInput={(key, value) => this.handleInput(key, value)} />, text: "text"},
      {id: 2, content: <Textfield type={CONSTANTS.EMAIL_TYPE} keyVal={CONSTANTS.EMAIL_KEY} label={CONSTANTS.TEXTFIELD_EMAIL_LABEL} placeholder={CONSTANTS.TEXTFIELD_EMAIL_PLACEHOLDER} handleInput={(key, value) => this.handleInput(key, value)} />, text: "text"},
      {id: 3, content: <Textarea label={CONSTANTS.TEXTAREA_LABEL} placeholder={CONSTANTS.TEXTAREA_PLACEHOLDER} handleInput={(key, value) => this.handleInput(key, value)} />, text: 'textArea'},
      {id: 4, content: <div className="text-right"><Button title="Reset" handleReset={(key) => this.handleReset(key)}/><Button title="Back to Source" handleReset={(key) => this.handleReset(key)}/><Button title="Submit" handleSubmit={() => this.handleSubmit()}/></div>}],
  }

  componentDidMount() {
    this.resetLocalStorage();
    const json = localStorage.getItem('sourceCard'), targetJson = localStorage.getItem("targetCard");
    const sourceCard = JSON.parse(json), targetCard = JSON.parse(targetJson);
    sourceCard && sourceCard.map((c) => {
      return this.state.defaultCardData && this.state.defaultCardData.map((cJson) => {
        if(c.id === cJson.id){
          c.content = cJson.content;
        }
      })
    })
    targetCard && targetCard.map((c) => {
      return this.state.defaultCardData && this.state.defaultCardData.map((cJson) => {
        if((c && c.id) === cJson.id){
          c.content = cJson.content;
        }
      })
    })
    if(sourceCard){
      this.setState(() => ({ sourceCard, targetCard: targetCard ? targetCard : [] }));
    }    
  }

  componentDidUpdate(prevProps, prevStates){
    const json = JSON.stringify(this.state.sourceCard), targetJson = JSON.stringify(this.state.targetCard);
    localStorage.setItem('sourceCard', json);
    localStorage.setItem('targetCard', targetJson);
  }

  resetLocalStorage = () => {
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("desc");
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { sourceCard } = this.state;
    const dragCard = sourceCard[dragIndex];
    this.setState(
      update(this.state, {
        sourceCard: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  moveCards = (dragIndex, hoverIndex) => {
    const { targetCard } = this.state;
    const dragCard = targetCard[dragIndex];
    this.setState(
      update(this.state, {
        targetCard: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        }
      })
    )
  }

  handleReset = (key) => {
    let tgtCard = this.state.targetCard && this.state.targetCard.filter((tCard) => tCard);
    if(tgtCard.length === 5 && key === "Reset"){
      this.setState(() => ({ targetCard: this.state.defaultCardData, showErrorAlert: false }));
    } else if(tgtCard.length === 5 && key === "Back to Source"){
      this.setState(() => ({ sourceCard: this.state.defaultCardData, targetCard: [], showErrorAlert: false }));
    }
  }

  handleInput = (key, value) => {
    localStorage.setItem(key, value);
  }

  handleSubmit = () => {
    if(this.state.targetCard.length === 5){
      if(localStorage.getItem("fullName") && localStorage.getItem("email") &&
      localStorage.getItem("desc") && localStorage.getItem("fullName") !== "" && 
      localStorage.getItem("email") !== "" && localStorage.getItem("desc") !== ""){
          this.setState({showErrorAlert: false, showSuccess: true});
      } else {
          this.setState({showErrorAlert: true, showSuccess: false});
      }
    }
  }

  handleBack = () => {
    this.resetLocalStorage();
    this.setState({showErrorAlert: false, showSuccess: false});
  }

  addItem = (id) => {
      let trgCard = this.state.targetCard, targetIds = [];
      trgCard.map((tCard) => {tCard && targetIds.push(tCard.id)});
      let scCard = this.state.sourceCard;
      let srcCard = scCard.filter((sCard) => { return sCard.id !== id });
      this.state.defaultCardData.map((defCardData) => {
        if(defCardData.id === id && !targetIds.includes(id)){
          trgCard.push(defCardData);
        }
      })
      this.setState({targetCard: trgCard, sourceCard: srcCard});
  }

  render() {
    let style = { position: "relative" };
    return (
      <div>
        <Header />
        <Navbar />
        <div className="appIntroParent">
          <div className="appIntro" style={style}>
              {(this.state.sourceCard && this.state.sourceCard.length > 0) ?
                this.state.sourceCard.map((card, i) => (
                <Card
                  key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  content={card.content}
                  moveCard={this.moveCard}
                  handleDrop={(id) =>  this.addItem(id)}
                />)) : <p className="panelIndicator">{CONSTANTS.SOURCE_TEXT}</p>
              }
          </div>
          <div className="appIntro" style={style}>
                {
                  this.state.showErrorAlert && <div className="alertError">{CONSTANTS.ERROR_MESSAGE}</div>
                }
                {
                  this.state.showSuccess && <CardDetails handleBack={this.handleBack}/>
                }
                {
                  !this.state.showSuccess && 
                  <TargetCard
                    moveCard={this.moveCards}
                    targetCardData = {this.state.targetCard && this.state.targetCard.filter((tCard) => tCard)}
                    addItem={(id) =>  this.addItem(id)}
                  />
                }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);


