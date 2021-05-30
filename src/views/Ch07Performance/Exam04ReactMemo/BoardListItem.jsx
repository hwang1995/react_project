import React, {useCallback} from 'react';

const BoardListItem = (props) => {
    const { bno, btitle } = props.board;

    console.log(`${bno}의 컴포넌트를 실행함. ${new Date().toISOString()}`)

    const handleChange = useCallback(() => {
      props.changeBoard(props.board.bno, props.board);
    }, [props]);

    const handleRemove = useCallback(() => {
      props.removeBoard(props.board.bno);
    }, [props]);
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
            onClick={handleChange}
          >
            변경
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={handleRemove}
          >
            삭제
          </button>
        </div>
      </div>
    )
}

export default React.memo(BoardListItem);