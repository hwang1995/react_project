const handleClick1 = () => {
  alert("hello world");
}

const handleClick2 = (x, y) => {
  alert(x**y);
}

const ComBFunctionalEvent = (props) => (
    <div className="card p-2">
    <div className="card-header">ComBFunctionalEvent</div>
    <div className="card-body">
      <button className="btn btn-info btn-sm mr-2" onClick={handleClick1}>
        버튼 1
      </button>
      <button className="btn btn-info btn-sm mr-2" onClick={() => handleClick2(100, 10)}>
        버튼 2
      </button>
    </div>
  </div>
)

export default ComBFunctionalEvent;