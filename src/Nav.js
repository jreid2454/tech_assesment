import React from 'react';
export default class Nav extends React.Component{



    render(){


        return(
            <div style={styles.wrapper}>
                <p style={styles.logo}><a href='/'>Test Item Console</a></p>
                <p style={styles.item}><a href='/test_items'>Edit & Create</a></p>
                <p style={styles.item}><a href="/pending">Pending Approvals</a></p>
                <p style={styles.item}><a href="/create_assesment">Create Assement</a></p>
                <p style={styles.item}><a href="/review">Review & Approve</a></p>
                <p style={styles.item}><a href="/publish">Publish</a></p>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '100%', height: '10vh', backgroundColor: '#1c1cffc4', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'},
    logo: {color: 'white', fontSize: '3.25vh', flex: '2'},
    item: {color: 'white', fontSize: '2.5vh', flex: '1'}
}