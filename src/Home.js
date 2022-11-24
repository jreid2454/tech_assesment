import React from 'react';


export default class Home extends React.Component{



    render(){


        return(
            <div id="introWrapper">
                <h1>A Little Bit About This App</h1>
                <p>The purpose of this site is to demo the frontend of an application meant for teachers and administrators to create tests for students. 
<br/><br/>
I used session storage as a substitute for a database just to have some interactivity throughout the app, so if you close the browser and some of your items are missing, that is why.
<br/><br/>
The "Review & Approve" tab would only be accessible to administrators, but since I am not implementing a user account system in this demo, I included it in the default Nav bar.
<br/><br/>
Things you can do in this app
<br/><br/>
<ul>
    <li>Create & Edit a test question</li>
    <li>Review questions and leave comments</li>
    <li>Approve questions</li>
    <li>Create Assessments using approved questions</li>
    <li>Publish Assessments ( currently doesn’t do anything )</li>
</ul>
<br/><br/>
Enjoy!
                </p>
            </div>
        )
    }
}