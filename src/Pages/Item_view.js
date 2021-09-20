import React from 'react';


export default class Item_view extends React.Component{
    constructor(){
        super();
        this.state = {
            id: null,
            item: {},
            comments: []
        }
    }

    getComments = () => {
        let array = this.state.item.comments;
        let comments = [];
        if(array.length == 0){
            comments.push(<li>No Comments</li>)
            this.setState({comments});
        } else {
            comments = array.map((item) => {
                return <li style={styles.comment}>{item}</li>
            })
            this.setState({comments})
        }
    }

    getItemObj = () => {
        let item = JSON.parse(sessionStorage.getItem(this.state.id));
        this.setState({item}, () => {
            this.getComments();
        });
    }

    getItemId = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        this.setState({id}, () => {
            this.getItemObj();
        });
    }

    componentDidMount(){
        this.getItemId();
    }


    render(){


        return(
            <div style={styles.wrapper}>
                <h1>{this.state.item.name}</h1><br/>
                <h2>{this.state.item.subject}</h2><br/>
                <div style={styles.QnA}>
                    <div style={styles.subQnA}>
                        <p style={styles.QnAheader}>Question</p><br/>
                        <p>{this.state.item.question}</p>
                    </div>
                    <div style={styles.subQnA}>
                        <p style={styles.QnAheader}>Answer</p><br/>
                        <p>{this.state.item.answer}</p>
                    </div>
                </div>
                <h3>Comments</h3>
                <ul style={styles.ul}>{this.state.comments}</ul>
            </div>
        )
    }
}

const styles = {
    wrapper: {margin: '10vh auto 0 auto', textAlign: 'center', fontSize: '2.5vh', paddingBottom: '20vh'},
    QnA: {display: 'flex', width: '40vw', justifyContent: "space-between", margin: 'auto'},
    subQnA: {border: '1px solid #1c1cffc4', padding: '20px'},
    QnAheader: {color: '#1c1cffc4'},
    ul: {listStyleType: 'none', padding: '0'},
    comment: {margin: '2.5vh'}
   }