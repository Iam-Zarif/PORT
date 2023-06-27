
import ProgressBar from "@ramonak/react-progress-bar";
import Container from "../../Container/Container";


const Skills = () => {
  return (
    <Container>
      <div className="mt-36 text-white">
        <p className="text-white text-center text-2xl font-bold mb-6">
          Professional Skills
        </p>
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p className="text-3xl text-slate-500 mt-20 font-bold">
              Design Skills
            </p>
            <hr className="mt-4 lg:w-[670px]" />
            <div
              className="w-3/4 relative mt-10"
              data-aos="fade-down"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <p className="text-xl texts">Adobe Photoshop</p>
              <ProgressBar
                completed={40}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div
              className="w-3/4 relative mt-10"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <p className="text-xl texts">Adobe Illsutrator</p>
              <ProgressBar
                completed={60}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div
              className="w-3/4 relative mt-10"
              data-aos="fade-up"
              
              data-aos-duration="1000"
            >
              <p className="text-xl texts">Video Editing</p>
              <ProgressBar
                completed={80}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <p className="text-3xl text-slate-500 mt-20 font-bold">
              Development Skills
            </p>
            <hr className="mt-4 lg:w-[670px]" />
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">HTML</p>
              <ProgressBar
                completed={99}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">CSS</p>
              <ProgressBar
                completed={90}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">Javascript</p>
              <ProgressBar
                completed={82}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">API</p>
              <ProgressBar
                completed={85}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">React</p>
              <ProgressBar
                completed={90}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">Firebase</p>
              <ProgressBar
                completed={75}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">MongoDb</p>
              <ProgressBar
                completed={65}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">Node JS</p>
              <ProgressBar
                completed={70}
                bgColor="#1D4ED8"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
          </div>
        </div>
        <div className="mt-32">
          <h1 className="text-center text-2xl font-bold">Education</h1>
          <hr className="mt-5" />
          <div className="mt-20 grid grid-cols-1 lg:gap-32 lg:grid-cols-3">
            <div className=" shadow-md shadow-slate-300 rounded-xl text-center py-10 px-5">
              <p className="text-3xl font-bold">Secondary School Certificate</p>
              <p className="text-xl text-slate-300 mt-2">
                Gaowair High School,Dhaka
              </p>
              <p className="mt-2 text-lg font-bold">Passing Year: (2017)</p>
              <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-slate-300">
                5 / 5
              </span>
            </div>
            <div className=" shadow-md shadow-slate-300 rounded-xl text-center py-10 px-5">
              <p className="text-3xl font-bold">Higher School Certificate</p>
              <p className="text-xl text-slate-300 mt-2">
                KC Model College,Dhaka
              </p>
              <p className="mt-2 text-lg font-bold">Passing Year: (2019)</p>
              <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-slate-300">
                4.91 / 5
              </span>
            </div>
            <div className=" shadow-md shadow-slate-300 rounded-xl text-center py-10 px-5">
              <p className="text-3xl font-bold">BSC at Hons(CSE)</p>
              <p className="text-xl text-slate-300 mt-2">
                Tejgaon College,Dhaka
              </p>
              <p className="mt-2 text-lg font-bold">Session(2019-2020)</p>
              <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-slate-300">
                Currently studying
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
      </div>
    </Container>
  );
};

export default Skills;
