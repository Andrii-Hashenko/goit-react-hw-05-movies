import { LinkElem } from './Navigation.styled.js';

const Navigation = () => (
  <nav>
    <LinkElem to="/">
      {}
      HomeView
    </LinkElem>

    <LinkElem to="/movies">
      {}
      Movies
    </LinkElem>
  </nav>
);

export default Navigation;
