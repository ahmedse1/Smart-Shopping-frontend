import AccountLogin from "./AccountLogin";
import { connect } from "react-redux";
import { login } from "../../actions/users";
import { setUserType } from "../../actions/common";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users }) => ({
  loading: users.loading
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
  setUserType: userType => dispatch(setUserType(userType))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);
