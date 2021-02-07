import React from 'react';
import '../src/main.css';
import Filter from '../src/questions/Filter';

// let toDate = new Date().getTime();
// let fromDate = toDate - 5 * 24 * 60 * 60 * 1000;

// fetch(`https://api.stackexchange.com/2.2/questions?fromdate=1612137600&todate=1612569600&order=desc&sort=votes&site=stackoverflow`)
//     .then(function(resp) {return resp.json()}).then(function(data) {console.log(data)})



// console.log(toDate);
// console.log(fromDate);

// console.log(new Date(1293840000))

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fetch: false,
            resultFetch: null
        }
    }

    componentDidMount() {
       
       let getQuestion = async () => {
            let response = await fetch("https://api.stackexchange.com/2.2/questions?page=1&pagesize=50&fromdate=1612137600&todate=1612569600&order=desc&min=1&max=600&sort=votes&site=stackoverflow");
            let questions = await response.json();

            console.log(questions.error_id);
            if (questions.error_id === undefined) {
                this.preferQuestion(questions.items);
            } else {
                alert("Please, reload page.");
            }
            
        }
        getQuestion();
    }

    preferQuestion(obj) {   
        this.setState({
            fetch: true,
            resultFetch: obj
        });
        this.renderQuestion();
    }

    renderQuestion() {
        if (this.state.fetch === true) {
            return(<Question result={this.state.resultFetch}/>);
        }else {
            return;
        }
    }

    render() {
        return (
            <div className='mainContainer'>
                <Filter/>
                <div className='questionDiv'>
                    <h1>Top Questions</h1>
                    {this.renderQuestion()} 
                </div> 
            </div>
        )
    }   
}

export default Main;

function Question(props) {
    console.log(props.result)
    return (
        <>
           {props.result.map((item) => 
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
               
            </div>)}
        </>
    )

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

console.log(dataFormated(new Date(1612186345*1000)))
