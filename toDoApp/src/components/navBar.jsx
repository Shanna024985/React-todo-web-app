import { Link } from "react-router-dom"
export const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-400 p-4">
        <div className="ml-2 text-gray-900">
          <Link to="/" className="mr-8">Home</Link>
          <Link to="/elective">Elective</Link>
        </div>
      </nav>
    </>
  )
}
