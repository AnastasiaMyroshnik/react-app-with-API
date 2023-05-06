import { Link } from "react-router-dom";
import notFound from "./404.jpeg";

const NoMatch = () => {
  return (
    <div className="not-found">
      <img src={notFound} alt="notFound" />
      <Link className="not-found__link" to="/">Go to main page</Link>

    </div>
  )
}

export default NoMatch;