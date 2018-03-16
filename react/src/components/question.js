import React, {Component} from 'react'

export default class Question extends Component {
    render(){
        return (
           <div className="row">
                <div className="col-xs-12" dangerouslySetInnerHTML= {{__html:this.props.question.text}}></div>

                <div className="col-xs-12"><b>Answer:</b> <span dangerouslySetInnerHTML={{__html:this.props.question.solutionText}}></span></div>
            </div>
        
        )
    }
}