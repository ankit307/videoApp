import React from 'react';
 export class SearchBar extends React.Component{
    state={term:'React'};
    onChangeHandler=(event)=>{
        console.log(event.target.value);
        let value=event.target.value
        this.setState({
            term: value
        })
    }
    onFormSubmitHandle=async (event)=>{
        event.preventDefault();
        console.log(event.target.video.value)
        const value=event.target.video.value;
        this.props.loadYouTubeVideos(value);
    }
    render(){
        return <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={this.onFormSubmitHandle}>
                <div className='field'>
                <label>Video Search</label>
                <input type='text' name='video' value={this.state.term} onChange={this.onChangeHandler}/>
                </div>
                </form>
        </div>
    }
}