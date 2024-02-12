import Link from "next/link"

const NotFound = () => {
  return (
    <div className="min-h-screen">Page could not be found.Go back by clicking <Link className="text-cyan-700" href={"/"}>here.</Link></div>
  )
}

export default NotFound