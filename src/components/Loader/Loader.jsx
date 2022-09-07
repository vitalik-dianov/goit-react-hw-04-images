import ReactDOM from 'react-dom';
import { ThreeDots } from 'react-loader-spinner';
import { theme } from 'theme';
import { Overlay } from './Loader.styled';
export const Loader = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <ThreeDots color={theme.colors.primary}/>
    </Overlay>,
    document.querySelector('#loader-root')
  );
};
