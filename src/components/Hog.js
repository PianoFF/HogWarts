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

    render(){
        const {piglet, mugshot} = this.props; 

        return(
            <div>
                <div className='ui card'>
                    <div className="image">
                        <img src={mugshot}/>
                    </div>
                    <div className='content'>
                        <a className='header'>{piglet.name}</a>
                        <div className='meta'>
                            <button className="ui active button" onClick={this.showHogInfo}>
                            <i className="info icon"></i>
                                {this.state.display ? 'Hide' : 'Info'}
                            </button>
                        </div>
                    </div>
                    {
                        this.state.display &&
                        <div 
                        onClick={this.showHogInfo}
                        className='description'>
                                {piglet.name}'s speciatly is: {piglet.specialty}. <br></br>
                                {piglet.greased === true ? `${piglet.name} is greased.` : `${piglet.name} is not greased`}.<br></br>
                                {piglet.name} currently weighs {piglet.weight}kg.<br></br>
                                Highest medal achieved is {piglet['highest medal achieved']}. 
                        </div>
                    }   
                </div> 
            </div>    
        )
    };

}

export default Hog; 



/**
 * <div>
                    <div onClick={this.showHogInfo} className='visible content'>
                        <div >
                            <img src={mugshots}/>
                            <h3>{piglet.name}</h3>
                        </div>  
                    </div>
                    {
                        this.state.display &&
                        <div 
                        onClick={this.showHogInfo}
                        className='hidden content'>
                            <p id='piggie-info'>
                                {piglet.name}'s speciatly is: {piglet.specialty}. <br></br>
                                {piglet.greased === true ? `${piglet.name} is greased.` : `${piglet.name} is not greased`}.<br></br>
                                {piglet.name} currently weighs {piglet.weight}kg.<br></br>
                                Highest medal achieved is {piglet['highest medal achieved']}. 
                            </p>
                        </div>
                    }   
                </div>
 */