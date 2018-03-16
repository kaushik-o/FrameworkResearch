import React,{Component} from 'react'
import Question from '../components/question'
import {connect} from 'react-redux'
import { selectQuestion } from '../actions/index'
import { bindActionCreators } from 'redux'
class QuestionList extends Component {
    renderQuestions(){
        console.log(this.props)
        if(!this.props.questions || !this.props.questions.length){
            return <div>Loading ...</div>
        }
       return this.props.questions.map((ques,index)=>{
           return (
               <div key={ques._id.$oid} onClick={()=>this.props.selectQuestion(ques)}>
               <div className='row'>
                   <div className='col-xs-1 text-right'>{index+1}.</div>
                    <div className='col-xs-11'>
                    <Question 
                     question={ques}
                     /></div>
               </div>
               <hr/>
               </div>
           );
       });
    }
    render(){
        return (
            <div>{this.renderQuestions()}</div>
        
        )
    }
}
function mapStateToProps(state) {
    console.log("STATE",state);
    return {
        questions:state.questions
    }
}

function mapDispatchToProps(dispatch){
    console.log(dispatch);
    console.log(selectQuestion);

    var temp = bindActionCreators({'selectQuestion':selectQuestion},dispatch);
    console.log(temp);
    return temp;
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)