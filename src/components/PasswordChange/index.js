import PasswordChange from "./PasswordChange";
import { connect } from "react-redux";
import { updatePassword } from "../../actions/users";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ category }) => ({
  loading: category.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updatePassword: (data) => dispatch(updatePassword(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChange);
