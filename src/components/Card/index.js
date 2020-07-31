import Card from "./Card";

import { connect } from "react-redux";

import { getCategories } from "../../actions/category";

const mapStateToProps = ({ users, category, quiz }) => ({
  userData: users.userData,

  categories: category.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: (id) => dispatch(getCategories(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
