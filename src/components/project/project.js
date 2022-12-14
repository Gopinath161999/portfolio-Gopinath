// import React, {useState} from 'react';
// import "./project.css";


// const projects = ({img,title,role,desc,github_link}) => {

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [show, setShow]= useState(false);
//   return (
//     <a href={github_link}>
//         <div 
//         className='project' 
//         onMouseEnter={()=> setShow(true)} 
//         onMouseLeave={()=> setShow(false)}>
//             {
//               show ? (
//                 <div>
//                     <h4>{title}</h4>
//                     <p>{desc}</p>
//                     <p>{role}</p>
//                 </div>
//               ) : (
//                 <img src={img} alt=""/>

//               )
//             }
//         </div>
//     </a>
//   )
// }

// export default projects