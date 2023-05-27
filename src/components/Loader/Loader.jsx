import './Loader.styled.js';
import { SpinnerEl, SpinnerContainer } from './Loader.styled.js';
// взяли иконку из реакт-айкон и просто ей прикрутили анимацию и дали клас
// import { GiSpinalCoil } from 'react-icons/im';
import { ImSpinner3 } from 'react-icons/im';

export default function Loader() {
  return (
    <div role="alert">
      <SpinnerContainer>
        <SpinnerEl>
          <ImSpinner3 size="40" />
          {/* <GiSpinalCoil size="40" /> */}
        </SpinnerEl>
        Loading...
      </SpinnerContainer>
    </div>
  );
}
