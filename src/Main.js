import React from 'react';
import '../src/main.css';
import Filter from '../src/questions/Filter';

let toDate = Math.round(new Date().getTime()/1000);
let fromDate = toDate - 43200;

console.log(toDate);
console.log(fromDate);

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterMethod: null
        }
    }

    updateData = (value) => {
        this.setState({ filterMethod: value })
    }
    
    render() {
        return (
            <div className='mainContainer'>
                <div className='filters'>
                    <h1 className="filterH1">Filters</h1>
                    <Filter updateData={this.updateData} nameFilter="activity"/>
                    <Filter updateData={this.updateData} nameFilter="votes"/>
                    <Filter updateData={this.updateData} nameFilter="creation"/>
                </div>
                <div className='questionDiv'>
                    <h1>Top Questions</h1>
                    <Question filterMethod={this.state.filterMethod}/>
                </div> 
            </div>
        )
    }   
}

export default Main;


class Question extends React.Component {
    constructor (props){
        super(props);
       this.state = {
            filterMethod: this.props.filterMethod,
            // url: (this.props.filterMethod) ? `https://api.stackexchange.com/2.2/questions?pagesize=50&fromdate=${fromDate}&todate=${toDate}&tagged=javascript; react&site=stackoverflow${this.props.filterMethod}`
            //         : `https://api.stackexchange.com/2.2/questions?pagesize=50&fromdate=${fromDate}&todate=${toDate}&tagged=javascript; react&site=stackoverflow`,
            url: `https://api.stackexchange.com/2.2/questions?pagesize=50&fromdate=${fromDate}&todate=${toDate}&tagged=javascript&site=stackoverflow`, 
            resultApi: null
       }
    }

    componentDidMount() {
        console.log(this.props.filterMethod);
        let getQuestion = async () => {
            let response = await fetch(`${this.state.url}`);
            let questions = await response.json();
 
            if (questions.error_id === undefined) {
                this.setState({
                    resultApi: questions.items
                    });
            } else {
                alert("Please, reload page.");
            }
             
        }
        getQuestion();
    }

    render() {

        // let getQuestion = async () => {
        //     let response = await fetch(`${this.state.url}`);
        //     let questions = await response.json();
 
        //     if (questions.error_id === undefined) {
        //         this.setState({
        //             resultApi: questions.items
        //             });
        //     } else {
        //         alert("Please, reload page.");
        //     }
             
        // }
        // getQuestion();

        if (this.state.resultApi === null) {
            return (
                <h1>Please wait...</h1>
            )
        }
            return (
                <>
                    {this.state.resultApi.map((item) => 
                        <div  key={item.question_id} className='question'>
                            <Title title={item.title}/>
                            <div className='allStats'>
                                <Statistic score={item.score} value="votes"/>
                                <Statistic score={item.answer_count} answered={item.is_answered} value="answers"/>
                                 <Statistic score={item.view_count} value="views"/>
                            </div>
                            <div className='tagsAndOwner'>
                                <Tags tags={item.tags}/>
                                <QuestionOwner name={item.owner.display_name} reputation={item.owner.reputation} time={dataFormated(item.creation_date*1000)}/>
                            </div>
                        </div>
                    )}
                </>
            )
        
        
    }
}

function Title(props) {  
    return (
        <h3 className="title">{props.title}</h3>
    )
}

function Statistic(props) {   
    return (
        <div className={(props.value === "answers") ? (props.score > 0) ? "statistic answered" : "statistic" : "statistic"} id={(props.answered) ? "checkAnswer" : null}>{props.score}<p>{props.value}</p></div>
    )
}

function Tags(props) {
    return (
        <>
            {props.tags.map((item) => <div className="tagItem" key={item}>{item}</div>)}
        </>
    )
}

function QuestionOwner(props) {
    return (
        <div className='questionOwner'>asked {props.time} <span id='userName'>{props.name}</span> <span><b>{(props.reputation > 9999) ? `${(props.reputation/1000).toFixed(1)}K` : props.reputation}</b></span></div>
    )
}

// export default Question;

function dataFormated (date) {
    date = new Date(date)
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    if (month < 10) {
        month = `0${month}`;
    }if (day < 10) {
        day = `0${day}`;
    }if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (`${day}.${month}.${year} at ${hours}:${minutes}`);
}

