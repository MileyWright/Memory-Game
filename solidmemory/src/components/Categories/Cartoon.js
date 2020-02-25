import React, {Component} from 'react';
import axios from 'axios';
class Cartoon extends Component {
    constructor(){
        super();
        this.state = {
            cartoon: [],
            highScore: 0,
            currentScore: 0,
            Clicked: false
        }
    }

    componentDidMount(){
        axios.get('https://solidmemory.herokuapp.com/90sCartoon')
        .then(res =>{ 
          this.setState({
            cartoon: res.data
          })
        console.log(res.data)
        })
    }
    render(){
        return(
            <div>
           
            Cartoon here
            </div>
        )
        }
}

export default Cartoon;