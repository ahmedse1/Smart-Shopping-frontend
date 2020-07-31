import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { addCategory, getCategories } from "../../actions/category";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ category, users }) => ({
  loading: category.loading,
  info: users.userData,
});

const mapDispatchToProps = (dispatch) => ({
  addCategory: (data) => dispatch(addCategory(data)),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
