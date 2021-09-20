import React from 'react';

export default class Msg extends React.Component{
    constructor(){
        super();
        this.state = {
            test: [],
            format: []
        }
    }

    getTest = () => {
        let hold = sessionStorage.getItem('testList');
        let test = JSON.parse(hold);
        this.setState({test}, () => this.format())
    }

    format = () => {
        let format = this.state.test.map((item) => {
            let sub = item.items.map((subs) => {
                return <li>Name: {subs.name}</li>
            })
            return <li style={styles.li}><span><h1>{item.name}</h1> <h4>Items</h4><ol>{sub}</ol></span><button onClick={() => window.location.href="/msg?msg="+ item.name +" has been Published for production."} style={styles.button}>Publish</button></li>
        })
        this.setState({format});
    }

    componentDidMount(){
        this.getTest();
    }
    render(){

        return(
            <div style={styles.wrapper}>
                <ul id="publish" style={styles.ul}>{this.state.format}</ul>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '50%', margin: 'auto'},
    ul: {listStyleType: 'none'},
    li: {display: 'flex', width: '30vw', margin: '5vh auto 0 auto', justifyContent: 'space-between', paddingBottom: '5vh', borderBottom: '1px groove #1c1cffc4'},
    button: {maxHeight: '7vh', backgroundColor: 'rgba(0,0,0,0)', border: '1px solid #1c1cffc4', color: '#1c1cffc4', padding: '15px', marginTop: '50px'}
}