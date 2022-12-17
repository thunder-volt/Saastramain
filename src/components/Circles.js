const Circle = ({colour, colour2, pos}) =>
{

    return(

        <>
            <div className="circle" >
               
               <div style={ {
                borderColor: colour2,
                boxShadow: '0 0px 100px, 0 0 2px, 0 0 10vh '+colour+', 0 0 0.5em '+colour+', 0 0 1em '+colour+', 0 10px 3px rgb(0, 0, 0)',
                transform: 'translateZ('+pos+'px)',
            }}></div>

            </div>
        </>

    );
};

export default Circle;