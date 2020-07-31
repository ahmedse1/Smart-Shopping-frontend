import AdminLogin from "./AdminLogin";
import { connect } from "react-redux";
import { login } from "../../actions/admin";
import { setUserType } from "../../actions/common";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ admins }) => ({
  loading: admins.loading
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
  setUserType: userType => dispatch(setUserType(userType))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
