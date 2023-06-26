/* eslint-disable no-unused-vars */
import { CgWebsite } from "react-icons/cg";
import { GiPhotoCamera } from "react-icons/gi";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { FaFileVideo } from "react-icons/fa";
import CoverContainer from "../../Container/CoverContainer";
import Container from "../../Container/Container";


const Features = () => {
  return (
    <>
      <div
        className="mt-24 text-white"
        data-aos="fade-up"
        data-aos-offset="200"
        
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <CoverContainer>
          <h1 className="text-2xl text-blue-500 text-center">Features</h1>
          <h1 className="text-5xl mt-10 font-bold text-center">What I do</h1>
        </CoverContainer>
        <Container>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="  shadow-lg shadow-slate-400  rounded-xl  p-10">
              <CgWebsite className="text-6xl " />
              <p className="text-4xl mt-5 text-blue-500">Web development</p>
              <p className="text-lg mt-10">
                The MERN stack is a popular technology stack used for building
                full-stack web applications. It is an acronym that stands for
                MongoDB, Express.js, ...
              </p>
            </div>
            <div className="  shadow-lg shadow-slate-400  rounded-xl p-10">
              <SiAdobephotoshop className="text-6xl " />
              <p className="text-4xl mt-5 text-blue-500">Photoshop</p>
              <p className="text-lg mt-10">
                Photoshop is a powerful and widely used software application
                developed by Adobe. It is primarily used for image editing,
                graphic design, and digital art creatio
              </p>
            </div>
            <div className="  shadow-lg shadow-slate-400  rounded-xl p-10">
              <SiAdobeillustrator className="text-6xl " />
              <p className="text-4xl mt-5 text-blue-500">Adobe illustrator</p>
              <p className="text-lg mt-10">
                Adobe Illustrator is a vector-based graphic design software
                developed by Adobe. It is widely used by designers,
                illustrators, and artists for creating scalable and high-quality
                artwork.
              </p>
            </div>
            <div className="  shadow-lg shadow-slate-400  rounded-xl p-10">
              <FaFileVideo className="text-6xl " />
              <p className="text-4xl mt-5 text-blue-500">
                Video Editing(<span className="text-white">Filmora</span>)
              </p>
              <p className="text-lg mt-10">
                The MERN stack is a popular technology stack used for building
                full-stack web applications. It is an acronym that stands for
                MongoDB, Express.js,
              </p>
            </div>
            <div className="  shadow-lg shadow-slate-400  rounded-xl p-10">
              <GiPhotoCamera className="text-6xl " />
              <p className="text-4xl mt-5 text-blue-500">Photography</p>
              <p className="text-lg mt-10">
                Photography is the art, science, and practice of capturing and
                creating images using a camera or other light-sensitive devices.
                It is a popular form of visual expression and communication.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Features;
