import { useState } from 'react';

import data from '../data';

function Meme(props) {
  const { memes } = data.data;

  function getNewMeme() {
    return memes[Math.floor(Math.random() * memes.length)].url;
  }

  let [memeImage, setMemeImage] = useState(getNewMeme());

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
          onClick={() => setMemeImage(getNewMeme)}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <section className="meme__wrapper">
        <img src={memeImage} alt="Meme" className="meme__img" />
      </section>
    </main>
  );
}

export default Meme;
