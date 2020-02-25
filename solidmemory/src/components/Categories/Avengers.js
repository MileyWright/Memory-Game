import React, {Component} from 'react';

class Avengers extends Component {
    render(){
        console.log(this.props.avengers)
        return(
            <>
            Avengers here
            </>
        )
    }
}

export default Avengers;