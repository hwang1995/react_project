import React from 'react';

const BoardListItem = (props) => {
    const { bno, btitle } = props.board;
    const { changeBoard, removeBoard } = props;
    return (
        <div
        key={bno}
        className="d-flex align-items-center justify-content-between border-bottom"
      >
        <div className="d-flex">
          <span style={{ width: "80px" }}>{bno}</span>
          <span>{btitle}</span>
        </div>
        <div>
          <button
            className="btn btn-outline-primary btn-sm mr-1"
            onClick={() => changeBoard(bno)}
          >
            변경
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => removeBoard(bno)}
          >
            삭제
          </button>
        </div>
      </div>
    )
}

export default BoardListItem;