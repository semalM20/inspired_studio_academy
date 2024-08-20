// import React from "react";
// import "../style.css";
// import "../mediaqueries.css";
// import { useNavigate } from "react-router-dom";
// import courseImage from "../../assets/masterclass.jpg";
// // import courseImage from "../../assets/MASTER CLASS.jpg";
// import courseBoxImage1 from "../../assets/beginner.PNG";
// import courseBoxImage2 from "../../assets/MASTER CLASS.jpg";
// import infoItemImage1 from "../../assets/IMG-20240214-WA0016.jpg";
// import infoItemImage3 from "../../assets/IMG-20240214-WA0013.jpg";
// import Footer from "../../components/Footer";

// const Course = () => {
//   const navigate = useNavigate();

//   const handleGetEnrolled = () => {
//     navigate("/booking");
//   };

//   return (
//     <>
//       <section className="course-section">
//         <div className="course-container">
//           <div className="course-info">
//             <h1>Online Pre-Recorded Course was for £1250</h1>
//             <h1>And now for first 100 people 60% OFF/- </h1>
//             <h2 style={{ color: "#977656" }}>Now only for £500</h2>
//             <h3>| Barbers' Most Trusted and Most Affordable</h3>
//             <button className="enroll-button" onClick={handleGetEnrolled}>
//               GET ENROLLED
//             </button>
//           </div>

//           <div className="course-image">
//             <div className="flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front">
//                   <img
//                     src={courseImage}
//                     alt="Avatar"
//                     style={{ width: "300px", height: "300px" }}
//                   />
//                 </div>
//                 <div className="flip-card-back">
//                   <p style={{ fontSize: "15px" }}>
//                     Sign up now for our Barber courses. Our academy offers you
//                     the opportunity to enter a new world. Come let us teach you
//                     to create masterpieces with your own hands. The course is
//                     intended for anyone who wants to learn the art of haircuts.
//                     The course is intensive where you will learn everything in
//                     the smallest details. In this course we will teach you from
//                     scratch how to cut the most modern haircuts! We will teach
//                     you every detail through the theoretical and practical form.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="course-selection-wrapper">
//         <h2 className="course-selection-heading">Choose Your offline course</h2>
//       </div>

//       <div className="course-selection-section">
//         <div className="course-box">
//           <h3>BARBER BEGINNER COURSE</h3>
//           <div className="flip-card">
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img
//                   src={courseBoxImage1}
//                   alt="Avatar"
//                   style={{ width: "300px", height: "300px" }}
//                 />
//               </div>
//               <div className="flip-card-back">
//                 <p>
//                   What will you learn with us? *Hair cutting (sections) top part
//                   (scissors) *Using the clipper. *Use of scissors and comb
//                   *Correct sterilization of instruments. * Classic cut *Basic
//                   long mannequin hair (hair sectioning) Bonus Haircut that is
//                   the most used *Skin Fade (Shaver) *Beard (depending on the
//                   shape of the face) *Hair washing and techniques *Consultation
//                   with the Client
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="course-buttons">
//             <button id="get-enrolled-btn" onClick={handleGetEnrolled}>
//               GET ENROLLED
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "2px",
//             height: "100%",
//             backgroundColor: "#FFFFFF",
//             margin: "0 20px",
//           }}
//         ></div>

