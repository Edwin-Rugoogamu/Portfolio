import React from "react";
import style from "./Services.module.css";
import ReactPlayer from "react-player";
function Services(props) {
  const vidUrl = "https://youtube.com/shorts/O0FnoOsE3hQ";
  const myVid =
    "videos/To Do List using HTML CSS  JavaScript _ To Do List JavaScript_HIGH.mp4";
  const learningPlatform = "videos/Try.mp4";
  return (
    <div id="section3">
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <h1>My Services</h1>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label}>
              <img src="/images/2801091.png" alt="" className={style.image} />
              <h6>Web and App Development</h6>
              <p>
                Deliver seamless, scalable web solutions-as-a-service, ensuring
                user-centric design, robust functionality, and reliable
                performance. Offer ongoing support, updates, and security,
                ensuring a hassle-free experience for clients.
              </p>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label}>
              <img src="/images/3476582.png" alt="" className={style.image} />
              <h6>UI/UX</h6>
              <p>
                Craft engaging,prioritizing user needs for compelling digital
                experiences. Employ industry best practices, iterative design,
                and user research to deliver aesthetically pleasing interfaces
                that optimize usability and drive engagement.
              </p>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label}>
              <img
                src="/images/5376895-200.png"
                alt=""
                className={style.image}
              />
              <h6>DevOps</h6>
              <p>
                Deliver DevOps services, optimizing workflows for seamless
                development, deployment, and operations. Implement automation,
                scalability, and continuous integration to drive efficiency,
                reliability, and accelerated software delivery cycles.
              </p>
            </label>
          </div>
        </div>
      </div>
      <div className="container-fluid" id={style.container}>
        <div className="row" id="section4">
          <h1>My Work</h1>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label1}>
              <label className={style.label_1}>
                <img src="" alt="" />
                <h6>Ecommerce Websites</h6>
                <ReactPlayer
                  url={vidUrl}
                  playing={false}
                  volume={0.5}
                  width="100%"
                  height={250}
                />
                <p>
                  Agricultural and Commodities in General trading online ,the
                  buying and selling of products. Developed a number of them
                  with great user experience
                </p>
              </label>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label2}>
              <label className={style.label_1}>
                <img src="" alt="" />
                <h6>Social Media</h6>
                <video
                  src={myVid}
                  width="100%"
                  height={250}
                  volume={0.5}
                  controls
                />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore dicta possimus facere voluptatem rem, libero earum.
                  Aliquid quas corporis perferendis.
                </p>
              </label>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label3}>
              <label className={style.label_1}>
                <img src="" alt="" />
                <h6>Learning Platforms</h6>
                <video
                  src={learningPlatform}
                  width="100%"
                  height={250}
                  volume={0.5}
                  controls
                />
                <p>
                  Am really proud to showcase the Refactory Learning Platform
                  that i have been working on with my team . To promote online
                  eduction. 
                </p>
              </label>
            </label>
          </div>
        </div>
      </div>
      <div className="container-fluid" id={style.container}>
        <div className="row" id="section6">
          <h1>My Certifications</h1>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label1}>
              <label className={style.label_1}>
                <img
                  src="images/Web capture_20-11-2023_153543_.jpeg"
                  alt=""
                  width="100%"
                />
              </label>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label2}>
              <label className={style.label_1}>
                <img
                  src="/images/Web capture_20-11-2023_154041_.jpeg"
                  alt=""
                  width="100%"
                />
              </label>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label3}>
              <label className={style.label_1}>
                <img
                  src="images/Web capture_20-11-2023_154137_.jpeg"
                  alt=""
                  width="100%"
                />
              </label>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label2}>
              <label className={style.label_1}>
                <img
                  src="images/Web capture_20-11-2023_155019_.jpeg"
                  alt=""
                  width="100%"
                />
              </label>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label3}>
              <label className={style.label_1}>
                <img
                  src="images/Web capture_20-11-2023_154840_.jpeg"
                  alt=""
                  width="100%"
                />
              </label>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label3}>
              <label className={style.label_1}>
                <img
                  src="images/Web capture_2-12-2023_143211_.jpeg"
                  alt=""
                  width="100%"
                />
              </label>
            </label>
          </div>

          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label1}>
              <label className={style.label_1}>
                <img
                  src="/images/Web capture_20-11-2023_154422_2.jpeg"
                  alt=""
                  width="100%"
                />
              </label>
            </label>
          </div>
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4" id={style.col}>
            <label className={style.label3}>
              <label className={style.label_1}>
                <img
                  src="images/Web capture_13-12-2023_12466_.jpeg"
                  alt=""
                  width="100%"
                />
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
