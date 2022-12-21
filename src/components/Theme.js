import "../styles/theme.css"
import imgabout from "../Images/23_white logo-01.png"





const Theme = ({pos}) => {
    

    return (
                    <div className="theme-body" style={ {
        
                        transform: 'translateZ('+pos+'px)',
                        
                        }}>
                                <div className="theme-wrapper" >
                                                <img src={imgabout} className='theme-img' />
                                                <h2> P R E S E N T S</h2>
                                                <div class="heading">
                                                <h1 class="neon">SPECTRAL <br></br> SPLENDORS</h1>
                                                {/* <h4 className="click">Click to view more</h4> */}
                                                </div>  
                                                <p>January 26-29 2023</p>        
                                </div>
                    
                    </div>
       
        
              
    );
};

export default Theme