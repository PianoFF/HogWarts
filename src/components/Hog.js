import React from 'react'; 

class Hog extends React.Component{
    render(){
        const {piglet, mugshots, showHog} = this.props; 
        return(
            <div 
            className='minPigTile ui eight wide column pigTile' 
            style={{backgroundImage:`url(${mugshots[piglet.name]})`}}
            onClick={() => showHog(piglet)}
            >
                <h2> {piglet.name} </h2>
            </div>
        )
    }
}

export default Hog; 