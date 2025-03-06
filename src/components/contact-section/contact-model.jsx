// import PropTypes from "prop-types";

// export function ContactModal({ isOpen, setIsOpen }) {
//     return (
//         <div className={`modal fade ${isOpen ? "show d-block" : ""}`} 
//              tabIndex="-1" 
//              role="dialog" 
//              aria-hidden={!isOpen}>
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title">Contact Us</h5>
//                         <button type="button" 
//                                 className="btn-close" 
//                                 onClick={() => setIsOpen(false)} 
//                                 aria-label="Close">
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <p>Let's get started! Fill in your details and we'll get back to you.</p>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-primary">Submit</button>
//                         <button type="button" 
//                                 className="btn btn-secondary" 
//                                 onClick={() => setIsOpen(false)}>
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// ContactModal.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     setIsOpen: PropTypes.func.isRequired,
// };
