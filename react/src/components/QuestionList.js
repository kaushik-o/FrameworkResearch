import React,{Component} from 'react'
import Question from 'components/Question'

const QuestionList = class QuestionList extends Component {
    renderQuestions(){
        console.log(this.props)
        if(!this.props.questions || !this.props.questions.length){
            return <div>Loading ...</div>
        }
       return this.props.questions.map((ques,index)=>{
           return (
               <div key={ques._id.$oid}>
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

export default QuestionList;
