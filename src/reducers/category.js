import { v4 as uuid } from "uuid";
import { ADD_CATEGORY } from "../actions";

export function category(categories = [], action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return categories[
        {
          id: uuid,
          categoryName: action.payload,
        }
      ];
    default:
      return categories;
  }
}
