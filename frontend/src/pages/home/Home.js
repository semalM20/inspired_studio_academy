import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import SlideImage1 from "../../assets/img1.jpg";
import SlideImage2 from "../../assets/img2.jpg";
import SlideImage3 from "../../assets/img3.jpg";
import SlideImage4 from "../../assets/img4.jpg";

import iBoxImage1 from "../../assets/img1tech.jpg";
import iBoxImage2 from "../../assets/img2tech.jpg";
import iBoxImage3 from "../../assets/img3tech.jpg";
import iBoxImage4 from "../../assets/img4tech.jpg";
import iBoxImage5 from "../../assets/img5tech.jpg";
import iBoxImage6 from "../../assets/iBoxImage6.jpg";

import mBoxImage2 from "../../assets/homePageAddInfoImg.jpg";

import introImage1 from "../../assets/IMG-20240214-WA0014.jpg";
import introImage2 from "../../assets/intopic.jpg";

import sliderImage1 from "../../assets/IMG-20240214-WA0008.jpg";
import sliderImage2 from "../../assets/sliderbottom.jpg";
import sliderImage3 from "../../assets/IMG-20240214-WA0017.jpg";
import sliderImage4 from "../../assets/IMG-20240214-WA0015.jpg";
import sliderImage5 from "../../assets/IMG-20240214-WA0013.jpg";
import sliderImage6 from "../../assets/slider1.jpg";
import sliderImage7 from "../../assets/slider2.jpg";
import sliderImage8 from "../../assets/slider3.jpg";
import sliderImage9 from "../../assets/IMG-20240214-WA0015.jpg";
import sliderImage10 from "../../assets/IMG-20240214-WA0013.jpg";
import trophyImage from "../../assets/SliderBottom1.jpg";
import Footer from "../../components/Footer";

import certificationVideo from "../../assets/certification.mp4";
import feedbackVideo from "../../assets/feedbackstudent.mp4";
import mainPgIntroVideo from "../../assets/mainpgintro .mp4";
import offlineClassVideo from "../../assets/offlineclass.mp4";

