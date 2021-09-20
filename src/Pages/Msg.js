import React from 'react';

export default class Msg extends React.Component{
    constructor(){
        super();
        this.state = {
            msg: ''
        }
    }

    getMsg = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const msg = urlParams.get('msg');
        this.setState({msg})
    }

    componentDidMount(){
        this.getMsg();
    }
    render(){

        return(
            <div>
                <h1>{this.state.msg}</h1>
            </div>
        )
    }
}