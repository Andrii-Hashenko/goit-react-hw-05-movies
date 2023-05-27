import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import './Button.styled.js';
import { GoBackButton, SpanLabel } from './Button.styled';
// import { ImArrowLeft } from 'react-icons/im';

export default function ButtonGoBack({ onClick, label, arrow }) {
  // const navigate = useNavigate();
  // console.log(navigate);
  return (
    <GoBackButton type="button" onClick={onClick}>
      {arrow}
      {/* <ImArrowLeft fill="darkblue" size="32" /> */}
      <SpanLabel> {label} </SpanLabel>
    </GoBackButton>
    //{' '}
    // </GoBackButton>
  );
}

ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
