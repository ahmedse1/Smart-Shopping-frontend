import UsersDropdown from "./UsersDropdown";

import { connect } from "react-redux";

import { getUsers } from "../../actions/users";

const mapStateToProps = ({ users, category, quiz }) => ({
  usersArray: users.usersArray,
  categories: category.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersDropdown);
