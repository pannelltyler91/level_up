import React from 'react';
import TaskView from './Taskview'
import Dashmessage from './Dashmessage'

function Dashboard(){
    return(
        <div style={{border:'solid black 2px', paddingBottom:'20%',height:'100vh',marginLeft:'5px'}}>
            <h3><u>Dashboard</u></h3>
            <Dashmessage/>
            <TaskView/>
        </div>
    )
}

export default Dashboard;