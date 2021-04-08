import './css/Header.css'
import style from './css/Header.module.css'

const fontH2 = {
  fontSize: '70px',
  color: 'blue'
}

function Header(props) {
  return (
    <div className="wapper">
        <h1 className="header">Header</h1>
        <h2 className="primary">H2</h2>
        <h2 className={style.success}>Module H2</h2>
    </div>
  );
}

export default Header;
