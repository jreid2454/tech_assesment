import React from 'react';


export default class Create_assesment extends React.Component{
    constructor(){
        super();
        this.state = {
            options: [],
            optionsLi: [],
            selected: [],
            selectedLi: []
        }
    }

    format = () => { console.log('is running')
         let optionsLi = this.state.options.map((item) => {
            //if(item.status == "Approved") return <li>{item.name}</li>;
            return <li style={styles.li} onClick={this.getOptionId.bind(this)} id={item.id} class={item.name}>{item.name}</li>;
        })
        this.setState({optionsLi})
    }

    getItemsFromSession = () => {
        let options = [];
        for(let i=0;i <= sessionStorage.length;i++){
            let obj = JSON.parse(sessionStorage.getItem(i));
            if (obj != null){
                if(obj.type = 'item' && obj.status == "Approved") options.push(obj)
            } 
        }
        this.setState({options}, () => this.format())
    }

    selectedFormat = () => {
        let list = this.state.selected.map((item) => {
            return <li style={styles.li} onClick={this.getSelectedId.bind(this)} id={item.id} class={item.name}>{item.name}</li>
        })
        this.setState({selectedLi: list});
    }

    removeFromOptions = (remove) =>{
        let hold;
        this.state.options.forEach((item, index)=>{
            if(item.id == remove.id) hold = index;
        });
        let options = this.state.options;
        options.splice(hold,1)
        this.setState({options}, () => this.format())
    }

    removeFromSelected = (remove) =>{
        let hold;
        this.state.selected.forEach((item, index)=>{
            if(item.id == remove.id) hold = index;
        });
        let selected = this.state.selected;
        selected.splice(hold,1)
        this.setState({selected}, () => this.selectedFormat())
    }

    getOptionId = (e) => {
        let obj = {
            id: e.target.id,
            name: e.target.attributes.class.nodeValue
        };
        this.removeFromOptions(obj);
        this.setState(prevState => ({
            selected: [...prevState.selected, obj]
        }), () => this.selectedFormat());
    }

    getSelectedId = (e) => {
        let obj = {
            id: e.target.id,
            name: e.target.attributes.class.nodeValue
        };
        this.removeFromSelected(obj);
        this.setState(prevState => ({
            options: [...prevState.options, obj]
        }), () => this.format());
    }

    create = () => {
        let obj = {
            name: document.getElementById('name').value,
            items: this.state.selected
        };

        let hold = sessionStorage.getItem('testList');
        hold = JSON.parse(hold);
        hold.push(obj);
        sessionStorage.setItem('testList', JSON.stringify(hold))
        window.location.href = '/msg?msg=Thank you for creating a new test';
    }

    componentDidMount(){
        this.getItemsFromSession();
    }

    render(){

        return(
            <div style={styles.wrapper}>
                <label>Name of Assesment: <input id='name'/></label>
                <div style={styles.listWrapper}>
                    <span>Questions<ul class="create_ul" style={styles.ul}>{this.state.optionsLi}</ul></span>
                    <span>Selected<ul class="create_ul" style={styles.ul}>{this.state.selectedLi}</ul></span>
                </div>
                <input id='submit' onClick={() => this.create()} type="submit" value="Create Assesment" style={styles.submit} />
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '70%', margin: '2vh auto 0 auto'},
    listWrapper: {display: 'flex', width: '70vw', margin: '5vh auto 0 auto', justifyContent: 'space-between'},
    ul: {listStyleType: 'none', border: '1px solid black', width: '25vw', height: '40vh', padding: '0'},
    submit: {backgroundColor: "rgba(0,0,0,0)",color: "#1c1cffc4", fontSize: '2vh', border: "1px solid #1c1cffc4", padding: '5px', borderRadius: '25px', marginTop: '5vh'}
}