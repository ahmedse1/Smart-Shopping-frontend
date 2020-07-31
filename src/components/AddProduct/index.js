import AddProduct from "./AddProduct";
import { connect } from "react-redux";
import {
  addCategory,
  getCategories,
  getProducts,
} from "../../actions/category";
import { uploadImage, postProduct } from "../../actions/users";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ question }) => ({
  // questionData: question.questionData,
  // loading: question.loading,
});

const mapDispatchToProps = (dispatch) => ({
  uploadImage: (image) => dispatch(uploadImage(image)),
  postProduct: (data) => dispatch(postProduct(data)),
  getProducts: (id) => dispatch(getProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
