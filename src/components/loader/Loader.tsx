import loadingGif from '../../assets/XVo6.gif';
import './Loader.css';

export const Loader = () => (
  <div className="loading-container">
    <img src={loadingGif} alt="loading..." />
  </div>
);
