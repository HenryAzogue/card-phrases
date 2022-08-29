import { useState } from 'react';
import React from 'react';
import blob from './blob.json'




const Card = () => {
  const randomIndex = Math.floor(Math.random() * blob.length);
  const [index, setIndex] = useState(randomIndex);

  const nextBtn = () => {
    const randomIndex = Math.floor(Math.random () * blob.length);
    setIndex(randomIndex)
  }  

  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871', '#2C73D2', '#008F7A', '#FF8066', '#B0A8B9', '#BE93FD',]
  const randmColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randmColor]}`

  return (
    <div className='card' style={{color: colors[randmColor]}}>
      <section className='card__first'>
        <svg style={{fill: colors[randmColor]}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"/></svg>
        <p className='first__text'>{blob[index].quote}</p>
      </section>
      <section className='card__second'>
        <p className="second__author">{blob[index].author}</p>
        <button className ='second__btnNext' 
                onClick = {nextBtn}
                style = {{background:colors[randmColor]}}
                >></button>
      </section>
    </div>
  );
};

export default Card;