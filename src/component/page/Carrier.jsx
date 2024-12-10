import React from 'react'

function Carrier() {
  return (
    <>
    <div className="container" style={{marginTop:100}}>
       <div className="row">
           <h1 className="text-center mt-5">COME WORK <b style={{color:'orange'}}>WIth us!</b></h1>

           <div className="col-md-12 mt-4">
               <p className="c">
                   First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The
                   work environment enables both professional and personal growth.
               </p>
           </div>
       </div>
   </div>

   <div className="container">
       <div className="row">
           <h1 className="text-center mt-5">HOW TO <b style={{color:'orange'}}>APPLY!</b></h1>

           <div className="col-md-12 mt-4">
               <p className="c">
                   First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The
                   work environment enables both professional and personal growth.
               </p>
           </div>
       </div>
   </div>

   <div className="container">
       <div className="row">
           <div className="col-md-5 ">
               <h4 className="mt-5" style={{fontWeight:200}}>Steep learning curve</h4>
               <p className="text-dark">Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself
                   grow!
               </p>

               <h4 className="mt-3"  style={{fontWeight:200}}>Growth opportunities</h4>
               <p className='text-dark'>Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself
                   grow!</p>

               <h4 className="mt-3" style={{fontWeight:200}}>Exciting work environment</h4>
               <p className="text-black">Work in a highly motivated environment with talented people. A positive work environment,
                   ensures a productive and happy you.</p>

           </div>
           <div className="col-md-6">
               <div className="card" style={{boxShadow:'2px 2px 2px 2px',color:'orange'}}>
                   <span className="text-center">Share your Details</span>
                   <div className="card-body">
                       <form action="">
                           <div className="mb-4">
                               <label for="">Your NAME</label>
                               <input type="name" className="form-control" placeholder="NAME"/>
                           </div>
                           <div className="mb-4">
                               <label for="">Your EMAIL</label>
                               <input type="email" className="form-control" placeholder="email"/>
                           </div>
                           <div className="mb-4">
                               <label for="">Your PHone</label>
                               <input type=" PHone" className="form-control" placeholder=" PHone"/>
                           </div>
                           <div className="mb-4">
                               <label for="">Massage</label>
                               <input type="massage" className="form-control" placeholder="massage"/>
                           </div>
                           <div className="mb-4">
                               <button className="btn btn-warning btn-lg text-light">SUBMIT</button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
           <div class="col-md-2"></div>
       </div>
   </div>
   </>

  )
}

export default Carrier