import "../styles/theme.css"
import imgabout from "../Images/23_white logo-01.png"
import NavBar from './navLandingPage/NavBar'




const Theme = ({pos}) => {
    

    return (
                    <div className="theme-body" style={ {
        
                        transform: 'translateZ('+pos+'px)',
                        
                        }}>
                            <NavBar />
                                <div className="theme-wrapper" >
                                                <img src={imgabout} className='theme-img' />
                                                <h2> P R E S E N T S</h2>
                                                <div class="heading">
                                                <h1 class="neon">SPECTRAL <br></br> SPLENDORS</h1>
                                                {/* <h4 className="click">Click to view more</h4> */}
                                                </div>          
                                </div>
                    
                    </div>
       
        
              
    );
};

export default Theme