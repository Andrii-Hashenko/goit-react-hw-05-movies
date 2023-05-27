import Navigation from '../Navigation/Navigation';
import { Header } from './Appbar.styled.js';

export default function Appbar() {
  return (
    <Header className="header">
      <Navigation />
    </Header>
  );
}
