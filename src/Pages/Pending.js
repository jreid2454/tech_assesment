import React from 'react';


export default class Pending extends React.Component{
    constructor(){
        super();
        this.state = {
            formatted: new Array()
        }
    }

    list = [];
    getItemsFromSession = () => {
        let items = [];
        for(let i=0;i <= sessionStorage.length;i++){
            let obj = JSON.parse(sessionStorage.getItem(i));
            if (obj != null){
                if(obj.type = 'item') items.push(obj)
            } 
        }
        this.list = items;
    }

    format = () => {
         let list = this.list.map((item) => {
            if(item.status == "Pending") return <tr onClick={() => window.location.href="/item_view?id=" + item.id} class="item_tr"><td>{item.name}</td><td>{item.subject}</td><td>{item.status}</td></tr>;
        })
        this.setState({formatted: list})
    }

    componentDidMount(){
        this.getItemsFromSession();
        this.format();
    }

    render(){

        return(
            <div style={styles.wrapper}>
                <p style={styles.header}>Items Pending Approval</p>
                <table cellspacing="0" id='test_item_table' style={styles.table}>
                <tr id="test_item_th" style={styles.th}><th>Name</th><th>Subject</th><th>Status</th></tr>
                <tr></tr>
                    {this.state.formatted}
                </table>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '90%', margin: 'auto'},
    new: {border: '1px groove #1c1cffc4', position: 'relative', width: '15vw', height: '7vh', color: '#1c1cffc4', paddingTop: '3vh', fontSize: '2.5vh'},
    header: {fontSize: '3.5vh', color: '#1c1cffc4', marginTop: '5vh'},
    subHeader: {fontSize: '2vh'},
    table: {width: '50%', margin: 'auto'},
}