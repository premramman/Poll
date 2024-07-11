import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={`login`}>login</Link>
      <Link to={`/`}>home</Link>
      <Outlet />
    </>
  )
}

export default App