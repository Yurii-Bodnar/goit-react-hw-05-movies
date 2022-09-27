// import { Link, NavLink } from 'react-router-dom';
import { Container, Header,Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
        <Header>
        <nav>
      <Link to="/" end>Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
        </Header>
 
    </Container>
  );
};

export default Navigation;
