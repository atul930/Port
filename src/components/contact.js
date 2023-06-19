import React from 'react'
import './contact.css'

export default function contact() {
  return (
    <div>
      <section id="contact" className='pt-5'>
        <div className='container'> 
          <h2>Stay Connected</h2>
          <p className="mb-0">
                  <small>Gurugaon,Haryana,India</small>
              </p>
              <a href="mailto:atulmfp24@gmail.com" className="m-0 text-white" style={{fontSize:20}}>
                  <strong>atulmfp24@gmail.com</strong>
              </a>
              <p>(+91)9304116110</p>
              <div className="nav-icon py-3">
                  <a href="https://www.linkedin.com/in/atul-kumar-srivastava-4b4454206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVIdGHoEwTa%2BTXtSaq3srTA%3D%3D" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-linkedin"></i></a>
                  <a href="https://www.facebook.com/atul.rok.33?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-white w-3 p-2">
                      <i className="fab fa-facebook"></i></a>
                  <a href="https://instagram.com/atul__sri?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-instagram"></i></a>
                  <a href="https://github.com/atul930" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                      <i className="fab fa-github"></i></a>
              </div>
        </div>
      </section>
    </div>
  )
}
