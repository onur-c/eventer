import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Page could not be found.Go back to&nbsp;
      <Link className="text-accent" href={"/"}>
        home page.
      </Link>
    </div>
  );
};

export default NotFound;
