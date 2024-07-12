import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={`login`}>login</Link>
      <Link to={`/`}>home</Link>
      <Suspense fallback={<>loading</>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default App