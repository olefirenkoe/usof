import React from 'react';
import { useParams } from 'react-router-dom';



function OneTag() {
    let {tagName} = useParams();

    return (
        <TagInfo name={tagName}/>
    )
}


class TagInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterMethod: "",
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
                </div>
                <div className='questionDiv'>
                    <h1>Questions tagged [ {this.props.name} ]</h1>
                  
                </div> 
            </div>
        )
    }   
}

export default OneTag;