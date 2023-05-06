import { v4 as uuid } from "uuid";
import { ADD_CATEGORY } from "../actions";

export function category(
  categories = [
    {
      categoryId: uuid(),
      categoryName: "General",
    },
  ],
  action
) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        {
          categoryId: uuid(),
          categoryName: action.payload,
        },
        ...categories,
      ];
    default:
      return categories;
  }
}
