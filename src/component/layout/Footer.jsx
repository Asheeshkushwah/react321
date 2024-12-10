import React from 'react'

function Footer() {
  return (
   <>
    <div className="container-fluid " style={{background:'rgb(23,17,17)',marginTop:'30px'} }>
        <div className="row">

            <div className="col-md-1"></div>
            <div className="col-md-3">
                <img src="image/ff-logo-02.png" alt="" style={{marginTop:'30px',width:'80%'}}/>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
                <h1 className="text-white ">
                    CONTACT <b style={{color:'orange'}}>US</b>
                </h1>
                <p className="text-white">We're a team focusing on redefining the way the hospitality industry works by
                    bringing in concept
                    based restaurants across India. We are truly committed to catering to the ever-changing cosmopolitan
                    taste of the customer and revolutioning the F & B industry!
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <h6 style={{color:'orange'}}>ADDRESS
                            <p className="text-white mt-3">
                                S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi
                                110017
                            </p>
                        </h6>
                    </div>
                    <div className="col-md-6">
                        <h6 style={{color:'orange'}}>ENQUIRY
                            <p className="mt-3 " style={{color:'orange'}}>EMAIL :
                                <b className="text-white">customercare@firstfiddle.in</b>
                            </p>
                        </h6>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-6">
                            <a href="https://www.facebook.com/" style={{textDecoration:'none'}}>
                                <i className="fa-brands fa-facebook" style={{color:'orange',fontSize:'40px'}}></i>
                            </a>
                            <a href="https://twitter.com/?lang=en-in" style={{textDecoration:'none'}}>
                                <i className="fa-brands fa-twitter"style={{color:'orange',fontSize:'40px'}}></i>
                            </a>
                            <a href="https://web.whatsapp.com/" style={{textDecoration:'none'}}>
                                <i className="fa-brands fa-whatsapp"style={{color:'orange',fontSize:'40px'}}></i>
                            </a>
                        </div>
                        <div className="col-md-6"> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-black ">
        <div className="row ">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">

                <p className="text-white">EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG | APP COPYRIGHT ©
                    2021 FIRST FIDDLE
                    F&B PRIVATE LIMITED</p>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
   </>
  )
}

export default Footer