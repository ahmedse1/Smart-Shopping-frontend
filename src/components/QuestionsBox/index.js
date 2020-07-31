import QuestionsBox from "./QuestionsBox";

import { connect } from "react-redux";
import { getUsers } from "../../actions/users";


// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ users }) => ({
  usersArray: users.usersArray,
  loading: users.loading
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsBox);
