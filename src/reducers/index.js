import { combineReducers } from "redux";
import { category } from "./category";
import { todo } from "./todo";

export const rootReducer = combineReducers({ category, todo });
