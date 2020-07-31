import DrawerCustom from "./DrawerCustom";
import { connect } from "react-redux";

import { getCategories, deleteCategory } from "../../actions/category";

const mapStateToProps = ({ category, admins }) => ({
  categories: category.categories,
  adminData: admins.adminData
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  deleteCategory: id => dispatch(deleteCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCustom);
