import img from './error.gif';
import './error.scss';

const Error = () => {
  return (
    <img className='error-img' src={img} alt="error" />
  )
}

export default Error;