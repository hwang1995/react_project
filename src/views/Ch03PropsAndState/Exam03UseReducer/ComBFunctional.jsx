import React, { useState, useReducer } from "react";
import produce from "immer";

const reducer = (prevState, action) => {
  const { type, data } = action;
  if (type === "ADD") {
    return produce(prevState, (draft) => {
      draft.push(data);
    });
  } else if (type === "DELETE") {
    const newBoards = prevState.filter(({ bno }) => bno !== action.bno);
    return newBoards;
  } else if (type === "UPDATE") {
    // const newBoards = prevState.map((item) => {
    //   const {bno} = item;
    //   if(bno === action.data.bno) {
    //     return data;
    //   } else {
    //     return item;
    //   }

    // })

    return produce(prevState, (draft) => {
      const updateItem = draft.findIndex((item) => item.bno === data.bno);
      draft[updateItem] = data;
    });
  }
  return null;
};

const ComBFunctional = (props) => {
  const [boards, dispatch] = useReducer(reducer, [
    { bno: 1, btitle: "what the hell", bcontent: "shut up" },
  ]);
  const [newBno, setNewBno] = useState(2);
  const [newBoard, setNewBoard] = useState({
    btitle: "",
    bcontent: "",
  });
  const [updateBoard, setUpdateBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: "",
  });

  const changeNewBoard = (event) => {
    const { name, value } = event.target;
    setNewBoard((prevState) => ({ ...newBoard, [name]: value }));
  };
  const addBoard = (event) => {
    dispatch({
      type: "ADD",
      data: {
        ...newBoard,
        bno: newBno,
      },
    });
    setNewBno((prevState) => prevState + 1);
    setNewBoard({
      btitle: "",
      bcontent: "",
    });
  };
  const selectBoard = (bno) => {
    const selectedBoard = boards.find(board => board.bno === bno);
    setUpdateBoard({...selectedBoard});
  };
  const removeBoard = (bno) => {
    dispatch({
      type: "DELETE",
      bno,
    });
  };
  const changeUpdateBoard = (event) => {
    const { name, value } = event.target;
    setUpdateBoard({ ...updateBoard, [name]: value });
  };

  const handleUpdate = () => {
    // bno을 우선 뒤진다.
    // console.log(updateBoard.bno);
    dispatch({
      type: 'UPDATE',
      data: updateBoard
    });
    setUpdateBoard({
      bcontent: '',
      bno: '',
      btitle: ''
    })
  }

  console.log("RERENDER")
  return (
    <div className="card mt-3">
      <div className="card-header">Component: ComBFun</div>
      <div className="card-body">
        <div className="alert alert-primary">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "100px" }}>btitle</td>
                <td>
                  <input
                    type="text"
                    name="btitle"
                    style={{ width: "100%" }}
                    value={newBoard.btitle}
                    onChange={changeNewBoard}
                  />
                </td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td>
                  <input
                    type="text"
                    name="bcontent"
                    style={{ width: "100%" }}
                    value={newBoard.bcontent}
                    onChange={changeNewBoard}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={addBoard}>
            추가
          </button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>bno</th>
                <th>btitle</th>
                <th>bcontent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => (
                <tr key={board.bno}>
                  <td>{board.bno}</td>
                  <td>{board.btitle}</td>
                  <td>{board.bcontent}</td>
                  <td style={{ width: "150px" }}>
                    <button
                      className="btn btn-info btn-sm mr-1"
                      onClick={(event) => {
                        selectBoard(board.bno);
                      }}
                    >
                      선택
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(event) => {
                        removeBoard(board.bno);
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="alert alert-primary">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "100px" }}>bno</td>
                <td>
                  <input
                    type="number"
                    name="bno"
                    style={{ width: "100%" }}
                    // readOnly
                    value={updateBoard.bno}
                    onChange={changeUpdateBoard}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: "100px" }}>btitle</td>
                <td>
                  <input
                    type="text"
                    name="btitle"
                    style={{ width: "100%" }}
                    value={updateBoard.btitle}
                    onChange={changeUpdateBoard}
                  />
                </td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td>
                  <input
                    type="text"
                    name="bcontent"
                    style={{ width: "100%" }}
                    value={updateBoard.bcontent}
                    onChange={changeUpdateBoard}
                  />
                </td>
                
              </tr>
              
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={handleUpdate}>
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComBFunctional;
