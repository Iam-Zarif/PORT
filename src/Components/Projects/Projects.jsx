/* eslint-disable react/jsx-no-target-blank */
import Container from "../../Container/Container";
import CoverContainer from "../../Container/CoverContainer";
import marvel from "../../assets/Marvel-toys.png";
import language from "../../assets/Language-mare.png";
import foody from "../../assets/zarif-foody.png";
import { FaReact, FaNode } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { GiToken } from "react-icons/gi";
import { MdAnimation } from "react-icons/md";
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
            {/*  */}

            <hr className="mt-2 w-3/4 mx-auto " />
            <div className="text-center flex flex-col gap-3 font-bold mt-5">
              {/* Open the modal using ID.showModal() method */}
              <button
                className="btn font-bold text-blue-500 hover:text-blue-700"
                onClick={() => window.my_modal_5.showModal()}
              >
                Technologies used
                <BsFillArrowRightCircleFill className="inline text-xl" />
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <form
                  method="dialog"
                  className="modal-box text-white bg-slate-700 shadow-lg pt-10 shadow-black border"
                >
                  <div className="flex flex-col gap-2">
                    <p className="shadow-md shadow-black rounded-xl">
                      <FaReact className="inline mr-2" />
                      React
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <SiTailwindcss className="inline mr-2" />
                      Tailwind CSS
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      Daisy UI
                    </p>

                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <FaNode className="inline text-xl" /> Node JS
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <SiFirebase className="inline text-xl" /> Firebase
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <BiLogoMongodb className="inline text-xl" /> MongoDb
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <GiToken className="inline text-xl" /> JWT
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <MdAnimation className="inline text-xl" /> Animations
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      AOS
                    </p>
                  </div>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>

              {/*  */}
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

            <hr className="mt-2 w-3/4 mx-auto" />
            <div className="text-center flex flex-col gap-3 font-bold mt-5">
              <button
                className="btn font-bold text-blue-500 hover:text-blue-700"
                onClick={() => window.my_modal_1.showModal()}
              >
                Technologies used
                <BsFillArrowRightCircleFill className="inline text-xl" />
              </button>
              <dialog
                id="my_modal_1"
                className="modal modal-bottom sm:modal-middle"
              >
                <form
                  method="dialog"
                  className="modal-box text-white bg-slate-700 shadow-lg pt-10 shadow-black border"
                >
                  <div className="flex flex-col gap-2">
                    <p className="shadow-md shadow-black rounded-xl">
                      <FaReact className="inline mr-2" />
                      React
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <SiTailwindcss className="inline mr-2" />
                      Tailwind CSS
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      Daisy UI
                    </p>

                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <FaNode className="inline text-xl" /> Node JS
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <SiFirebase className="inline text-xl" /> Firebase
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <BiLogoMongodb className="inline text-xl" /> MongoDb
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <GiToken className="inline text-xl" /> JWT
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <MdAnimation className="inline text-xl" /> Animations
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      AOS
                    </p>
                  </div>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
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

            <hr className="mt-2 w-3/4 mx-auto" />
            <div className="text-center flex flex-col gap-3 font-bold mt-5">
              <button
                className="btn font-bold text-blue-500 hover:text-blue-700"
                onClick={() => window.my_modal_2.showModal()}
              >
                Technologies used
                <BsFillArrowRightCircleFill className="inline text-xl" />
              </button>
              <dialog
                id="my_modal_2"
                className="modal modal-bottom sm:modal-middle"
              >
                <form
                  method="dialog"
                  className="modal-box text-white bg-slate-700 shadow-lg pt-10 shadow-black border"
                >
                  <div className="flex flex-col gap-2">
                    <p className="shadow-md shadow-black rounded-xl">
                      <FaReact className="inline mr-2" />
                      React
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <SiTailwindcss className="inline mr-2" />
                      Tailwind CSS
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      Daisy UI
                    </p>

                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <FaNode className="inline text-xl" /> Node JS
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <SiFirebase className="inline text-xl" /> Firebase
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <BiLogoMongodb className="inline text-xl" /> MongoDb
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <GiToken className="inline text-xl" /> JWT
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      <MdAnimation className="inline text-xl" /> Animations
                    </p>
                    <p className="shadow-md shadow-black rounded-xl mt-2">
                      AOS
                    </p>
                  </div>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
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
