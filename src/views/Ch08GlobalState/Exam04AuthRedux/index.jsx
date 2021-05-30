// import { useDispatch, useSelector } from "react-redux";
import LoginFormClass from './LoginFormClass';
import LoginFormFunctional from './LoginFormFunctional';

const Exam04AuthRedux = () => {
//   const auth = useSelector((state) => state.authReducer);
//   const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-header">Exam04AuthRedux</div>
      <div className="card-body">
          <LoginFormClass />
          <LoginFormFunctional/>
      </div>
    </div>
  );
};

export default Exam04AuthRedux;
