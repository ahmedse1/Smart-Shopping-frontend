import SideBar from "./SideBar";
import { connect } from "react-redux";
import { login } from "../../actions/admin";
import { setUserType } from "../../actions/common";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users }) => ({});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
  setUserType: userType => dispatch(setUserType(userType))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
