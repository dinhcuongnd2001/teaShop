import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux";
import { getCart, getQuantity } from "./../../redux/selector";
import userSlice from "../../redux/userSilce";
import { useNavigate } from "react-router-dom";
import Checkout from "./../../components/checkout/checkout";

function Cart() {
  const [open, setOpen] = useState(false);
  const quantity = useSelector(getQuantity);
  console.log(quantity);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (result, cur) =>
      (result += parseFloat(cur.price.slice(0, -1)) * 1000 * cur.count),
    0
  );

  const removeProduct = (product) => {
    dispatch(userSlice.actions.removeProduct(product));
  };

  const continueShopping = () => {
    navigate("/");
  };

  const hanldeClose = () => {
    setOpen(false);
  };

  const hanldeOpen = () => {
    setOpen(true);
  };
  return (
    <div className="relative">
      <div className="fixed text-white top-[90px] rounded-lg shadow-2xl right-6 bg-primary p-6">
        <p className="uppercase text-left">
          Tổng Tiền: <span className="font-bold">{totalPrice}đ</span>{" "}
        </p>
        <button
          onClick={continueShopping}
          className="px-5 py-2 bg-price mt-3 mr-3 rounded-lg hover:opacity-80"
        >
          Mua thêm
        </button>
        {quantity > 0 ? (
          <button
            onClick={hanldeOpen}
            className="px-5 py-2 bg-price mt-3 ml-3 rounded-lg hover:opacity-80"
          >
            Thanh Toán
          </button>
        ) : (
          <button
            disabled
            className=" opacity-60 px-5 py-2 bg-price mt-3 ml-3 rounded-lg "
          >
            Thanh Toán
          </button>
        )}
      </div>
      {quantity == 0 ? (
        <img
          className=" my-5 m-auto"
          src={require("./../../asset/image/empty-cart.png")}
          alt="#error"
        />
      ) : (
        <>
          <TableContainer
            className="max-w-[800px] min-h-[500px] m-auto my-10"
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Count</TableCell>
                  <TableCell align="left">Cost</TableCell>
                  <TableCell align="left">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((each, index) => (
                  <TableRow
                    key={each.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index}
                    </TableCell>
                    <TableCell align="left">
                      <img
                        className="w-[75px] h-[75px]"
                        src={require(`./../../asset/image/${each.image01}`)}
                        alt=""
                      />
                    </TableCell>
                    <TableCell align="left">{each.name}</TableCell>
                    <TableCell align="left">{each.price}</TableCell>
                    <TableCell align="left">{each.count}</TableCell>
                    <TableCell align="left">
                      {parseFloat(each.price.slice(0, -1)) * 1000 * each.count}
                    </TableCell>
                    <TableCell align="left">
                      <button
                        onClick={() => removeProduct(each)}
                        className="px-5 py-1 bg-price text-white rounded-md"
                      >
                        Xóa
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Checkout open={open} handleClose={hanldeClose} />
        </>
      )}
    </div>
  );
}

export default Cart;
