import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([]);
  return (
    <>
      <h1 className="text-center">
        WEB209 + WEB502 - REACT + TYPESCRIPT - HOADV
      </h1>
      {routes}
    </>
  );
}

export default App;
