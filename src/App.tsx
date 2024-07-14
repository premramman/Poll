import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<>loading</>}>
      <Outlet />
    </Suspense>
  )
}

export default App