import React from 'react';


export default class New_item extends React.Component{
    constructor(){
        super();
        this.state = {
            item: {}
        }
    }


    create = () => {
        let name = document.getElementById('name').value;
        let subject = document.getElementById('subject').value
        let question = document.getElementById('question').value
        let answer = document.getElementById('answer').value
        
        let obj = {
            id: null,
            type: 'item',
            name,
            subject,
            question,
            answer,
            status: 'Pending',
            comments: []
        }
        let id = sessionStorage.length + 1;
        obj.id = id;
        let hold = JSON.stringify(obj);
        sessionStorage.setItem(id,hold);
        window.location.href = '/msg?msg=Thank you for creating a new item';
    }

    render(){


        return(
            <div style={styles.wrapper}>
                <label style={styles.label}>Name: <input id='name' style={styles.input}/></label><br/>
                <label style={styles.label}>Subject: <input id='subject' style={styles.input}/></label><br/>
                <label style={styles.label}>Question: <input id='question' style={styles.input}/></label><br/>
                <label style={styles.label}>Answer: <input id='answer' style={styles.input}/></label><br/>
                <input style={styles.submit} onClick={() => this.create()} type='submit' value="Submit"/>
            </div>
        )
    }
}

const styles = {
    // wrapper: {display: 'flex', flexDirection: 'column', height: '400px', justifyContent: 'space-evenly'},
    wrapper: {margin: '10vh auto 0 auto', width: '25vw', textAlign: 'center', fontSize: '2.5vh'},
    label: {margin: "auto", display: 'flex', justifyContent: 'flex-end'},
    input: {marginLeft: 'auto', fontSize: '2.5vh'},
    submit: {backgroundColor: "rgba(0,0,0,0)",color: "#1c1cffc4", fontSize: '2vh', border: "1px solid #1c1cffc4", padding: '5px', borderRadius: '25px'}
}