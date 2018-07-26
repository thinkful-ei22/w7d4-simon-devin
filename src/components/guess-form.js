import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={e =>{
            e.preventDefault();
            const newGuess = parseInt(document.getElementById('userGuess').value);

            if(isNaN(newGuess)){
                props.setFeedback('That\'s not a number!');
            }else if(props.guesses.find(num => num === newGuess )){
                props.setFeedback('You already guessed that!')
            }else if(newGuess < 1 || newGuess > 100){
                props.setFeedback('That number isn\'t in range!');
            }else if(newGuess === props.targetNum){
                props.setFeedback('You win!');
            }else{
                props.addGuess(newGuess);
                const diff = Math.abs(newGuess - props.targetNum);

                if(diff > 25) props.setFeedback('Cold');
                else if(diff > 15) props.setFeedback('Warm...');
                else if(diff > 5) props.setFeedback('Hot');
                else props.setFeedback('Very hot!');
            }
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