//         <div className="course-box">
//           <h3>MASTER CLASS WORKSHOP 1 TO 1</h3>
//           <div className="flip-card">
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img
//                   src={courseBoxImage2}
//                   alt="Avatar"
//                   style={{ width: "300px", height: "300px" }}
//                 />
//               </div>
//               <div className="flip-card-back">
//                 <p style={{ fontSize: "15px" }}>
//                   Master Class-WorkShop Educator: Adrian.M What you will learn:
//                   - the top part (sections, shape, texture) The sides
//                   (skin/fade, a new technique) - the uniform shape of the
//                   haircut, contrast - contour, frontal area - professional
//                   styling Beard (correct loss, contour, using the razor) - the
//                   shape according to the physiognomy of the face -beard
//                   maintenance The photo session (correct position for a
//                   professional picture) Marketing and promotion At the end you
//                   will receive the Diploma of participation!
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="course-buttons">
//             <button onClick={handleGetEnrolled}>GET ENROLLED</button>
//           </div>
//         </div>
//       </div>
//       <div className="online-info" id="online-info">
//         <h2 className="online-info-heading">More Info About Online Courses</h2>
//         <div className="info-grid">
//           <div className="info-item">
//             <img src={infoItemImage1} alt="Description of img1" />
//           </div>
//           <div className="info-item">
//             <p style={{ color: "#977656" }}>
//               <strong> Sign up now for our Barber courses. </strong>
//             </p>
//             <p>
//               Our academy offers you the opportunity to enter a new world. Come
//               let us teach you to create masterpieces with your own hands. The
//               course is intended for anyone who wants to learn the art of
//               haircuts. The course is intensive, with our models, where you will
//               learn everything in the smallest details. In this course we will
//               teach you from scratch how to cut the most modern haircuts! We
//               will teach you every detail through the theoretical and practical
//               form.
//             </p>
//             <p>
//               The online course features over 50 videos and includes a special
//               book authored by Adrian himself, valued at £100. However, you'll
//               receive the book complimentary with your course purchase.{" "}
//             </p>
//           </div>
//           <div className="info-item">
//             <img src={infoItemImage3} alt="Description of Img3" />
//           </div>
//         </div>
//       </div>
//       <div className="offline-info" id="offline-info">
//         <h2 className="offline-info-heading">
//           More Info About Offline Courses
//         </h2>
//         <div className="info-grid">
//           <div className="info-item">
//             <p style={{ color: "#977656" }}>
//               💈Beginner Barber Course 💈<br></br>{" "}
//             </p>

//             <p>
//               {" "}
//               What will you learn with us? <br></br>
//               <strong>*Hair cutting (sections) top part (scissors)</strong>
//               <strong>*Using the clipper.</strong>
//               <strong>*Use of scissors and comb</strong>
//               <strong>*Correct sterilization of instruments.</strong>
//               <strong>* Classic cut</strong>
//               <strong>*Basic long mannequin hair (hair sectioning)</strong>
//               <strong>Bonus Haircut that is the most used</strong>
//               <strong>*Skin Fade (Shaver)</strong>
//               <strong>*Beard (depending on the shape of the face)</strong>
//               <strong>*Hair washing and techniques</strong>
//               <strong>*Consultation with the Client.</strong>
//             </p>
//             <p style={{ color: "#977656" }}>
//               {" "}
//               ✂ <strong>
//                 Equipment from the Academy during the Course
//               </strong> ✂ <br></br>
//             </p>
//           </div>
//           <div className="info-item">
//             <p style={{ color: "#977656" }}>
//               At the end of the Course, you can benefit from the{" "}
//               <strong>Diploma (Internationally Accredited)</strong>. The group
//               consists of 4 people, which allows us to pay attention to each
//               student. For more details, we offer the course schedule <br></br>
//               <strong>Course duration 8 weeks</strong>
//               The course will start on:
//               <strong>Morning schedule:</strong> Monday 9:30 / 17:00 pm
//               Wednesday 9:30 /17:00 pm
//               <strong>
//                 After finishing the Course, you will have the opportunity to
//                 secure a part-time job (with Your clients), we can prepare you
//                 well and we can find you a job quickly.
//               </strong>{" "}
//               (Details will be provided at the Academy, as well as the program){" "}
//               <br></br>
//               <strong>LOCATION - 17 Gold Street NN11RA Northampton Town</strong>
//             </p>
//           </div>
//           <div className="info-item">
//             <p style={{ color: "#977656" }}>
//               {" "}
//               <strong> Master Class-WorkShop Educator: Adrian.M </strong>
//               <br></br>{" "}
//             </p>

