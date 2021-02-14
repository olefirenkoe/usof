import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Title from '../../src/questions/Title';
import Statistic from '../../src/questions/Statistic';
import Tags from '../../src/questions/Tags';
import QuestionOwner from '../../src/questions/QuestionOwner';


let toDate = Math.round(new Date().getTime()/1000);
let fromDate = toDate - 43200;

function OneTag() {
    let {tagName} = useParams();

    return (
        <TagInfo name={tagName}/>
    )
}



class TagInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
           resultApi: null
        }
    }

    componentDidMount() {
        let name = encodeURIComponent(this.props.name)
        axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=50&fromdate=${fromDate}&todate=${toDate}&tagged=${name}&site=stackoverflow&key=${process.env.REACT_APP_KEY}`)
        .then(response => {
            this.setState({
                resultApi: response.data.items
            });
        });
    }

    render() {
    if (this.state.resultApi === null) {
        return (
            <h1>Please wait...</h1>
        )
    }
    return (
        <div className='mainContainer'>
            <div className='filters'>   
            </div>
            <div className='questionDiv'>
                <h1>Questions tagged [ {this.props.name} ]</h1>
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
                            <QuestionOwner name={item.owner.display_name} img={item.owner.profile_image} reputation={item.owner.reputation} time={dataFormated(item.creation_date*1000)}/>
                        </div>
                    </div>
                )}
            </div>
        </div> 
    )}
}

export default OneTag;

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