import Signup from "./Signup";
import { connect } from "react-redux";
import { signUp } from "../../actions/users";

const mapStateToProps = ({ users }) => ({
  loading: users.loading
});

const mapDispatchToProps = dispatch => ({
  signUp: userData => dispatch(signUp(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