//             <p>
//               What you will learn with us ? <br></br>
//               <strong>
//                 {" "}
//                 the top part (sections, shape, texture) The sides (skin/fade, a
//                 new technique) - the uniform shape of the haircut, contrast -
//                 contour, frontal area - professional styling Beard (correct
//                 loss, contour, using the razor) - the shape according to the
//                 physiognomy of the face -beard maintenance The photo session
//                 (correct position for a professional picture) Marketing and
//                 promotion At the end you will receive the Diploma of
//                 participation! Time schedule: We start: 11 am - My model,
//                 step-by-step presentation Break: 12:30 (15 minutes) Your model
//                 13:00 Finish 15:00 pm{" "}
//               </strong>
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Course;

// import React from "react";
// import "../style.css";
// import "../mediaqueries.css";
// import "./Course.css";
// import { useNavigate } from "react-router-dom";
// import courseImage from "../../assets/masterclass.jpg";
// import courseBoxImage1 from "../../assets/beginner.PNG";
// import courseBoxImage2 from "../../assets/master.jpg";
// import infoItemImage1 from "../../assets/IMG-20240214-WA0016.jpg";
// import infoItemImage3 from "../../assets/IMG-20240214-WA0013.jpg";
// import Footer from "../../components/Footer";
// const Course = () => {
//   const navigate = useNavigate();

//   const handleGetEnrolled = () => {
//     navigate("/booking");
//   };

//   return (
//     <>
//       <section className="course-section">
//         <div className="course-container">
//           <div className="course-info">
//             <h1>Online Beginner Barber Step-By-Step Course was for £1250</h1>
//             <h1>And now for first 100 people 60% OFF/- </h1>
//             {/* <h2 style={{ color: "#977656" }}> */}
//             <h2 style={{ color: "white" }}>
//               {" "}
//               <u>Now only for £500 </u>
//             </h2>
//             <h3>| Barbers' Most Trusted and Most Affordable</h3>
//             <button className="enroll-button" onClick={handleGetEnrolled}>
//               GET ENROLLED
//             </button>
//           </div>

//           <div className="course-image">
//             <div className="flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front">
//                   <img
//                     src={courseImage}
//                     alt="Avatar"
//                     style={{ width: "300px", height: "300px" }}
//                   />
//                 </div>
//                 <div className="flip-card-back">
//                   {/* <h4 style={{ color: "#977656" }}> */}
//                   <h4 style={{ color: "white" }}>
//                     {" "}
//                     This course, created by our expert Adrian, includes:{" "}
//                   </h4>{" "}
//                   {/* <p> */}{" "}
//                   <h5 style={{ fontSize: "14px" }}>~ Clipper Grades </h5>
//                   <h5 style={{ fontSize: "14px" }}>~ One Length Haircut </h5>
//                   <h5 style={{ fontSize: "14px" }}>~ Scissor Cut-Underhand </h5>
//                   <h5 style={{ fontSize: "14px" }}>
//                     ~ Clipper Cut 1 Fade-Tapper On The Nape{" "}
//                   </h5>
//                   <h5 style={{ fontSize: "14px" }}>~ Skin Fade </h5>
//                   <h5 style={{ fontSize: "14px" }}>~ Beard Trimm-Shape Up </h5>
//                   <h5 style={{ fontSize: "14px" }}>~ Buzz Cut Skin Fade </h5>
//                   <h5 style={{ fontSize: "14px" }}>~ Professionalism </h5>
//                   <h5 style={{ fontSize: "14px" }}>~ Consultation</h5>
//                   <h5 style={{ fontSize: "14px" }}>~ Hair Science</h5>
//                   <h5 style={{ fontSize: "14px" }}>~ Clipper Maintenance</h5>
//                   {/* </p> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="course-selection-wrapper">
//         <h2 className="course-selection-heading">
//           {" "}
//           <u>CHOOSE YOUR OFFLINE COURSE </u>
//         </h2>
//       </div>

