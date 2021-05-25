import React from 'react';
import { Link } from 'react-router-dom';
import { getBoard, deleteBoard } from './data';
import qs from 'qs';

const BoardRead = (props) => {
    const { bno } = props.match.params;
    const board = getBoard(parseInt(bno));
    const queryString = qs.parse(props.location.search, { ignoreQueryPrefix: true });
    const pageNo = (queryString.pageNo) ? parseInt(queryString.pageNo) : 1;
    
    const handleRemove = (event) => {
        deleteBoard(parseInt(bno));
        props.history.goBack();
    }
    return (
        <div className="card">
        <div className="card-header">
          BoardRead
        </div>
        <div className="card-body">
          <div>
            <p>bno: {board.bno}</p>
            <p>btitle: {board.btitle}</p>
            <p>bcontent: {board.bcontent}</p>
            <p>bwriter: {board.bwriter}</p>
            <p>bdate: {board.bdate}</p>
            <p>bhitcount: {board.bhitcount}</p>
          </div>
          <div>
            <Link to={"/ch06?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
            <Link to={`/ch06/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
          </div>
        </div>
      </div>
    )
}

export default BoardRead;