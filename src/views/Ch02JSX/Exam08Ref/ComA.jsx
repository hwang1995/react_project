import { useRef } from "react";

const ComA = (props) => {
  const inputRef = useRef();
  const divRef = useRef();

  const handleBtn = (event) => {
    inputRef.current.style.backgroundColor ='orange';
    inputRef.current.focus();
    divRef.current.innerHTML = "<img src='/logo512.png' alt='' width='100%' /><br/>내용을 추가합니다. 피나치공 피나치공"
    }
  return (
    <div className="card">
      <div className="card-header">ComA</div>
      <div className="card-body">
        <div className="form-row align-items-center">
          <input type="text" ref={inputRef} />
          
          <button className="ml-2 btn btn-primary btn-sm" onClick={handleBtn}>
            DOM 변화시키기
          </button>
          <div className="mt-3" ref={divRef}></div>
        </div>
      </div>
      
    </div>
  );
};
export default ComA;
