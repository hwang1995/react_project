const var1 = "리액트"
const var2 = false;
const Exam03Condition = (props) => (
    <div className="card">
    <div className="card-header">Exam03Condition</div>
    <div className="card-body">
        <h6 className="text-info">삼항 연산식을 이용한 선택 렌더링</h6>
        <div>
            <div>{var1 === "리액트" ? 'hello React' : 'Liar'}</div>
        </div>
        <h6 className="mt-4 text-info">`&&` 를 이용한 선택 렌더링</h6>
        <div>
            <div>{var1 === "리액트" && 'Hello RRRRRREact'}</div>
            <div>{var2 === false && 'Hello RRRRRREact'}</div>
        </div>
    </div>
  </div>
)

export default Exam03Condition;
