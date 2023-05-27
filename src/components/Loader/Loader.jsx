import './Loader.styled.js';
import { SpinnerEl, SpinnerContainer } from './Loader.styled.js';

import { ImSpinner3 } from 'react-icons/im';

export default function Loader() {
  return (
    <div role="alert">
      <SpinnerContainer>
        <SpinnerEl>
          <ImSpinner3 size="40" />
          {}
        </SpinnerEl>
        Loading...
      </SpinnerContainer>
    </div>
  );
}
