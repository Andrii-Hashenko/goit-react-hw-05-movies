import { Title } from './PageHeading.styled.js';
import PropTypes from 'prop-types';

export default function PageHeading({ text }) {
  return <Title>{text}</Title>;
}
PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
