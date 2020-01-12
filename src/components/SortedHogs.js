import React from 'react'

const SortedHogs = (props) => {
    const {sortingPiglets} = props;
    return(
        <form className="ui form" onSubmit={e => e.preventDefault()}>
            <div className="ui buttons" onClick={(event)=>sortingPiglets(event.target.innerText)}>
                <button className="ui button" >Default</button>
                <div className="or"></div>
                <button className="ui button">Name</button>
                <div className="or"></div>
                <button className="ui button">Weight</button>
            </div>      
        </form>
    )
}

export default SortedHogs; 