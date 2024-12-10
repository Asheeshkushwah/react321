import React from 'react'

function Ourteam() {
  return (
    <>
    <div className="container ">
        <div className="row">
            <div className="col-md-5 mt-5">
                <img src="image/priyank-our team.jpg" alt="" className="w-100 animate__animated animate__rotateIn"
                    style={{height:'14cm'}}/>
            </div>
            <div className="col-md-6">
                <h1 className="mt-5">Priyank Sukhija</h1>
                <h5>C.E.O. & M.D.</h5>
                <p className="ourc">
                    A 19-year-old dropout kid, who was just setting up his first venture, envisioned what nobody thought
                    would make him a business tycoon in the hospitality industry. Once he began, there was no stopping
                    this entrepreneur from reaching the heights he has reached today. It is the passion and creative
                    streak of Priyank Sukhija that has made him the most watched-out restaurateur of today’s time.
                    Coming from a family of lawyers, he ventured into the business world on his own with Lazeez Affaire
                    in 1999 and has never looked back since.
                </p>
                <button className="btn bg-warning btn-lg" style={{wordSpacing:'10px'}}>read more</button>
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://www.facebook.com/" style={{color:'orange',fontSize:'40px'}}><i
                                className="fa-brands fa-facebook"></i></a>
                        <a href="https://web.whatsapp.com/" style={{color:'orange',fontSize:'40px'}}><i
                                className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://twitter.com/?lang=en-in" style={{color:'orange',fontSize:'40px'}}><i
                                className="fa-brands fa-twitter"></i></a>

                    </div>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div> 
    </div>

    <div className="container mt-5">
        <div className="row ">
            <div className=" col-md-4 ">
                <div className="card shadow  mb-4 ph1">


                    <b className="text-center text-light " style={{paddingTop:'15rem',fontSize:'20px'}}>Y. P. ASHOK</b>

                    <p className="text-center text-light" style={{fontSize:'20px'}}>Chairman</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className=" card shadow  mb-4  ph2">
                    <b className="text-center text-light" style={{paddingTop:'15rem',fontSize:'20px'}}>B.R. SACHDEVA</b>

                    <p className="text-center text-light" style={{fontSize:'20px'}}>Director Finance & Legal</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className=" card shadow  mb-3  ph3">
                    <b className="text-center text-light"style={{paddingTop:'15rem',fontSize:'20px'}}>B.R. SACHDEVA</b>

                    <p className="text-center text-light" style={{fontSize:'20px'}}>Director Finance & Legal</p>
                </div>
            </div>

        </div>
    </div>

    <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card shadow mb-4  ph4">
                    <b className="text-center text-light" style={{paddingTop:'15rem',fontSize:'20px'}}>JAY SHANKAR
                        NATRAJ</b>

                    <p className="text-center text-light" style={{fontSize:'20px'}}>Franchise Lead</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className=" card shadow   mb-4  ph5">
                    <b className="text-center text-light" style={{paddingTop:'15rem',fontSize:'20px'}}>VIBHUTI SOOD</b>

                    <p className="text-center text-light" style={{fontSize:'20px'}}>PR And Communications Head</p>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
    </>
  )
}

export default Ourteam