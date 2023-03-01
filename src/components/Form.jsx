function Form() {
  return (
    <form action="" className="form">
      <fieldset className="form-input__wrapper">
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
      </fieldset>
      <button type="submit" className="btn form-input__submit">
        Get a new meme image 🖼
      </button>
    </form>
  );
}

export default Form;
