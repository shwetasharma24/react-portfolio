import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src={require('../images/profilePicture.png')}  alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
                     <a href="https://www.linkedin.com/in/shweta-sharma24/">
       						<span style={{display:"flex", width:"max-content"}}> 
                         <span className='fa fa-linkedin' style={{
                            color:"black", 
                            backgroundColor:"white", 
                            width:"30px", 
                            height:"30px",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:"50%",
                            marginRight:"10px"
                           }}></span>
                           
                           <span style={{color:"grey"}}>
                           https://www.linkedin.com/in/shweta-sharma24   
                           </span>  
                        </span>
                     </a>
                     <br></br>
                     
   						<span style={{display:"flex", width:"max-content"}}> 
                        <span className='fa fa-google-plus' style={{
                            color:"black", 
                            backgroundColor:"white", 
                            width:"30px", 
                            height:"30px",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:"50%",
                            marginRight:"10px"
                           }}></span>
                           
                        <span style={{color:"grey"}}>
                           {resumeData.website}  
                        </span>  
                     </span>
   
                    {/* <span>{resumeData.website}</span> */}
       				</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}