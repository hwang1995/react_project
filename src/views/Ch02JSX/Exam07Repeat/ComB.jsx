const ComB = (props) => {
    const itemObj = [
        {id: '1', text: '눈사람'},
        {id: '2', text: '얼음'},
        {id: '3', text: '눈'},
        {id: '4', text: '바람'},
    ]
    return (
        <div className="card">
        <div className="card-header">ComB</div>
        <div className="card-body">
            <ul>
            {itemObj.map((item, index) => 
                <li key={item.id}>{item.text}</li>
            )}
            </ul>

    
        </div>
      </div>
    )
}

export default ComB;