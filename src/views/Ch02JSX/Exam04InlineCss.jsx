const style = {
    backgroundColor: 'red',
    color: 'black',
    fontWeight: 700
};


const Exam04InlineCss = (props) => (
    <div className="card">
    <div className="card-header">Exam04InlineCss</div>
    <div className="card-body">
        <div style={style}>
            hello World
        </div>

    </div>
  </div>
)

export default Exam04InlineCss;