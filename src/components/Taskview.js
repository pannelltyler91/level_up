import React from 'react';

function Taskview(){
    return(
        <div style={{border:'solid black 2px',margin:'5px',height:'75vh'}}>
            <h5>Taskview</h5>
            <h6>Title</h6>
            <h6>Description</h6>
            <div id='checklist'>
                
            </div>
            <div id='assignedTeammates'>
                <div className='assignedTeammate'></div>
                <div className='assignedTeammate'></div>
                <div className='assignedTeammate'></div>

            </div>
            <div id='timeEstimated'>

            </div>
            <div id='timeElapsed'>

            </div>
            

        </div>
    )
}

export default Taskview;