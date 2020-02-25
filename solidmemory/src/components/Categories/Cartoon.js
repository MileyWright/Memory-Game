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

    handleClick = id => {
        this.shuffleArray();
        this.handleScore(id);
        console.log(this.state.timesClicked);
    }

    handleScore = id => {
        this.state.cartoon.forEach(item => {
            if (id === item.id && item.clicked === false) {
                item.clicked = true;
                this.setState({Clicked: false});
                this.handleIncrement();
            } else if ( id === item.id && item.clicked === true) {
                if (this.state.currentScore > this.state.highScore) {
                    this.setState({highScore: this.state.currentScore});
                }
                this.setState({currentScore: 0});
                this.setState({Clicked: true});
                this.state.cartoon.forEach(item =>
                    (item.clicked = false)
                )
            }
        });
    };

    shuffleArray = () => {
        //shuffles the array of objects
        const shuffledArr = this.shuffle(this.state.cartoon);
        this.setState({shuffledArr});
    };

    handleIncrement = () => {
        this.setState({currentScore: this.state.currentScore + 1})
    };

    //function that takes an array as a parameter and shuffles it
    shuffle = array => {
        let currentIndex = array.length,
        temporaryValue,
        randomIndex;

        //while there remain elements to shuffle
        while (0 !== currentIndex) {
            //pick a remaining item
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        

        //then swap it with the current item
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array
    };



    render(){
        return(
            <div>
           
            Cartoon here
            </div>
        )
        }
}

export default Cartoon;