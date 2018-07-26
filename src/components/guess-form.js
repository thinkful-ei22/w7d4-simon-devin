import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={e =>{
            e.preventDefault();

            const newGuess = e.target.value.parseInt();

            console.log(newGuess);

            if(typeof newGuess !== 'number'){
                props.setFeedback('That\'s not a number!');
            }else if(props.guesses.find(num => num === newGuess )){
                props.setFeedback('You already guessed that!')
            }
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

