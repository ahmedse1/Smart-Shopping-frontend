import Orders from "./Orders";
import { connect } from "react-redux";
import { addCategory, getCategories } from "../../actions/category";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ category }) => ({
  loading: category.loading,
});

const mapDispatchToProps = (dispatch) => ({
  addCategory: (data) => dispatch(addCategory(data)),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