const Home = () => {
  const images = [SlideImage1, SlideImage2, SlideImage3, SlideImage4];
  const sliderImages = [
    sliderImage1,
    sliderImage2,
    sliderImage3,
    sliderImage4,
    sliderImage5,
    sliderImage6,
    sliderImage7,
    sliderImage8,
    sliderImage9,
    sliderImage10,
    trophyImage,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const navigate = useNavigate();

  const handleGetCourse = () => {
    navigate("/course");
  };

  return (
    <>
      <section className="background-section">
        <div className="slider-container hidden">
          <div className="slider-container">
            <div className="slider">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? "active" : ""}`}
                  style={{ display: index === currentSlide ? "block" : "none" }}
                >
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-navigation">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dots ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>

          <div className="button-container">
            <button className="rectangle-button" onClick={handleGetCourse}>
              Action Button
            </button>
          </div>
          <div className="rectangle-container">
            <h2>WHY INSPIRED STUDIO ACADEMY ?</h2>
            <p>
              Our Course it’s held from Our Instructor Adrian which is very
              professional and have experience he build his own strategy to make
              you a professional barber in a short period time! All the Education and 
              practice to help you grow and to become a Barber.
              <br/>Part-Time Job Available after Course.
            </p>
            <div className="video-boxes">
              <div className="video-box">
                <video
                  // src="videos/mainpgintro .mp4"
                  src={mainPgIntroVideo}
                  // src={`https://res.cloudinary.com/${process.env.CLOUDINARY_PASS}/video/upload/v1718170469/barber-videos/mvvo6j8rk2j89wbxmit0.mp4`}
                  controls
                  // poster={SlideImage1}
                  style={{
                    height: "300px",
                    width: "300px",
                    backgroundColor: "black",
                  }}
                ></video>
              </div>
              <div className="video-box">
                <video
                  // src="videos/certification.mp4"
                  src={certificationVideo}
                  // src={`https://res.cloudinary.com/${process.env.CLOUDINARY_PASS}/video/upload/v1718172192/barber-videos/jz4mnfppizfgtrwsgcjm.mp4`}
                  controls
                  style={{
                    height: "300px",
                    width: "300px",
                    backgroundColor: "black",
                  }}
                ></video>
              </div>
              <div className="video-box">
                <div className="black-square">
                  <video
                    // src="videos/feedbackstudent.mp4"
                    src={feedbackVideo}
                    // src={`https://res.cloudinary.com/${process.env.CLOUDINARY_PASS}/video/upload/v1718172432/barber-videos/uzrztxhtwlub5c9ptqje.mp4`}
                    controls
                    style={{
                      height: "300px",
                      width: "300px",
                      backgroundColor: "black",
                    }}
                  ></video>
                </div>
              </div>
              <div className="video-box">
                <video
                  // src="videos/offlineclass.mp4"
                  src={offlineClassVideo}
                  // src={`https://res.cloudinary.com/${process.env.CLOUDINARY_PASS}/video/upload/v1718172516/barber-videos/yvjouxfmgjsfoouatijo.mp4`}
                  controls
                  style={{
                    height: "300px",
                    width: "300px",
                    backgroundColor: "black",
                  }}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <h2>About Course</h2>

          <p>
            Our course is designed to provide you with comprehensive training in
            barbering skills. Led by our experienced instructor Adrian, you'll
            learn the latest techniques and strategies to become a professional
            barber.
          </p>
          <div className="image-boxes">
            <div className="image-box">
              <img src={iBoxImage1} className="center-image" alt="Img1" />
              <p>Technique 1</p>
            </div>
            <div className="image-box">
              <img src={iBoxImage2} className="center-image" alt="Img2" />
              <p>Technique 2</p>
            </div>
            <div className="image-box">
              <img src={iBoxImage3} className="center-image" alt="Img3" />
              <p>Technique 3</p>
            </div>
            <div className="image-box">
              <img src={iBoxImage4} className="center-image" alt="Img4" />
              <p>Technique 4</p>
            </div>
            <div className="image-box">
              <img src={iBoxImage5} className="center-image" alt="Img5" />
              <p>Technique 5</p>
            </div>
            <div className="image-box">
              <img src={iBoxImage6} className="center-image" alt="Img6" />
              <p>Technique 6</p>
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: "20px" }}>
          Here's some additional information about our course:
        </h2>
        <div className="medium-boxes">
          <div className="medium-box" style={{ fontSize: "18px" }}>
            <h4>
              About the offline classes, We offer small groups with only 4
              students at a time, allowing us to give each student more
              attention and ensure that everyone fully understands the material.
              In the past year, we have successfully graduated over 25 students,
              who are now working as barbers in various shops. Our strategy and
              education help them achieve their goals and dreams.
            </h4>
          </div>
          <div className="medium-box">
            <img src={mBoxImage2} alt="Topic 1 Img" />
          </div>
          <div className="medium-box" style={{ fontSize: "18px" }}>
            <h4>
              Our ideal candidate should have excellent English communication
              and writing skills, and must be over 18 years old. No previous
              experience is required for our beginner courses, making this a
              perfect opportunity for those eager to start a new career without
              prior knowledge in the field. We also provide all the necessary
              equipment for use during the course.
            </h4>
          </div>
        </div>
      </section>
      <div className="intro-section">
        <div className="intro-image">
          <img src={introImage1} alt="Tutor Img" />
        </div>
        <div className="intro-content">
          <h2>About Our Tutor</h2>
          <p>
            Adrian Mecheres brings over four years of expertise in the field of
            barbering and education. With a passion for both grooming and
            teaching, Adrian has honed his skills to provide top-notch services
            while also sharing his knowledge with aspiring barbers. His
            dedication to the craft and commitment to education have earned him
            recognition among peers and clients alike. Whether in the barber's
            chair or the classroom, Adrian embodies professionalism and
            excellence
          </p>
          <p>
            Struggling with mastering techniques and aspiring to become a
            proficient barber can enhance one's skills and understanding,
            leading to excellence and continuous growth.
          </p>
        </div>
        <div className="intro-image">
          <img src={introImage2} alt="Tutor Img" />
        </div>
      </div>
      <div className="slider-section">
        <div className="custom-slider">
          <div className="slides">
            {sliderImages.map((image, index) => {
              return <img key={index} src={image} alt={`Slide ${index + 1}`} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
