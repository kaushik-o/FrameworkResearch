import React, {Component} from 'react'

export default class Question extends Component {
    render(){
        return (
           <div className="row">
                <div className="col-xs-12"><b>{this.props.question.text}</b></div>
                <div className="col-xs-12"><b>Answer:</b> {this.props.question.answer}</div>
            </div>
        
        )
    }
}