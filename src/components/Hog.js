import React from 'react'; 



class Hog extends React.Component{
    state = {
        display: false
    };

    showHogInfo = () => {
        // console.log(piglet)
        this.setState({
            display: !this.state.display
        }); 
    };

    hogDisplay = (piglet, mugshots) => {
        return(
            <div className='ui eight wide column'>
            <div onClick={this.showHogInfo}>
                <img src={mugshots}/>
                <h3>{piglet.name}</h3>
            </div>    
                {
                this.state.display &&
                    <div 
                    onClick={this.showHogInfo}>
                        <p id='piggie-info'>
                            {piglet.name}'s speciatly is: {piglet.specialty}. <br></br>
                            {piglet.greased === true ? `${piglet.name} is greased.` : `${piglet.name} is not greased`}.<br></br>
                            {piglet.name} currently weighs {piglet.weight}kg.<br></br>
                            Highest medal achieved is {piglet['highest medal achieved']}. 
                        </p>
                    </div>
                }   
           </div>
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



