import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm  addGuess={props.addGuess}
                        guesses={props.guesses}
                        setFeedback={props.setFeedback}
                        targetNum={props.targetNum}
            />
        </section>
    );
}

