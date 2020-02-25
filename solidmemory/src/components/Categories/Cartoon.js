import React, {Component} from 'react';

class Cartoon extends Component {
    render(){
        console.log(`props`,this.props.cartoon)
        return(
            <div>
           
            Cartoon here
            </div>
        )
        }
}

export default Cartoon;