import DrawerCustomUser from "./DrawerCustomUser";
import { connect } from "react-redux";

import { getCategories, deleteCategory } from "../../actions/category";

const mapStateToProps = ({ category, admins, users }) => ({
  categories: category.categories,
  adminData: admins.adminData,
  userData: users.userData,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  deleteCategory: (id) => dispatch(deleteCategory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCustomUser);