//       <div className="course-selection-section">
//         <div className="course-box">
//           <h3>BEGINNER BARBER COURSE</h3>
//           <div className="flip-card">
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img
//                   src={courseBoxImage1}
//                   alt="Avatar"
//                   style={{ width: "300px", height: "300px" }}
//                 />
//               </div>
//               <div className="flip-card-back">
//                 {/* <h4 style={{ color: "#977656" }}> */}
//                 <h4 style={{ color: "white" }}>
//                   Beginner Barber Course Modules :
//                 </h4>
//                 <br />
//                 <h5 style={{ fontSize: "14px" }}>~ Clipper Grades </h5>
//                 <h5 style={{ fontSize: "14px" }}>~ One Length Haircut </h5>
//                 <h5 style={{ fontSize: "14px" }}>~ Scissor Cut-Underhand </h5>
//                 <h5 style={{ fontSize: "14px" }}>
//                   ~ Clipper Cut 1 Fade-Tapper On The Nape{" "}
//                 </h5>
//                 <h5 style={{ fontSize: "14px" }}>~ Skin Fade </h5>
//                 <h5 style={{ fontSize: "14px" }}>~ Beard Trimm-Shape Up </h5>
//                 <h5 style={{ fontSize: "14px" }}>~ Buzz Cut Skin Fade </h5>
//                 <h5 style={{ fontSize: "14px" }}>~ Professionalism </h5>
//                 <h5 style={{ fontSize: "14px" }}>~ Consultation</h5>
//                 <h5 style={{ fontSize: "14px" }}>~ Hair Science</h5>
//                 <h5 style={{ fontSize: "14px" }}>~ Clipper Maintenance</h5>
//               </div>
//             </div>
//           </div>
//           <div className="course-buttons">
//             <button id="get-enrolled-btn" onClick={handleGetEnrolled}>
//               GET ENROLLED
//             </button>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "2px",
//             height: "100%",
//             backgroundColor: "#FFFFFF",
//             margin: "0 20px",
//           }}
//         ></div>

//         <div className="course-box">
//           <h3>MASTER CLASS WORKSHOP 1/2/1</h3>
//           <div className="flip-card">
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img
//                   src={courseBoxImage2}
//                   alt="Avatar"
//                   style={{ width: "300px", height: "300px" }}
//                 />
//               </div>
//               <div className="flip-card-back">
//                 {/* <h4 style={{ color: "#977656" }}> */}
//                 <h4 style={{ color: "white" }}>
//                   Master Class-WorkShop Educator Modules :
//                 </h4>
//                 <br />
//                 <h5> ~ the top part </h5>
//                 <h5> ~ the sides </h5>
//                 <h5> ~ the uniform shape of the haircut </h5>
//                 <h5> ~ contrast </h5>
//                 <h5> ~ frontal area </h5>
//                 <h5> ~ styling beard </h5>
//                 <h5> ~ shape according to physiognomy </h5>
//                 <h5> ~ beard maintenance </h5>
//                 <h5> ~ marketing and promotion </h5>
//               </div>
//             </div>
//           </div>
//           <div className="course-buttons">
//             <button onClick={handleGetEnrolled}>GET ENROLLED</button>
//           </div>
//         </div>
//       </div>
//       <div className="online-info" id="online-info">
//         <h2
//           className="online-info-heading"
//           style={{ textTransform: "uppercase" }}
//         >
//           {" "}
//           <u>More Info About Online Courses </u>
//         </h2>
//         <div className="info-grid-course">
//           <div className="info-item-course">
//             <img
//               src={infoItemImage1}
//               alt="Description of img1"
//               className="h-full w-full"
//             />
//           </div>
//           <div className="info-item-course">
//             {/* <p style={{ color: "#977656", marginBottom: "5%" }}> */}
//             <p style={{ color: "white", marginBottom: "5%" }}>
//               <strong className="text-xl">
//                 {" "}
//                 Sign up now for our Barber Courses.{" "}
//               </strong>
//             </p>
//             <p>
//               Our academy offers you the opportunity to enter a new world. Come
//               let us teach you to create masterpieces with your own hands. The
//               course is intended for anyone who wants to learn the art of
//               haircuts. The course is intensive, with our models, where you will
//               learn everything in the smallest details. In this course we will
//               teach you from scratch how to cut the most modern haircuts! We
//               will teach you every detail through the theoretical and practical
//               form.
//             </p>
//             <p className="mt-3">
//               The online course features over 50 videos and includes a special
//               book authored by Adrian himself, valued at £100. However, you'll
//               receive the book complimentary with your course purchase.{" "}
//             </p>
//           </div>
//           <div className="info-item-course">
//             <img
//               src={infoItemImage3}
//               alt="Description of Img3"
//               className="h-full w-full"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="offline-info" id="offline-info">
//         <h3
//           className="offline-info-heading "
//           style={{ textTransform: "uppercase" }}
//         >
//           {" "}
//           <u>More Info About Offline Courses </u>
//         </h3>
//         <div className="info-grid-course">
//           <div className="info-item-off-course">
//             {/* <p style={{ color: "#977656" }}> */}
//             <p style={{ color: "white" }}>
//               💈Beginner Barber Course 💈<br></br>{" "}
//             </p>

