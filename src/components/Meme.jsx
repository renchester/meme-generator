function Meme() {
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

        <button type="submit" className="btn form-input__submit">
          Get a new meme image 🖼
        </button>
      </form>
      <section className="meme__wrapper">
        <span></span>
      </section>
    </main>
  );
}

export default Meme;
