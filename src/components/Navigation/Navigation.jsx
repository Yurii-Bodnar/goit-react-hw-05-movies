// import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, Header,Link } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();
  return (
    <Container>
        <Header>
        <nav>
      <Link to="/" end>Home</Link>
      <Link to="/movies" state={location}>Movies</Link>
    </nav>
        </Header>
 
    </Container>
  );
};

export default Navigation;