//             <p>
//               {" "}
//               What will you learn with us? <br></br>
//               <strong>*The Head</strong> <br></br>
//               <strong>*One Length.</strong> <br></br>
//               <strong>*Placement of line (Fade)</strong> <br></br>
//               <strong>*Tapering</strong> <br></br>
//               <strong>* Outlines</strong> <br></br>
//               <strong>*Profile Line</strong> <br></br>
//               <strong>*Connecting - Scissor or Clipper work</strong> <br></br>
//               <strong>*The higher grade</strong> <br></br>
//               <strong>*Scissor over comb</strong> <br></br>
//               <strong>*Remove the corner from the fringe </strong> <br></br>
//               <strong>*Texturizing the top </strong> <br></br>
//               <strong>*Razor fade </strong> <br></br>
//             </p>
//             {/* <p style={{ color: "#977656" }}> */}
//             <p style={{ color: "white" }}>
//               {" "}
//               ✂ <strong>
//                 Equipment from the Academy during the Course
//               </strong> ✂ <br></br>
//             </p>
//           </div>
//           <div className="info-item-off-course">
//             {/* <p style={{ color: "#977656" }}> */}
//             <p style={{ color: "white" }}>
//               At the end of the Course, you can benefit from the{" "}
//               <strong>Diploma (Internationally Accredited)</strong>.<br></br>
//               The group consists of 4 people, which allows us to pay attention
//               to each student. For more details, we offer the course schedule{" "}
//               <br></br>
//               <strong>Course duration 8 weeks</strong>
//               The course will start on:
//               <strong>Morning schedule:</strong> Monday 9:30 / 17:00 pm
//               Wednesday 9:30 /17:00 pm <br></br>
//               <strong>
//                 After finishing the Course, you will have the opportunity to
//                 secure A Part-Time Job (with Your clients), we will prepare you
//                 well and grow you and will help find you a job quickly.
//               </strong>{" "}
//               <br></br>
//               (Details will be provided at the Academy, as well as the program){" "}
//               <br></br>
//               <strong>LOCATION - 17 Gold Street NN11RA Northampton Town</strong>
//             </p>
//           </div>
//           <div className="info-item-off-course">
//             {/* <p style={{ color: "#977656" }}> */}
//             <p style={{ color: "white" }}>
//               {" "}
//               <strong> Master Class-WorkShop Educator: Adrian.M </strong>
//               <br></br>{" "}
//             </p>

