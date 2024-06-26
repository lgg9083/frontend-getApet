import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import styles from "./NavBar.module.css";
import useAuth from "../../hooks/useAuth";

function NavBar() {
  const { authenticated, logout } = useAuth();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={Logo} alt="Get A Pet" />
        <h2>Get A Pet</h2>
      </div>
      <ul>
        <li>
          <Link to="/"> Adotar</Link>
        </li>

        {authenticated ? (
          <>
            <Link to="/pets/myadptions"> Minhas Adoções</Link>
            <Link to="/pets/mypets"> Meus Pets</Link>
            <Link to="/user/profile"> Perfil</Link>
            <Link onClick={logout}>Sair</Link>
          </>
        ) : (
          <>
            <li>
              <Link to="/login"> Entrar</Link>
            </li>
            <li>
              <Link to="register">Cadastrar</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
