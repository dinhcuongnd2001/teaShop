// viet cac selections
import { createSelector } from "@reduxjs/toolkit";

export const getStatus = (state) => state.manage.status;
export const getAllProducts = (state) => state.manage.products;
export const getCart = (state) => state.user.cart;
export const getQuantity = (state) => state.user.quantity;