//             <p>
//               What you will learn with us ? <br></br>
//               <strong>
//                 {" "}
//                 the top part (sections, shape, texture) <br></br>
//                 The sides (skin/fade, a new technique) <br></br>- the uniform
//                 shape of the haircut, contrast <br></br>- contour, frontal area{" "}
//                 <br></br>- professional styling <br></br>
//                 Beard (correct loss, contour, using the razor) <br></br>- the
//                 shape according to the physiognomy of the face <br></br>
//                 -beard maintenance <br></br>
//                 The photo session (correct position for a professional picture){" "}
//                 <br></br>
//                 Marketing and promotion <br></br>
//                 At the end you will receive the Diploma of participation!{" "}
//                 <br></br>
//               </strong>
//             </p>
//             {/* <p style={{ color: "#977656" }}> */}
//             <p style={{ color: "white" }}>
//               {" "}
//               <strong>
//                 {" "}
//                 *NOTE: You need to have 1 year of experience for the Master
//                 Class{" "}
//               </strong>{" "}
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Course;





import React from "react";
import "./Course.css";
import { useNavigate } from "react-router-dom";
import courseImage from "../../assets/masterclass.jpg";
import courseBoxImage1 from "../../assets/beginner.PNG";
import courseBoxImage2 from "../../assets/master.jpg";
import infoItemImage1 from "../../assets/IMG-20240214-WA0016.jpg";
import infoItemImage3 from "../../assets/IMG-20240214-WA0013.jpg";
import Footer from "../../components/Footer";
const Course = () => {
  const navigate = useNavigate();

  const handleGetEnrolled = () => {
    navigate("/booking");
  };

  return (
    <>
      <div className="course-selection-wrapper">
        <h2 className="course-selection-heading uppercase">
          {" "}
          {/* <u>CHOOSE YOUR OFFLINE COURSE </u> */}
          <u>Register Now For Our In Person Barber Courses </u>
        </h2>
      </div>

      <div className="course-selection-section">
        <div className="course-box">
          <h3>BEGINNER BARBER COURSE</h3>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={courseBoxImage1}
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                {/* <h4 style={{ color: "#977656" }}> */}
                <h4 style={{ color: "white" }}>
                  Beginner Barber Course Modules :
                </h4>
                <br />
                <h5 style={{ fontSize: "14px" }}>~ Clipper Grades </h5>
                <h5 style={{ fontSize: "14px" }}>~ One Length Haircut </h5>
                <h5 style={{ fontSize: "14px" }}>~ Scissor Cut-Underhand </h5>
                <h5 style={{ fontSize: "14px" }}>
                  ~ Clipper Cut 1 Fade-Tapper On The Nape{" "}
                </h5>
                <h5 style={{ fontSize: "14px" }}>~ Skin Fade </h5>
                <h5 style={{ fontSize: "14px" }}>~ Beard Trimm-Shape Up </h5>
                <h5 style={{ fontSize: "14px" }}>~ Buzz Cut Skin Fade </h5>
                <h5 style={{ fontSize: "14px" }}>~ Professionalism </h5>
                <h5 style={{ fontSize: "14px" }}>~ Consultation</h5>
                <h5 style={{ fontSize: "14px" }}>~ Hair Science</h5>
                <h5 style={{ fontSize: "14px" }}>~ Clipper Maintenance</h5>
              </div>
            </div>
          </div>
          <div className="course-buttons">
            <button id="get-enrolled-btn" onClick={handleGetEnrolled}>
              GET ENROLLED
            </button>
          </div>
        </div>
        <div
          style={{
            width: "2px",
            height: "100%",
            backgroundColor: "#FFFFFF",
            margin: "0 20px",
          }}
        ></div>

        <div className="course-box">
          <h3>MASTER CLASS WORKSHOP 1/2/1</h3>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={courseBoxImage2}
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                {/* <h4 style={{ color: "#977656" }}> */}
                <h4 style={{ color: "white" }}>
                  Master Class-WorkShop ( Skin/Fade -Layers-Shaving ) Modules :
                </h4>
                <br />
                <h5> ~ the top part </h5>
                <h5> ~ the sides </h5>
                <h5> ~ the uniform shape of the haircut </h5>
                <h5> ~ contrast </h5>
                <h5> ~ frontal area </h5>
                <h5> ~ styling beard </h5>
                <h5> ~ shape according to physiognomy </h5>
                <h5> ~ beard maintenance </h5>
                <h5> ~ marketing and promotion </h5>
              </div>
            </div>
          </div>
          <div className="course-buttons">
            <button onClick={handleGetEnrolled}>GET ENROLLED</button>
          </div>
        </div>
      </div>
      <section className="course-section">
        <div className="course-container">
          <div className="course-info">
            {/* <h1>Online Beginner Barber Step-By-Step Course was for £1250</h1> */}
            {/* <h1>Online Education Courses For Beginner's (Learn From Your Own Pace) <br />was for £1250</h1>
            <h1>60% OFF/- for first 100 people only. </h1>
            <h2 style={{ color: "white" }}>
              {" "}
              <u>Now only for £500 </u>
            </h2> */}
            <h1>Online Education Courses For Beginner's (Learn From Your Own Pace) was for £1250. 60% OFF/- for first 100 people only. Now only for £500</h1>
            <button className="enroll-button" onClick={handleGetEnrolled}>
              GET ENROLLED
            </button>
          </div>

          <div className="course-image">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={courseImage}
                    alt="Avatar"
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <div className="flip-card-back">
                  {/* <h4 style={{ color: "#977656" }}> */}
                  <h4 style={{ color: "white" }}>
                    {" "}
                    This course, created by our expert Adrian, includes:{" "}
                  </h4>{" "}
                  {/* <p> */}{" "}
                  <h5 style={{ fontSize: "14px" }}>~ Clipper Grades </h5>
                  <h5 style={{ fontSize: "14px" }}>~ One Length Haircut </h5>
                  <h5 style={{ fontSize: "14px" }}>~ Scissor Cut-Underhand </h5>
                  <h5 style={{ fontSize: "14px" }}>
                    ~ Clipper Cut 1 Fade-Tapper On The Nape{" "}
                  </h5>
                  <h5 style={{ fontSize: "14px" }}>~ Skin Fade </h5>
                  <h5 style={{ fontSize: "14px" }}>~ Beard Trimm-Shape Up </h5>
                  <h5 style={{ fontSize: "14px" }}>~ Buzz Cut Skin Fade </h5>
                  <h5 style={{ fontSize: "14px" }}>~ Professionalism </h5>
                  <h5 style={{ fontSize: "14px" }}>~ Consultation</h5>
                  <h5 style={{ fontSize: "14px" }}>~ Hair Science</h5>
                  <h5 style={{ fontSize: "14px" }}>~ Clipper Maintenance</h5>
                  {/* </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="online-info" id="online-info">
        <h2
          className="online-info-heading"
          style={{ textTransform: "uppercase" }}
        >
          {" "}
          {/* <u>More Info About Online Courses </u> */}
        </h2>
        <div className="info-grid-course">
          {/* <div className="info-item-course">
            <img
              src={infoItemImage1}
              alt="Description of img1"
              className="h-full w-full"
            />
          </div> */}
          <div className="info-item-course">
            {/* <p style={{ color: "#977656", marginBottom: "5%" }}> */}
            <p style={{ color: "white", marginBottom: "5%" }}>
              <strong className="text-xl">
                {" "}
                Sign up now for our Barber Courses.{" "}
              </strong>
            </p>
            <p>
              Our academy offers you the opportunity to enter a new world. Come
              let us teach you to create masterpieces with your own hands. The
              course is intended for anyone who wants to learn the art of
              haircuts. The course is intensive, with our models, where you will
              learn everything in the smallest details. In this course we will
              teach you from scratch how to cut the most modern haircuts! We
              will teach you every detail through the theoretical and practical
              form.
            </p>
            {/* <p className="mt-3">
              The online course features over 50 videos and includes a special
              book authored by Adrian himself, valued at £100.{" "}
            </p> */}
          </div>
          <div className="info-item-course">
            <img
              src={infoItemImage3}
              alt="Description of Img3"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="offline-info" id="offline-info">
        <h3
          className="offline-info-heading "
          style={{ textTransform: "uppercase" }}
        >
          {" "}
          <u>More Info About In-Person Courses </u>
        </h3>
        <div className="info-grid-course">
          <div className="info-item-off-course">
            {/* <p style={{ color: "#977656" }}> */}
            <p style={{ color: "white" }}>
              💈Beginner Barber Course 💈<br></br>{" "}
            </p>

            <p>
              {" "}
              What will you learn with us? <br></br>
              <strong>*Scissor Cut Underhand</strong> <br></br>
              <strong>*One Length.</strong> <br></br>
              <strong>*Marketing</strong> <br></br>
              <strong>*Consultation</strong> <br></br>
              <strong>* Outlines</strong> <br></br>
              <strong>*Profile Line</strong> <br></br>
              <strong>*Connecting - Scissor or Clipper work</strong> <br></br>
              <strong>*The higher grade</strong> <br></br>
              <strong>*Scissor over comb</strong> <br></br>
              <strong>*Remove the corner from the fringe </strong> <br></br>
              <strong>*Texturizing the top </strong> <br></br>
            </p>
            {/* <p style={{ color: "#977656" }}> */}
            <p style={{ color: "white" }}>
              {" "}
              ✂ <strong>
                Equipment from the Academy during the Course
              </strong> ✂ <br></br>
            </p>
          </div>
          <div className="info-item-off-course">
            {/* <p style={{ color: "#977656" }}> */}
            <p style={{ color: "white" }}>
              At the end of the Course, you can benefit from the{" "}
              <strong>Diploma (Internationally Accredited)</strong>.<br></br>
              The group consists of 4 people, which allows us to pay attention
              to each student. For more details, we offer the course schedule{" "}
              <br></br>
              <strong>Course duration 8 weeks</strong>
              The course will start on:
              <strong>Morning schedule:</strong> Monday 9:30 / 17:00 pm
              Wednesday 9:30 /17:00 pm <br></br>
              <strong>
                After finishing the Course, you will have the opportunity to
                secure A Part-Time Job (with Your clients), we will prepare you
                well and grow you and will help find you a job quickly.
              </strong>{" "}
              <br></br>
              (Details will be provided at the Academy, as well as the program){" "}
              <br></br>
              <strong>LOCATION - 17 Gold Street NN11RA Northampton Town</strong>
            </p>
          </div>
          <div className="info-item-off-course">
            {/* <p style={{ color: "#977656" }}> */}
            <p style={{ color: "white" }}>
              {" "}
              <strong> Master Class-WorkShop Educator: Adrian.M </strong>
              <br></br>{" "}
            </p>

            <p>
              What you will learn with us ? <br></br>
              <strong>
                {" "}
                the top part (sections, shape, texture) <br></br>
                The sides (skin/fade, a new technique) <br></br>- the uniform
                shape of the haircut, contrast <br></br>- contour, frontal area{" "}
                <br></br>- professional styling <br></br>
                Beard (correct loss, contour, using the razor) <br></br>- the
                shape according to the physiognomy of the face <br></br>
                -beard maintenance <br></br>
                The photo session (correct position for a professional picture){" "}
                <br></br>
                Marketing and promotion <br></br>
                At the end you will receive the Diploma of participation!{" "}
                <br></br>
              </strong>
            </p>
            {/* <p style={{ color: "#977656" }}> */}
            <p style={{ color: "white" }}>
              {" "}
              <strong>
                {" "}
                *NOTE: You need to have 1 year of experience for the Master
                Class{" "}
              </strong>{" "}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Course;
