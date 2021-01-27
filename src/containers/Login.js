import LoginClass from "../templates/LoginClass";
import { compose } from "redux";
import { connect } from "react-redux";
import * as Actions from "../reducks/users/operations";

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      signIn() {
        dispatch(Actions.signIn())
      }
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LoginClass);
