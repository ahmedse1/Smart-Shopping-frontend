import Products from "./Products";
import { connect } from "react-redux";
import {
  addCategory,
  getCategories,
  getProducts,
} from "../../actions/category";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ category }) => ({
  loading: category.loading,
  products: category.products,
});

const mapDispatchToProps = (dispatch) => ({
  addCategory: (data) => dispatch(addCategory(data)),
  getCategories: () => dispatch(getCategories()),
  getProducts: (id) => dispatch(getProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
