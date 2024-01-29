import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <hr />
      <h5>.{props.meaning.partOfSpeech}.</h5>
      <p>
        {props.meaning.definition}
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
        <br />
        <Example example={props.meaning.example} />
      </p>
    </div>
  );
}
