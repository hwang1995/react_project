import { useState } from "react";

const getBoardList = () => {
    console.log("GET BOARD LISTSSS")
  return [{ bno: 1, btitle: "what the hell", bcontent: "shut up" }];
};

const Exam04StateInitFun = () => {
  const [boardList, setBoardList] = useState(getBoardList); // 최초 렌더링시 한번 호출
  const [newBno, setNewBno] = useState(2);

  const addBoard = (event) => {
    setBoardList([
      ...boardList,
      {
        bno: newBno,
        btitle: `제목 ${newBno}`,
        bcontent: `내용 ${newBno}`,
      },
    ]);

    setNewBno(newBno + 1);
  };

  return (
    <div className="card">
      <div className="card-header">ComAUseStateInitFun</div>
      <div className="card-body">
        <button className="btn btn-success btn-sm" onClick={addBoard}>
          추가
        </button>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th>bno</th>
              <th>btitle</th>
              <th>bcontent</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board) => (
              <tr className="text-center" key={board.bno}>
                <th>{board.bno}</th>
                <td>{board.btitle}</td>
                <td>{board.bcontent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exam04StateInitFun;
