import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetNum: Math.floor(Math.random()*100)+1,
            guesses: [],
            feedback: 'Make your guess!',
            isWhatDisplaying: false
        }
    }

    setIsWhatDisplayingState(val){
        this.setState({
            isWhatDisplaying: val
        })
    }

    addGuessToState(num){
        console.log('Adding ', num);
        console.log(this.state.guesses);
        const newArr = [...this.state.guesses, num];
        this.setState({
            guesses: newArr
        })
    }

    setFeedbackState(feedback){
        this.setState({
            feedback
        })
    }
    
    resetGame(){
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            targetNum: Math.floor(Math.random()*100)+1
        })
    }

    render(){
        const count = this.state.guesses.length+1;
        return (
            <div>
                <Header reset={()=>this.resetGame()}
                        setWhat={val=>this.setIsWhatDisplayingState(val)}
                        isWhat={this.state.isWhatDisplaying}
                />
                <GuessSection   feedback={this.state.feedback} 
                                addGuess={num=>this.addGuessToState(num)}
                                guesses={this.state.guesses}
                                setFeedback={feedback=>this.setFeedbackState(feedback)}
                                targetNum={this.state.targetNum}
                />
                <GuessCount count={count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

export default Game;