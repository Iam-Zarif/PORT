
import ProgressBar from "@ramonak/react-progress-bar";
import Container from "../../Container/Container";


const Skills = () => {
  return (
    <Container>
      <div className="mt-36 text-white">
        <p className="text-center text-2xl font-bold mb-6">
          Professional Skills
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p className="text-3xl text-slate-300 mt-20 font-bold">
              Design Skills
            </p>
            <hr className="mt-4 lg:w-[670px]" />
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">Adobe Photoshop</p>
              <ProgressBar
                completed={40}
                bgColor="#3B82F6"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">Adobe Illsutrator</p>
              <ProgressBar
                completed={60}
                bgColor="#3B82F6"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
                borderRadius="8px"
                transitionDuration="500ms"
                className="mt-2 shadow-lg rounded-full h-[20px] "
              />
            </div>
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">Video Editing</p>
              <ProgressBar
                completed={80}
                bgColor="#3B82F6"
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
            <p className="text-3xl text-slate-300 mt-20 font-bold">
              Development Skills
            </p>
            <hr className="mt-4 lg:w-[670px]" />
            <div className="w-3/4 relative mt-10">
              <p className="text-xl texts">HTML</p>
              <ProgressBar
                completed={99}
                bgColor="#3B82F6"
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
                bgColor="#3B82F6"
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
                bgColor="#3B82F6"
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
                bgColor="#3B82F6"
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
                bgColor="#3B82F6"
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
                bgColor="#3B82F6"
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
                bgColor="#3B82F6"
                baseBgColor="rgba(0, 0, 0, 0.2)"
                height="18px"
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
  );
};

export default Skills;
