import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show",
  collapseButtonText = "Show test",
  buttonColor = "red",
  className = "",
  expanded = false,
}) {
  const [showText, setShowText] = useState(false);


  function collapseWordsAtEnd(sentence, numWords) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // If the number of words to collapse is greater than or equal to
    // the total number of words, return the original sentence
    if (numWords >= words.length) {
        return sentence;
    }

    // Slice the array to keep only the desired number of words from the end
    let collapsedWords = words.slice(-numWords);

    // Join the words back into a string
    let collapsedSentence = collapsedWords.join(' ');

    return collapsedSentence;
}


  return (
    <div className={`default ${className}`}>
      <p>{ showText? children:collapseWordsAtEnd(children, collapsedNumWords)}</p>
    </div>
  );
}
