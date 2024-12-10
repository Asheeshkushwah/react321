import React from 'react'

function Contact() {
  return (
    <>
    <div className="container  mt-5">
       <div className="row">
           <h4 style={{fontWeight:300}}>SEND US MESSAGE</h4>
           <div className=" col-md-6">
               <form action="">

                   <div>
                       <label for="">name</label>
                       <input type="text" placeholder="name" className="form-control"/>
                   </div>

                   <div>
                       <label for="">email</label>
                       <input type="EMAIL" placeholder="email" className="form-control"/>
                   </div>


                   <div>
                       <label for="">d.o b</label>
                       <input type="Date" placeholder="" className="form-control"/>
                   </div>

                   <div>
                       <label for="mobile"></label>
                       <input type="mobile" placeholder="mobile" className="form-control"/>
                   </div>

                   <div>
                       <label for="">massage</label>

                       <input type="massage" placeholder="massage " className="form-control"/>
                   </div>
                   <button className="btn btn-lg btn-warning mt-5">submit</button>
               </form>
           </div>
           <div className=" col-md-6">
               <h2 style={{fontWeight:300}}>CONTACT INFO</h2>
               <h6 style={{color:'orange'}}>Address</h6>
               <p>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</p>
               <b style={{color:'orange'}}>For Franchise Enquiry</b>
               <p>
                   mobile:
                   <span style={{color:'orange'}}>+91 9313663486</span>
               </p>
               <p>
                   email:
                   <span style={{color:'orange'}}> franchise@firstfiddle.in</span>
               </p>
               <span style={{color:'orange'}}>For HR Enquiry</span>
               <p>
                   mobile:
                   <span style={{color:'orange'}}>+91 9999304427</span>
               </p>
               <p>
                   email:
                   <span style={{color:'orange'}}> hr@firstfiddle.in</span>
               </p>
               <span style={{color:'orange'}}>For Other Enquiry</span>
               <p>
                   mobile:
                   <span style={{color:'orange'}}>7676380000</span>
               </p>
               <p>
                   email:
                   <span style={{color:'orange'}}>customercare@firstfiddle.in </span>
               <p>Open: Monday - Saturday 10:30 - 19:30</p>
               </p>
           </div>
       </div>
   </div>

   </>
  )
}

export default Contact