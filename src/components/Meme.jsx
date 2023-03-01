import { useState } from 'react';

import data from '../data';

function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemes, setAllMemes] = useState(data.data.memes);

  function getNewMeme() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const choice = allMemes[randomNum];

    setMeme((prevMeme) => ({ ...prevMeme, randomImage: choice.url }));

    return {
      topText: '',
      bottomText: '',
      randomImage: choice.url,
    };
  }

  return (
    <main className="main">
      <form action="" className="form">
        <input
          type="text"
          className="form-input form-input__top"
          maxLength={30}
          value="Shut up"
          placeholder="Text on top"
        />
        <input
          type="text"
          className="form-input form-input__bottom"
          maxLength={30}
          value="and take my money"
          placeholder="Text on bottom"
        />

        <button
          type="button"
          className="btn form-input__submit"
          onClick={getNewMeme}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <section className="meme__wrapper">
        <img src={meme.randomImage} alt="Meme" className="meme__img" />
      </section>
    </main>
  );
}

export default Meme;
