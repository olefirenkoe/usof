import React from 'react';

class QuestionOwner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showImg: false
        }
        this.preview = this.preview.bind(this);
    }

    preview() {
        this.setState(state => ({
            showImg: !state.showImg
        }));
    }

    render(){
        return (
            <div className='questionOwner'>
                asked {this.props.time} 
                <span id='userName' onMouseOver={this.preview} onMouseOut={this.preview}>
                    {this.props.name} 
                </span>
                {(this.state.showImg) ? <img className="ownerimg" src={(this.props.img)} alt="userimg"/> : null} 
                 <span>
                    <b>{(this.props.reputation > 9999) ? `${(this.props.reputation/1000).toFixed(1)}K` : this.props.reputation}</b>
                </span>
            </div>
        )
    }
    
}

export default QuestionOwner;