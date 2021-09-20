import React from 'react';


export default class Item_review extends React.Component{
    constructor(){
        super();
        this.state = {
            id: null,
            item: {},
            comments: [],
            options: []
        }
    }

    getSelected = () => {
        let current = this.state.item.status;
        let options = ['Pending', 'Reviewed', 'Approved']
        let dropdown = []
        for(let i = 0; i<3;i++){
            if(options[i] == current) dropdown.push(<option value={options[i]} selected>{options[i]}</option>);
            else dropdown.push(<option value={options[i]}>{options[i]}</option>);
        }
        this.setState({options: dropdown})
    }

    getComments = () => {
        let array = this.state.item.comments;
        let comments = [];
        if(array.length == 0){
            comments.push(<li>No Comments</li>)
            this.setState({comments}, () => this.getSelected());
        } else {
            comments = array.map((item) => {
                return <li style={styles.comment}>{item}</li>
            })
            this.setState({comments}, () => this.getSelected())
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


    update = () => {
        let comment = document.getElementById('comment').value;
        let status = document.getElementById('status').value;
        let obj = this.state.item;
        obj.comments.push(comment);
        obj.status = status;
        let hold = JSON.stringify(obj);
        sessionStorage.setItem(this.state.item.id,hold);
        window.location.href = '/msg?msg=Thank you for review an item';
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
                <textarea id='comment' style={styles.textarea}></textarea><br/>
                <ul style={styles.ul}>{this.state.comments}</ul>
                <select id='status' style={styles.select}>{this.state.options}</select><br/>
                <button style={styles.button} onClick={() => this.update()}>Submit</button>
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
    comment: {margin: '2.5vh'},
    textarea: {resize: 'none', width: '30vw', height: '15vh'},
    select: {fontSize: '3vh'},
    button: {maxHeight: '7vh', backgroundColor: 'rgba(0,0,0,0)', border: '1px solid #1c1cffc4', color: '#1c1cffc4', padding: '15px', marginTop: '50px'}

   }