// RRD imports
import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log('error:', error);
  return (
    <div className="error">
      <h1>Oops! Something went wrong</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20} />
          <span>Go back home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
