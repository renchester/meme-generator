import { useEffect, useState } from 'react';

function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

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

  function handleMemeText(e) {
    const { name, value } = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="main">
      <form action="" className="form">
        <input
          type="text"
          className="form-input form-input__top"
          placeholder="Text on top"
          onChange={handleMemeText}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          className="form-input form-input__bottom"
          placeholder="Text on bottom"
          onChange={handleMemeText}
          name="bottomText"
          value={meme.bottomText}
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
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </section>
    </main>
  );
}

export default Meme;

// async () => {
//   const response = await fetch(`https://api.imgflip.com/get_memes`);
//   const data = await response.json();
//   const memes = data.data;

//   setAllMemes(memes);
// };
