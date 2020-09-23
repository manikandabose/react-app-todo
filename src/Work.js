import React from 'react'

const Work = (props) => {
    return (
        <div>
            Work: &nbsp;
            <input type="text" value={props.value} 
                onChange={(event) => props.changeWorkHandler(event.target.value)} /> &nbsp;
            <button onClick={props.displayWorkHandler}>Show</button>
        </div>
    )
}

export default Work;
