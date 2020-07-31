import Product from "./Product";

import { connect } from "react-redux";
import { login, approveManager } from "../../actions/admin";
import { getUsers, deleteProduct } from "../../actions/users";
import {
  addCategory,
  getCategories,
  getProducts,
  increaseQuantity,
} from "../../actions/category";
// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ question }) => ({
  // questionData: question.questionData,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  approveManager: (data) => dispatch(approveManager(data)),
  getUsers: () => dispatch(getUsers()),
  getProducts: (id) => dispatch(getProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
