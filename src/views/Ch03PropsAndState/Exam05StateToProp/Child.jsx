const Child = (props) => {
    console.log(props);
    return (
        <div className="card" >
            <div className="card-header">
                Child
            </div>
            <div className="card-body">
                Your Body
                <button className="btn btn-info btn-sm" onClick={props.changeImage}>
                    이미지 변경
                </button>
                <div className="mt-2"> 
                    <img src={`/${props.img}`} width="100%" alt='dskdskd' />
                </div>
            </div>
        </div>
    )
}

export default Child;