import Weather from "./components/Weather";
import "./App.css";
import { Suspense } from "react";
import Loading from "./components/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Weather />
    </Suspense>
  );
};

export default App;
