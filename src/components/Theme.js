import "../styles/theme.css"
import imgabout from "../images/23_white logo-01.png"





const Theme = ({pos}) => {
    

    return (
                    <div className="theme-body" style={ {
        
                        transform: 'translateZ('+pos+'px)',
                        
                        }}>
                                <div className="theme-wrapper" >
                                                {/* <img src={imgabout} alt="" className='about-img' />
                                                <h2> P R E S E N T S</h2> */}
                                                <div class="heading">
                                                <h1 class="neon">SPECTRAL SPLENDORS</h1>
                                                </div>               
                                </div>
                    
                    </div>
       
        
              
    );
};

export default Theme