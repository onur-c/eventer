import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Page could not be found.Go back by clicking&nbsp;
      <Link className="text-cyan-700" href={"/"}>
        here.
      </Link>
    </div>
  );
};

export default NotFound;
