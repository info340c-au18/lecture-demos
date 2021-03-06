import React, {Component} from 'react';
 
 class Card extends Component {
    render() {
         console.log(this.props.message);
         return (
            <div className="card">
                <div className="card-body">
                    {this.props.message}
                </div>
            </div>
        );
    }
}
 export default class CardList extends React.Component {
    render() {
         let cardArray = this.props.messages.map((msgStr) => {
            let card = <Card message={msgStr} />;
            return card;
        })
         console.log(cardArray);
         return (
            <div className="card-deck">
                {cardArray}
            </div>
        );
    }
}