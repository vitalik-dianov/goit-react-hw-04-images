import ReactDOM from 'react-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';
export const Loader = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <ThreeDots />
    </Overlay>,
    document.querySelector('#loader-root')
  );
};
