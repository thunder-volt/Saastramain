const Countdown = ({colour, colour2, pos}) =>
{

    return(

        <>
            <div className="countdown" style={ {
        
                transform: 'translateZ('+pos+'px)',
                
                }}>
               
                <div className="countdown-box"style={ {
                borderColor: colour2,
                transform: 'translateZ(60px)',               
                
                }}>

                </div>
                <div className="countdown-box"style={ {
                borderColor: colour2,                              
                
                }}>

                 <div className="timer"> timer</div>
                </div>
                <div className="countdown-box"style={ {
                borderColor: colour2,
                transform: 'translateZ(-60px)',
                
                
                
                
                }}>

                </div>
               

            </div>
        </>

    );
};

export default Countdown;