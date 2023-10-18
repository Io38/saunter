import { Navigation } from "containers/navigation";
import React, { useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { getPaths } from "redux/slices/paths/pathsSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPaths());
  }, [dispatch]);

  return <Navigation />;
}

export default App;
