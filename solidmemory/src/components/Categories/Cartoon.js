import React, {Component} from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import CharacterCard from '../CharacterCard';

class Cartoon extends Component {
    constructor(){
        super();
        this.state = {
            cartoon: [],
            highScore: 0,
            currentScore: 0,
            clicked: 0
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
            if (id === item.id && item.clicked === 0) {
                item.clicked = 1;
                this.setState({clicked: 0});
                this.handleIncrement();
            } else if ( id === item.id && item.clicked === 1) {
                if (this.state.currentScore > this.state.highScore) {
                    this.setState({highScore: this.state.currentScore});
                }
                this.setState({currentScore: 0});
                this.setState({clicked: 1});
                this.state.cartoon.forEach(item =>
                    (item.clicked = 0)
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
        this.setState({currentScore: this.state.currentScore + 1});
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
                <Navbar
                     currentScore={this.state.currentScore}
                     highScore={this.state.highScore}
                     title= "90s Cartoons"
                />
                {this.state.cartoon.map(character => (
                <CharacterCard
                        clicked={this.state.clicked}
                        handleClick={this.handleClick}
                        name={character.show}
                        id={character.id}
                        key={character.id}
                        image={character.image}
                />
                ))}
            </div>
        )
    }
}

export default Cartoon;