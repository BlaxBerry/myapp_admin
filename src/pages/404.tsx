import { type FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <>
      404 NotFound
      <Link to="/" replace>
        <button>Back Home</button>
      </Link>
    </>
  );
};

export default NotFoundPage;
