import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/manageSlice";
import { getAllProducts, getStatus } from "./redux/selector";

import Layout from "./layout/Layout";
function App() {
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const status = useSelector(getStatus);
  const store = useSelector((state) => state.manage);
  const products = useSelector(getAllProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="App box-border">
      <Layout />
    </div>
  );
}

export default App;
