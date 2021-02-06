import React from 'react';

// let toDate = new Date().getTime();
// let fromDate = toDate - 5 * 24 * 60 * 60 * 1000;

// fetch(`https://api.stackexchange.com/2.2/questions?fromdate=1612137600&todate=1612569600&order=desc&sort=votes&site=stackoverflow`)
//     .then(function(resp) {return resp.json()}).then(function(data) {console.log(data)})



// console.log(toDate);
// console.log(fromDate);

console.log(new Date(1293840000))

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
            let response = await fetch("https://api.stackexchange.com/2.2/questions?page=1&pagesize=50&fromdate=1612137600&todate=1612569600&order=desc&min=0&max=999&sort=votes&site=stackoverflow").catch(function (error) {console.log(error)});
            let questions = await response.json();
            this.preferQuestion(questions.items);
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
            <>
                <h1>Main</h1>
                {this.renderQuestion()} 
                {/* <Question result={9}/> */}
            </>
        )
    }   
}

export default Main;

function Question(props) {
    console.log(props.result)
    return (
        <>
           {props.result.map((item) => <div className='question'>{item.title}</div>)}
        </>
    )

}

// export default Question;

// function dataFormated (date) {
//     let day = date.getDate(),
//         month = date.getMonth() + 1,
//         year = date.getFullYear(),
//         hours = date.getHours(),
//         minutes = date.getMinutes();

//     if (month < 10) {
//         month = `0${month}`;
//     }if (day < 10) {
//         day = `0${day}`;
//     }if (minutes < 10) {
//         minutes = `0${minutes}`;
//     }

//     return (`${day}.${month}.${year} ${hours}:${minutes}`);
// }