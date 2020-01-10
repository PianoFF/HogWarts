import React from 'react';
import Hog from './Hog';
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



    render(){
        const {piggies} = this.props

        return(
            <div className="ui grid container">
                    {piggies.map(piglet => 
                        <Hog mugshots={mugshots[piglet.name]} piglet={piglet}/>
                    )}
            </div>
        )
    }
}

export default HogBrowser; 