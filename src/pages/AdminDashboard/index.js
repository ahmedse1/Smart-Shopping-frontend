import AdminDashboard from "./AdminDashboard";
import { connect } from "react-redux";
import { getAdmin } from "../../actions/admin";
// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users, admins }) => ({
  adminData: admins.adminData,
});

const mapDispatchToProps = (dispatch) => ({
  getAdmin: () => dispatch(getAdmin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
