import React from 'react';
import Hog from './Hog';
import HogInfo from './HogInfo';
import augustus_gloop from '../hog-imgs/augustus_gloop.jpg';
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg';
import cherub from '../hog-imgs/cherub.jpg';
import galaxy_note from '../hog-imgs/galaxy_note.jpg';
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg';
import mudblood from '../hog-imgs/mudblood.jpg';
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg';
import porkchop from '../hog-imgs/porkchop.jpg';
import rainbowdash from '../hog-imgs/rainbowdash.jpg';
import sobriety from '../hog-imgs/sobriety.jpg';
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg';
import trouble from '../hog-imgs/trouble.jpg';
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg';



const mugshots = {
    "Mudblood": mudblood,
    "Porkchop": porkchop,
    "Cherub": cherub,
    "Piggy smalls": piggy_smalls,
    "Trouble": trouble,
    "Sobriety": sobriety,
    "Rainbowdash": rainbowdash,
    "TruffleShuffle": truffleshuffle,
    "Bay of Pigs": bay_of_pigs,
    "The Prosciutto Concern": the_prosciutto_concern,
    "Galaxy Note": galaxy_note, 
    "Leggo My Eggo": leggo_my_eggo,
    "Augustus Gloop": augustus_gloop
  }

class HogBrowser extends React.Component {
    state = {
        selectedDisplay: {
            "Mudblood": 'hog',
            "Porkchop": 'hog',
            "Cherub": 'hog',
            "Piggy smalls": 'hog',
            "Trouble": 'hog',
            "Sobriety": 'hog',
            "Rainbowdash": 'hog',
            "TruffleShuffle": 'hog',
            "Bay of Pigs": 'hog',
            "The Prosciutto Concern": 'hog',
            "Galaxy Note": 'hog', 
            "Leggo My Eggo": 'hog',
            "Augustus Gloop": 'hog'
        }
    }

    showHogInfo = (piglet) => {
        this.state.selectedDisplay[piglet.name] = this.state.selectedDisplay[piglet.name] === 'hog' ? 'hogInfo' : 'hog'
        this.setState({}); 
        console.log(piglet)
    }

    render(){
        const hogDisplay = (piglet) => {
            return(
                <div>
                    {this.state.selectedDisplay[piglet.name] === 'hog' && 
                    <Hog piglet={piglet} mugshots={mugshots} showHog={this.showHogInfo}/>}

                    {this.state.selectedDisplay[piglet.name] === 'hogInfo' && 
                    <HogInfo piglet={piglet} mugshots={mugshots} showHog={this.showHogInfo}/>}                    
                </div>
            )     
        }
        const {piggies} = this.props

        return(
            <div className="ui grid container">
                {piggies.map(piglet => 
                    hogDisplay(piglet)
                )}
            </div>
        )
    }
}

export default HogBrowser; 