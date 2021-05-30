import AppContext from "context/AppContext";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSetUidAction } from "redux/auth-reducer";

const AppHeader = () => {
  const appContext = useContext(AppContext);
  const globalUid = useSelector((state) => state.authReducer.uid);
  const dispatch = useDispatch();

  const logout = (event) => {
    appContext.setUid("");
    dispatch(createSetUidAction(""));
  };
  return (
    <nav
      className="navbar bg-dark navbar-dark text-white font-weight-bold 
                    justify-content-between"
    >
      <Link to="/" className="navbar-brand">
        <img src="/logo512.png" alt="" width="30" height="30" className="align-top" /> React
      </Link>
      <div>
        {appContext.uid === "" && globalUid === "" ? (
          <Link to="/ch08/exam02" className="btn btn-success btn-sm">
            로그인
          </Link>
        ) : (
          <div className="d-flex align-items-center">
            <span className="mr-2">userId:  {appContext.uid || globalUid}</span>
            <Link to="/" className="btn btn-success btn-sm" onClick={logout}>
              로그아웃
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppHeader;
