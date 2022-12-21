import "../styles.css"

const Logo = ({pos}) =>
{

    return(

        <>
            <div className="logo-landing" style={ {
        
        transform: 'translateZ('+pos+'px)',
        
        }}>
                SHAASTRA 2023
                <br></br>
                January 26-29
                <h1 className="sub-text"></h1>

            </div>
        </>

    );
};

export default Logo;