import React from 'react';

export default class Item_edit extends React.Component{
    constructor(){
        super();
        this.state = {
            id: null,
            item: {}
        }
    }

    getItemObj = () => {
        let item = JSON.parse(sessionStorage.getItem(this.state.id));
        this.setState({item});
    }

    getItemId = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        this.setState({id}, () => {
            this.getItemObj();
        });
    }

    update = () => {
        let name = document.getElementById('name');
        let subject = document.getElementById('subject');
        let question = document.getElementById('question');
        let answer = document.getElementById('answer');
        let array = [name, subject, question, answer];
        let array0 = array.map((item) => {
            if(item.value == '') return item.placeholder
            else return item.value;
        })
        let obj = this.state.item;
        obj.name = array0[0];
        obj.subject = array0[1];
        obj.question = array0[2];
        obj.answer = array0[3];
        //console.log(obj)
        let hold = JSON.stringify(obj);
        sessionStorage.setItem(this.state.item.id,hold);
        window.location.href = '/msg?msg=Item has been updated';
    }


    componentDidMount(){
        this.getItemId();
    }


    render(){


        return(
            <div style={styles.wrapper}>
                <label style={styles.label}>Name: <input id='name' style={styles.input} placeholder={this.state.item.name}/></label><br/>
                <label style={styles.label}>Subject: <input id='subject' style={styles.input} placeholder={this.state.item.subject}/></label><br/>
                <label style={styles.label}>Question: <input id='question' style={styles.input} placeholder={this.state.item.question}/></label><br/>
                <label style={styles.label}>Answer: <input id='answer' style={styles.input} placeholder={this.state.item.answer}/></label><br/>
                <input style={styles.submit} onClick={() => this.update()} type='submit' value="Submit Changes" id='submit'/>
            </div>
        )
    }
}

const styles = {
    wrapper: {margin: '10vh auto 0 auto', width: '25vw', textAlign: 'center', fontSize: '2.5vh'},
    label: {margin: "auto", display: 'flex', justifyContent: 'flex-end'},
    input: {marginLeft: 'auto', fontSize: '2.5vh'},
    submit: {backgroundColor: "rgba(0,0,0,0)",color: "#1c1cffc4", fontSize: '2vh', border: "1px solid #1c1cffc4", padding: '5px', borderRadius: '25px'}
}