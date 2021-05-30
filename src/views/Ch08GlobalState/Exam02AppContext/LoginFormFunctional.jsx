import AppContext from "context/AppContext";
import { useContext, useState } from "react";

const LoginFormFunctional = () => {
  const [uid, setUid] = useState('');
  const appContext = useContext(AppContext);

  const handleChange = (event) => {
    setUid(event.target.valud);
  }

  const login = (event) => {
    appContext.setUid(uid);
  };

  const logout = (event) => {
    appContext.setUid('');
  };

  return (
    <div className="card">
    <div className="card-header">LoginFormFunctional</div>
    <div className="card-body">
    <div className="form-group row">
        <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="uid" value={uid} onChange={handleChange}/>
        </div>
      </div>
      {appContext.uid === "" ? (
        <button className="btn btn-success btn-sm" onClick={login}>로그인</button>
      ) : ( 
        <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
      )}
    </div>
  </div>
  )
}

export default LoginFormFunctional;