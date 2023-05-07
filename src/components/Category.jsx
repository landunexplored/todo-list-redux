import { connect } from "react-redux";
import { addCategory } from "../actions";
import { useState } from "react";

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (task) => dispatch(addCategory(task)),
  };
};

function Categories({ category, addCategory }) {
  const [categoryText, setCategoryText] = useState("");

  function updateCategoryText(e) {
    setCategoryText(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();

    addCategory(categoryText.trim());
    setCategoryText("");
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={categoryText}
          onChange={updateCategoryText}
          autoFocus
        />
        <button type="submit">Add</button>
      </form>
      <select>
        {category.categories.map((category) => (
          <option key={category.categoryId}>{category.categoryName}</option>
        ))}
      </select>
    </div>
  );
}

const CategoryComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
export default CategoryComponent;
