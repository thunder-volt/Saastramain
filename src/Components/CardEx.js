

export default function card(props) {
    return (
        <div>

            <div className="wrapper-parent">
                <div className="Wrapper" id={props.id}>
                    <div className="Content">
                        <div className='img-text'>
                            <h1 className='hover-text'>{props.title}</h1>
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-caption'>
                <div className='caption1'>{props.caption1}</div>
                <div className='caption2'>{props.caption2}</div>
            </div>
            {/* add image in css */}
        </div>
    )
}