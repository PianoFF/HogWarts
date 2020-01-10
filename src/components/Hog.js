import React from 'react'; 



class Hog extends React.Component{
    state = {
        selectedDisplay: {
            "Mudblood": 'hide',
            "Porkchop":  'hide',
            "Cherub":  'hide',
            "Piggy smalls":  'hide',
            "Trouble":  'hide',
            "Sobriety":  'hide',
            "Rainbowdash": 'hide',
            "TruffleShuffle":  'hide',
            "Bay of Pigs":  'hide',
            "The Prosciutto Concern": 'hide',
            "Galaxy Note":  'hide', 
            "Leggo My Eggo":  'hide',
            "Augustus Gloop":  'hide'
        }
    };

    showHogInfo = (piglet) => {
        // console.log(piglet)
        this.setState({
            selectedDisplay: {
                ...this.state.selectedDisplay,
               [piglet.name]: this.state.selectedDisplay[piglet.name] === 'hide' ? 'show' : 'hide'
            }   
        }); 
    };

    hogDisplay = (piglet, mugshots) => {
        return(
            <li className='pigTile' >
                {
                this.state.selectedDisplay[piglet.name] === 'hide' && 
                    <div 
                    style={{backgroundImage:`url(${mugshots[piglet.name]})`}}
                    onClick={() => this.showHogInfo(piglet)}>
                        <h3> {piglet.name} </h3>
                    </div>
                }
    
                {
                this.state.selectedDisplay[piglet.name] === 'show' && 
                    <div 
                    onClick={()=>this.showHogInfo(piglet)}>
                        <h2> {piglet.name} </h2>
                        <p id='piggie-info'>
                            {piglet.name}'s speciatly is: {piglet.specialty}. <br></br>
                            {piglet.greased === true ? `${piglet.name} is greased.` : `${piglet.name} is not greased`}.<br></br>
                            {piglet.name} currently weighs {piglet.weight}kg.<br></br>
                            Highest medal achieved is {piglet['highest medal achieved']}. 
                        </p>
                    </div>
                }   
            </li>                 
        )     
    };
    render(){
        const {piglet, mugshots} = this.props; 

        return(
            <div>
                {this.hogDisplay(piglet, mugshots)}
            </div>
        )
    };

}

export default Hog; 
