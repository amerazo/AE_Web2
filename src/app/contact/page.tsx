// import type { NextPage } from "next";

// const Contact: NextPage = () => {
//   return (
//     <>
//       <section className="contact section" id="contact">
//         <div className="container">
//           <div className="row">
//             <div className="section-title padd-15">
//               <h2>Contact Me</h2>
//             </div>
//           </div>
//           <div className="row">
//             {/* Email */}
//             <div className="contact-info-item padd-15 col-md-12 text-md-right">
//               <div className="icon">
//                 <i className="fa fa-envelope" />
//               </div>
//               <h4>Email</h4>
//               <p>angelica.erazo22@gmail.com</p>
//             </div>
//           </div>
//           {/* Contact Form */}
//           <div className="row">
//             <form className="contact-form padd-15">
//               <div className="row">
//                 <div className="form-item col-6 padd-15">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Name*"
//                     />
//                   </div>
//                 </div>
//                 <div className="form-item col-6 padd-15">
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Email*"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="form-item col-12 padd-15">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Subject*"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="form-item col-12 padd-15">
//                   <div className="form-group">
//                     <textarea
//                       className="form-control"
//                       placeholder="Your Message*"
//                       defaultValue={""}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12 padd-15">
//                   <button type="submit" className="btn">
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           {/* Contact Form Ended */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* Email */}
            <div className="contact-info-item padd-15 col-md-12 text-md-right">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>angelica.erazo22@gmail.com</p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="row">
            <form
              className="contact-form padd-15"
              action="mailto:angelica.erazo22@gmail.com"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                      name="name"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                      name="subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message*"
                      name="message"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;
