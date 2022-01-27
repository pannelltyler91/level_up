import React from 'react';
import TaskView from './Taskview'
import Dashmessage from './Dashmessage'

function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <Dashmessage/>
            <TaskView/>
        </div>
    )
}

export default Dashboard;