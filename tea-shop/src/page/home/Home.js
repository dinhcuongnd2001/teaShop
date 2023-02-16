import React from "react";
import "./home.css";
import { getAllProducts, getCart, getQuantity } from "./../../redux/selector";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../components/product/Product";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const userCart = useSelector(getCart);
  const quantity = useSelector(getQuantity);

  const listTypes = [
    { name: "Trà Móc Câu Đặc Biệt", category: "TMCDB" },
    { name: "TRÀ NÕN TÔM", category: "TNT" },
    { name: "TRÀ ĐINH", category: "TD" },
  ];

  return (
    <>
      <img src={require("./../../asset/image/banner.png")} alt="#banner" />
      <div className="max-w-[1170px] m-auto">
        {listTypes.map((item, id) => (
          <div className="my-10" key={id}>
            <h1 className="title">{item.name}</h1>
            <div className="grid grid-cols-4 gap-8">
              {products
                .filter((each) => each.category == item.category)
                .map((each, id) => {
                  return <Product product={each} key={id} />;
                })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
