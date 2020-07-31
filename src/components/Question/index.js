import Question from "./Question";

import { connect } from "react-redux";
import { login, approveManager } from "../../actions/admin";
// import { getQuestions, deleteQuestion } from "../../actions/question";
import { getUsers } from "../../actions/users";

// import {addBooking, getBookings, getBookedSlots} from '../../actions/booking';

const mapStateToProps = ({ question }) => ({
  // questionData: question.questionData,
});

const mapDispatchToProps = (dispatch) => ({
  // getQuestions: (categoryId) => dispatch(getQuestions(categoryId)),
  // deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  approveManager: (data) => dispatch(approveManager(data)),
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
