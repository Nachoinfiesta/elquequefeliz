
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: 'red', color: 'white' }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}> 🏡 Home</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}> 📒 Contacto</Link>
      </div>
      <div>
        Happy Cake 🎂
      </div>
    </nav>
  );
}

export default Navbar;
