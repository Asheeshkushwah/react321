import React from 'react'
import Slider from '../layout/Slider'

function Home() {
  return (
    <>
    <Slider/>
     <div className='container' style={{marginTop:100}}>
                <div className='row'>
                    <h1 className='text-center a'>WELCOME TO  <b style={{ color: 'orange' }}>FRIST FIDDLE</b></h1>
                    <div className='col-md-7 mt-4'>
                        <p className='b'>
                            First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector, is headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and Bougie in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands, and franchises across India.
                        </p>
                        <button className='btn btn-warning btn-lg'>JOIN THE JOURNEY</button>
                    </div>
                    <div className='col-md-5 mt-4'>
                        <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" className='w-100' />
                    </div>
                </div>
            </div>

            <div className="container-fluid c mt-3">
                <div class="row">
                    <div className="col-md-2"> </div>

                    <div className="col-md-8 text-center mt-5 img123">
                        <h2 className="d mt-5">MEDIA MENTIONS</h2>
                        <p className="e">
                            We've been making splashes and headlines since 1999 for our innovative concepts and aesthetic
                            ideations, experimental gastronomic affairs, and exotic mixology. We’ve made our way from the heart
                            of the country into the hearts of its people!
                        </p>
                        <button className="btn btn-warning mb-5">KNOW MORE</button>
                    </div>

                    <div className="col-md-2"> </div>

                </div>
            </div>

            <div className="container-fluid">
                <h1 className="text-center mt-5">Explore <b style={{ color: 'orange' }}>Our Brands</b></h1>
                <div className="row">
                    <div className="col-md-3 mb-3 ">
                        <img src="https://pn-paul.netlify.app/image/ffpic2.jpg" alt="" className='w-100' />
                    </div>
                    <div className="col-md-3  mb-3">
                        <img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" className='w-100' />
                    </div>
                    <div className="col-md-3  mb-3">
                        <img src="https://pn-paul.netlify.app/image/ffpic3.jpg" alt="" className='w-100' />
                    </div>
                    <div className="col-md-3  mb-3">
                        <img src="https://pn-paul.netlify.app/image/ffpic4.jpg" alt="" className='w-100' />
                    </div>
                </div>
            </div>

            <div className="container-fluid g mt-3">
                <div className="row">
                    <div className="col-md-2  "> </div>

                    <div className="col-md-8 text-center mt-5 " style={{ paddingTop: 90 }}>
                        <h2 className="h">EXPERIENCE OUR CONCEPTS</h2>
                        <p className="i">
                            Moving beyond just offering Indian, international, and fusion cuisines, our restaurants create magic
                            with our special events, mood-setting music, Insta-worthy aesthetics, and tongue-tingling
                            signatures! Head over to experience it for yourself!
                        </p>
                        <button className="btn btn-warning mb-5">KNOW MORE</button>
                    </div>

                    <div className="col-md-2"> </div>

                </div>
            </div>
    </>
  )
}

export default Home