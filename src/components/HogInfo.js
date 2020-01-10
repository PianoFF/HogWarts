import React from 'react'

const HogInfo = props => {
    const {piglet, mugshots, showHog} = props; 
    return(
        <div 
        className='minPigTile ui eight wide column pigTile' 
        style={{backgroundImage:`url(${mugshots[piglet.name]})`}}
        onClick={()=>showHog(piglet)}
        >
            <h2> {piglet.name} </h2>
            <p id='piggie-info'>
                {piglet.name}'s speciatly is: {piglet.specialty}. <br></br>
                {piglet.greased === true ? `${piglet.name} is greased.` : `${piglet.name} is not greased`}.<br></br>
                {piglet.name} currently weighs {piglet.weight}kg.<br></br>
                Highest medal achieved is {piglet['highest medal achieved']}. 
            </p>
        </div>
    )
}

export default HogInfo 