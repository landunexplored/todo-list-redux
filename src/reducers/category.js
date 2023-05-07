import { v4 as uuid } from "uuid";
import { ADD_CATEGORY } from "../actions";

const initialCategoryId = uuid();
const categoryInitialState = {
  categories: [
    {
      categoryId: initialCategoryId,
      categoryName: "General",
    },
  ],
  currentCategory: initialCategoryId,
};

export function category(category = categoryInitialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return Object.assign(category, {
        categories: [
          {
            categoryId: uuid(),
            categoryName: action.payload,
          },
          ...category.categories,
        ],
      });
    default:
      return category;
  }
}
