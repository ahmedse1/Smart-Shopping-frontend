import Home from "./Home";
import { connect } from "react-redux";
import { login, getUser } from "../../actions/users";
import { getCategories } from "../../actions/category";

const mapStateToProps = ({ users, quiz }) => ({
  userData: users.userData,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
