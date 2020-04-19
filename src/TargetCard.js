import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Card from './Card';
import { CONSTANTS } from './utils/Constants';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class TargetCard extends Component {
  render() {
    const { connectDropTarget, hovered } = this.props;
    const backgroundColor = hovered ? 'lightgreen' : 'white';
    console.log(this.props);

    return connectDropTarget(
      <div className="target" style={{ background: backgroundColor }}>
        {
            (this.props.targetCardData && this.props.targetCardData.length > 0) ?
            this.props.targetCardData.map((card, i) => (
            <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                content={card.content}
                moveCard={this.props.moveCard}
                handleDrop={(id) =>  this.props.addItem(id)}
            />)) :
            <p className="panelIndicator">{CONSTANTS.TARGET_TEXT}</p>
        }
      </div>
    );
  }
}

export default DropTarget('card', {}, collect)(TargetCard);
