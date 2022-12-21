const BlackScreen = ({pos}) =>
{

    return(

        <>
            <div className="black-screen-wrapper" style={ {
        
        transform: 'translateZ('+pos+'px)',
        
        }}>
               
               
               <div ></div>

            </div>
        </>

    );
};

export default BlackScreen;