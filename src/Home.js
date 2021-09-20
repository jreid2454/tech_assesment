import React from 'react';


export default class Home extends React.Component{



    render(){


        return(
            <div>
                <h1>A Little Bit About This App</h1>
                <p>Thank you for taking the time to review my take on the technical assesment.<br/>
                    I used session storage as a substitue for a database just to have some interactivty throughout the app<br/>
                    So if you close the browser and some of your items are missing, that is why.<br/><br/>
                    The "Review & Approve" tab would only be accessible to the SME's and Editors, but since I am not implementing<br/>
                    a user account system in the demo I included it in the default Nav bar. <br/>
                    Looking forward to your feedback.<br/>
                    Thanks!
                </p>
            </div>
        )
    }
}