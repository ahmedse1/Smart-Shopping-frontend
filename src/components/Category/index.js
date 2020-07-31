import Category from "./Category";

import { connect } from "react-redux";
import { login, approveManager } from "../../actions/admin";
import { getUsers } from "../../actions/users";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ question }) => ({});

const mapDispatchToProps = (dispatch) => ({
  approveManager: (data) => dispatch(approveManager(data)),
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
