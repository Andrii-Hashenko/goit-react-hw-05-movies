import PropTypes from 'prop-types';

import './Button.styled.js';
import { GoBackButton, SpanLabel } from './Button.styled';

export default function ButtonGoBack({ onClick, label, arrow }) {
  return (
    <GoBackButton type="button" onClick={onClick}>
      {arrow}
      {}
      <SpanLabel> {label} </SpanLabel>
    </GoBackButton>
  );
}

ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
