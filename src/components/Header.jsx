import icon from '../assets/troll-face.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={icon} alt="Meme logo" className="header-logo__img" />
        <h1 className="header-logo__title">Meme Generator</h1>
      </div>
    </header>
  );
}

export default Header;
