import { useState } from "react";

function delayPromise(time) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, time);
  });

  return promise;
}



const Exam01AsyncControl = (props) => {
  const [loading, setLoading] = useState(false);

  // const handleRequest = (event) => {

  //   delayPromise(3000)
  //   .then(() => {
      
  //   })
  //   .catch(() => {

  //   })
  //   .finally(() => {
  //     setLoading(true);
  //   });
  // }

  const handleRequest = async (event) => {
    try {
      const result = await delayPromise(1000);
      if(result === 'success') {
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="card">
      <div className="card-header">Exam01AsyncControl</div>
      <div className="card-body">
        <button className="btn btn-primary btn-sm mr-2" onClick={handleRequest}>데이터 요청</button>
        <div className="mt-3 mr-2">
          {!loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>작업 완료</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exam01AsyncControl;
