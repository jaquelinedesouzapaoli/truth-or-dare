import React, { useState } from "react";
import '../App.css';

const verdade = [
  "Who is your best friend in the group?",
  "Who is the most annoying person in the group?",
  "Who is the smartest person in the group?",
  "Who is the biggest drinker in the group?",
  "Who is the most successful person in the group?",
  "Who is the person you trust the most?",
  "What would be a perfect weekend for you?",
  "If you could choose one person from the group to travel with you, who would it be?",
  "What is your most romantic memory?",
  "Which famous person would you like to meet?",
  "If you could change one thing about your body, what would it be?"
]

const desafio = [
  "Call someone and ask to borrow 200 reais",
  "Show your whatsapp conversations",
  "Imitate a character until the end of the game and don't say who it is",
  "Massage someone in the group",
  "Sing instead of talking next round"
]

function Category() {
  const [countVerdade, setCountVerdade] = useState(0);
  const [countDesafio, setCountDesafio] = useState(0);
  let [phrase, setPhrase] = React.useState('');

  function NextPhraseVerdade(countVerdade){
    let arrayVerdade = verdade.length -1;
    phrase = verdade[countVerdade];
      if(countVerdade >= arrayVerdade){
        setCountVerdade(0);
      } else {
        setCountVerdade(countVerdade + 1);
      }
      setPhrase(phrase);
        return;
  }
  function NextPhraseDesafio(countDesafio){
    let arrayDesafio = desafio.length -1;
    phrase = desafio[countDesafio];
    if(countDesafio >= arrayDesafio){
      setCountDesafio(0);
    } else {
      setCountDesafio(countDesafio + 1);
    }
      setPhrase(phrase);
      return;
    }

  return(
    <div className="container">
      <div className="phrase">
      <p>{phrase}</p>
      </div>
      <div className="buttons">
        <button className="verdade" value="Truth" onClick={() => NextPhraseVerdade(countVerdade) }> Truth </button>
        <button className="desafio" value="Dare" onClick={() => NextPhraseDesafio(countDesafio) }> Dare </button>
      </div>
    </div>
  )
}

export default Category;