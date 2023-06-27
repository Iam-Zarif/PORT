
import ProgressBar from "@ramonak/react-progress-bar";
import Container from "../../Container/Container";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFirebase,
} from "react-icons/si";
import { FaFileVideo, FaNode } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoMongodb } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import CoverContainer from "../../Container/CoverContainer";

const Skills = () => {
  return (
    <div>
      <Container>
        <div className="mt-36 mb-28 text-white">
          <p className="text-white text-center text-3xl font-bold mb-6">
            Professional Skills
          </p>
          <hr />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mt-14">
            <div className="shadow-lg shadow-black rounded-xl pl-10">
              <p className="text-3xl text-slate-500 mt-20 font-bold">
                Design Skills
              </p>
              <hr className="mt-4 lg:w-[670px]" />
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <SiAdobephotoshop className="inline text-3xl" /> Adobe
                  Photoshop
                </p>
                <ProgressBar
                  completed={40}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-4 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <SiAdobeillustrator className="inline text-3xl" /> Adobe
                  Illsutrator
                </p>
                <ProgressBar
                  completed={60}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <FaFileVideo className="inline text-3xl" /> Video Editing
                </p>
                <ProgressBar
                  completed={80}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="shadow-lg shadow-black rounded-xl pl-10 pb-10">
              <p className="text-3xl text-slate-500 mt-20 font-bold">
                Development Skills
              </p>
              <hr className="mt-4 lg:w-[670px]" />
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <AiFillHtml5 className="inline text-3xl" /> HTML
                </p>
                <ProgressBar
                  completed={99}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <BiLogoCss3 className="inline text-3xl" /> CSS
                </p>
                <ProgressBar
                  completed={90}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <RiJavascriptFill className="inline text-3xl" /> Javascript
                </p>
                <ProgressBar
                  completed={82}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">API</p>
                <ProgressBar
                  completed={85}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <GrReactjs className="inline text-3xl" /> React
                </p>
                <ProgressBar
                  completed={90}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <SiFirebase className="inline text-3xl" /> Firebase
                </p>
                <ProgressBar
                  completed={75}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <BiLogoMongodb className="inline text-3xl" /> MongoDb
                </p>
                <ProgressBar
                  completed={65}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
              <div
                className="w-3/4 relative mt-6"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-xl texts">
                  <FaNode className="inline text-4xl" /> Node JS
                </p>
                <ProgressBar
                  completed={70}
                  bgColor="#1D4ED8"
                  baseBgColor="rgba(0, 0, 0, 0.2)"
                  height="12px"
                  borderRadius="8px"
                  transitionDuration="500ms"
                  className="mt-2 shadow-lg rounded-full h-[20px] "
                />
              </div>
            </div>
          </div>

          {/*  */}
          {/*  */}
        </div>
      </Container>
      <CoverContainer>
        <div className="text-white">
          <p className="text-3xl font-bold text-center">Language Skills</p>
          <hr className="mt-4" />
          <div>
            <div
              className="w-3/4 relative mt-6 mx-auto"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p className="text-xl texts">
                Bangla (native)
              </p>
              <ProgressBar
                completed={99}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="12px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div
              className="w-3/4 relative mt-6 mx-auto"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p className="text-xl texts">
                 Speaking English
              </p>
              <ProgressBar
                completed={70}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="12px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div
              className="w-3/4 relative mt-6 mx-auto"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p className="text-xl texts">
                Reading English
              </p>
              <ProgressBar
                completed={82}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="12px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div
              className="w-3/4 relative mt-6 mx-auto"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p className="text-xl texts">
                Listening English
              </p>
              <ProgressBar
                completed={88}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="12px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div
              className="w-3/4 relative mt-6 mx-auto"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p className="text-xl texts">
               Writing English
              </p>
              <ProgressBar
                completed={92}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="12px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
          </div>
        </div>
      </CoverContainer>
    </div>
  );
};

export default Skills;


{/* <div className="text-white">
  <p className="text-3xl font-bold text-center">Language Skills</p>
  <hr className="mt-4" />
</div>; */}