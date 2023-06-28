/* eslint-disable react/jsx-no-target-blank */
import Container from "../../Container/Container";
import CoverContainer from "../../Container/CoverContainer";
import marvel from "../../assets/Marvel-toys.png";
import language from "../../assets/Language-mare.png";
import foody from "../../assets/zarif-foody.png";

const Projects = () => {
  return (
    <div className="mt-36 text-white">
      <Container>
        <div>
          <p className="text-center text-3xl font-bold">My projects</p>
          <hr className="mt-3" />
        </div>
      </Container>
      <CoverContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 px-12 lg:px-0">
          <div className="shadow-lg shadow-black pb-5">
            <img className="border rounded-xl" src={marvel} alt="" />
            <p className="text-center mt-5 text-xl font-bold text-blue-500">
              Technologies used
            </p>
            <hr className="mt-2 w-3/4 mx-auto" />
            <div className="text-center flex flex-col gap-3 font-bold mt-5">
              <p>React</p>
              <p>Tailwind CSS</p>
              <p>Daisy UI</p>

              <p>Node JS</p>
              <p>Firebase</p>
              <p>MongoDb</p>
              <p>JWT</p>
              <p>Animations</p>
              <p>AOS</p>
              <hr />
              <div className="flex flex-col gap-y-2 mt-3">
                <a
                  className=""
                  target="_blank"
                  href="https://toy-market-71ba4.web.app/"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    LIVE SERVER
                  </span>
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://github.com/Iam-Zarif/the-marvels"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    CLIENT REPOSITORY
                  </span>
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://github.com/Iam-Zarif/the-marvels-server"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    SERVER REPOSITORY
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-black">
            <img src={language} alt="" className="border rounded-xl" />
            <p className="text-center mt-5 text-xl font-bold text-blue-500">
              Technologies used
            </p>
            <hr className="mt-2 w-3/4 mx-auto" />
            <div className="text-center flex flex-col gap-3 font-bold mt-5">
              <p>React</p>
              <p>Tailwind CSS</p>
              <p>Daisy UI</p>
              <p>React Hook Form</p>
              <p>Node JS</p>
              <p>Firebase</p>
              <p>MongoDb</p>
              <p>Animations</p>
              <p>AOS</p>
              <hr />
              <div className="flex flex-col gap-y-2 mt-3">
                <a
                  className=""
                  target="_blank"
                  href="https://mare-auth.web.app/"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    LIVE SERVER
                  </span>
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://github.com/Iam-Zarif/langage-mare"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    CLIENT REPOSITORY
                  </span>
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://github.com/Iam-Zarif/language-mare-server"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    SERVER REPOSITORY
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-black">
            <img src={foody} alt="" className="border rounded-xl" />
            <p className="text-center mt-5 text-xl font-bold text-blue-500">
              Technologies used
            </p>
            <hr className="mt-2 w-3/4 mx-auto" />
            <div className="text-center flex flex-col gap-3 font-bold mt-5">
              <p>React</p>
              <p>Tailwind CSS</p>
              <p>Daisy UI</p>
              <p>React Icons</p>
              <p>Node JS</p>
              <p>Firebase</p>
              <p>MongoDb</p>
              <p>Animations</p>
              <p>AOS</p>
              <hr />
              <div className="flex flex-col gap-y-2 mt-3">
                <a
                  className=""
                  target="_blank"
                  href="https://assignment-10-9bf21.web.app/"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    LIVE SERVER
                  </span>
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://github.com/Iam-Zarif/zarif-foody"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    CLIENT REPOSITORY
                  </span>
                </a>
                <a
                  className="mt-2"
                  target="_blank"
                  href="https://github.com/Iam-Zarif/zarif-foody-server"
                >
                  <span className="shadow-md shadow-black p-2 hover:shadow-slate-400 rounded-xl">
                    SERVER REPOSITORY
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </CoverContainer>
    </div>
  );
};

export default Projects;
