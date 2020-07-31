import AddCategory from "./AddCategory";
import { connect } from "react-redux";
import { addCategory, getCategories } from "../../actions/category";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ category }) => ({
  loading: category.loading,
});

const mapDispatchToProps = (dispatch) => ({
  addCategory: (data) => dispatch(addCategory(data)),
  getCategories: (id) => dispatch(getCategories(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
