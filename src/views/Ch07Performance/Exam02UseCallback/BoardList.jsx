import React, { useState, useMemo, useCallback } from "react";
import BoardListItem from "./BoardListItem";

const getBoards = () => {
  const boards = [];
  for (let i = 100; i >= 1; i--) {
    const info = {
      bno: i,
      btitle: `제목 ${i}`,
    };
    boards.push(info);
  }
  return boards;
};

const BoardList = (props) => {
  const [btitle, setBtitle] = useState("");
  const [boards, setBoards] = useState(getBoards);
  const [bno, setBno] = useState(101);

  const getLength = useMemo(() => {
      // board가 변경되었을 시에만 이것을 실행해라.
    console.log('getLength() 실행');
    return boards.length;
  }, [boards]);

  // useCallback의 밑의 함수는
  // Mount시에만 선언하면 되기 때문에 대괄호 안에 값을 비워둔다.
  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  }, []);

  const addBoard = useCallback((event) => {
    const newBoard = { bno, btitle };
    setBoards([newBoard, ...boards]);
    setBno(bno + 1);
    setBtitle("");
  }, [boards, bno, btitle]);

  const changeBoard = useCallback((bno) => {
    const newBoards = boards.map((board) => {
      if (board.bno === bno) {
        const newBoard = { ...board, btitle: board.btitle + "변경됨" };
        return newBoard;
      }
      return board;
    });

    setBoards(newBoards);
  }, [boards]);

  const removeBoard = useCallback((bno) => {
    const boardData = boards.filter((item) => item.bno !== bno);
    setBoards(boardData);
  }, [boards]);

  return (
    <div className="card">
      <div className="card-header">Your Title</div>
      <div className="card-body">
        <div>
          <span className="mr-2">게시물 수:</span>

          <span className="text-danger">{getLength}</span>

          <div className="d-flex align-items-center mt-2 mb-3">
            <span className="mr-2">제목:</span>
            <input type="text" value={btitle} onChange={handleBtitleChange} />
            <button className="btn btn-info btn-sm ml-3" onClick={addBoard}>
              추가
            </button>
          </div>
        </div>
        <div className="d-flex bg-primary text-white">
          <span className="border  p-2" style={{ width: "80px" }}>
            번호
          </span>
          <span className="border flex-fill p-2">제목</span>
        </div>

        {boards.map((board) => {
          return (
            <BoardListItem board={board} changeBoard={changeBoard} removeBoard={removeBoard} />
          );
        })}
      </div>
    </div>
  );
};

export default BoardList;
