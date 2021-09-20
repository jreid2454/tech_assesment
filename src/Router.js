import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav.js';
import Home from "./Home.js";
import Test_Items from './Pages/Test_items.js';
import Item_Edit from "./Pages/Item_edit.js";
import New_Item from "./Pages/New_item.js";
import Pending from "./Pages/Pending.js";
import Item_View from "./Pages/Item_view.js";
import Create_Assesment from "./Pages/Create_assesment.js";
import Msg from "./Pages/Msg.js";
import Publish from "./Pages/Publish.js";
import Review from "./Pages/Review.js";
import Item_Review from "./Pages/Item_review.js";



export default class Routes extends React.Component{


    addToSessionStorage = () =>{
        if(sessionStorage.getItem('set') == null){
            Examples.forEach((item, index) => {
                let stringed = JSON.stringify(item);
                sessionStorage.setItem(index,stringed)
                let test = [];
                sessionStorage.setItem('testList', JSON.stringify(test))
            })
            sessionStorage.setItem('set', 'is set')
        }
    }

    componentDidMount(){
        this.addToSessionStorage();
    }

    render(){

        return(
            <div>
                <Nav/>
                <Router>
                    <Switch>
                        <Route exact path='/'><Home/></Route>
                        <Route path='/test_items'><Test_Items/></Route>
                        <Route path='/item_edit'><Item_Edit/></Route>
                        <Route path='/new_item'><New_Item/></Route>
                        <Route path='/pending'><Pending/></Route>
                        <Route path='/item_view'><Item_View/></Route>
                        <Route path='/create_assesment'><Create_Assesment/></Route>
                        <Route path='/msg'><Msg/></Route>
                        <Route path='/publish'><Publish/></Route>
                        <Route path='/review'><Review/></Route>
                        <Route path='/item_review'><Item_Review/></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

const Examples = [
    {
        id: 0,
        type: 'item',
        name: 'Question 0',
        subject: 'Health',
        question: 'How are you?',
        answer: 'pretty good',
        status: 'Pending',
        comments: []
    },
    {
        id: 1,
        type: 'item',
        name: 'Question 1',
        subject: 'Computer Science',
        question: 'How are you?',
        answer: 'pretty good',
        status: 'Pending',
        comments: ['commment 1', 'comment 2', 'comment 3']
    },
    {
        id: 2,
        type: 'item',
        name: 'Question 2',
        subject: 'Business',
        question: 'How are you?',
        answer: 'pretty good',
        status: 'Pending',
        comments: []
    },
    {
        id: 3,
        type: 'item',
        name: 'Question 3',
        subject: 'Business',
        question: 'How are you?',
        answer: 'pretty good',
        status: 'Approved',
        comments: ["fix typo at line 3", 'looks good now, ready to go to production']
    },
    {
        id: 4,
        type: 'item',
        name: 'Question 4',
        subject: 'Business',
        question: 'How are you?',
        answer: 'pretty good',
        status: 'Approved',
        comments: ['looks great!']
    },
    {
        id: 5,
        type: 'item',
        name: 'Question 5',
        subject: 'Business',
        question: 'How are you?',
        answer: 'pretty good',
        status: 'Reviewed',
        comments: ["needs improvment"]
    }
]