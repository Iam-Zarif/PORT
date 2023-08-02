/* eslint-disable react/jsx-no-target-blank */
import { FaPhone } from "react-icons/fa";
import { AiOutlineGithub, AiTwotoneMail } from "react-icons/ai";
import Container from "../../Container/Container";
import photo from "../../assets/Contact-1.gif";
import { CiFacebook } from "react-icons/ci";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const Contact = () => {
 
  return (
    <Container>
      <div className="mt-40 text-white">
        <p className="text-center text-2xl font-bold">Contact With Me</p>

        <div className="flex flex-col lg:flex-row justify-center gap-20 mt-20">
          <div className="shadow-lg shadow-black rounded-xl lg:w-96 px-10 lg:px-0">
            <div className="hidden lg:block container">
              <div className="bubbles">
                <span className="shadow-lg shadow-black" style={{ "--i": 41 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 23 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 16 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 29 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 41 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 33 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 27 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 30 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 11 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 21 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 22 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 9 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 14 }}></span>
                <span className="shadow-lg shadow-black" style={{ "--i": 32 }}></span>
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <figure>
                <img src={photo} alt="contact photo" />
              </figure>
              <div className="card-body">
                <p className="text-center text-4xl font-bold text-blue-500">
                  Mostofa Fatin
                </p>
                <p className="text-center text-xl font-bold">
                  MERN stack Developer
                </p>
                <hr className="mt-2" />
                <p className="text-lg mt-4">
                  I am available for developing work. Connect with me via and
                  call in to my account.
                </p>
                <p className="mt-6 text-lg font-bold">
                  <span className="text-blue-600 font-bold">
                    <FaPhone className="inline text-xl" />
                  </span>{" "}
                  : +8801933329902
                </p>
                <p className=" text-lg font-bold">
                  <span className="text-blue-600 font-bold">
                    <AiTwotoneMail className="inline text-xl" />
                  </span>{" "}
                  : zarifraja19@gmail.com
                </p>
                <div className="mt-8">
                  <p className="text-center  lg:text-xl font-bold">
                    Find Me in
                  </p>
                  <hr className="mt-4" />
                  <div className="flex justify-around  items-center gap-14 mt-8 ">
                    <a
                      href="https://www.linkedin.com/in/mostofa-fatin-zarif-863793257/"
                      target="_blank"
                    >
                      <TiSocialLinkedinCircular className="rounded-full text-5xl lg:text-6xl hover:text-blue-500 shadow-lg shadow-slate-300" />
                    </a>

                    <a
                      href="https://www.facebook.com/mostofafatin.zarif.3"
                      target="_blank"
                    >
                      <CiFacebook className="rounded-full text-5xl lg:text-6xl hover:text-blue-500 shadow-lg shadow-slate-300" />
                    </a>

                    <a href="https://github.com/Iam-Zarif" target="_blank">
                      <AiOutlineGithub className="rounded-xl text-4xl lg:text-5xl hover:text-blue-500 shadow-lg shadow-slate-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg py-10 lg:py-0 lg:px-20 shadow-lg shadow-black rounded-xl  flex items-center justify-center">
            <form
              action="https://formspree.io/f/mjvqbowp"
              method="post"
              className="bg-gray-800 p-6 lg:w-[600px] rounded-lg shadow-lg  shadow-slate-500"
              data-aos="flip-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-300 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-700 text-gray-200 shadow-lg shadow-black placeholder-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="text-gray-300 font-semibold shadow-lg shadow-black"
                  >
                    Your Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="bg-gray-700 shadow-lg shadow-black text-gray-200 placeholder-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-gray-300 font-semibold"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-700 shadow-lg shadow-black text-gray-200 placeholder-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-gray-300 font-semibold"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="bg-gray-700 shadow-lg shadow-black text-gray-200 placeholder-gray-400 rounded-lg px-4 py-2 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-full btn text-xl border-0 border-b-2 mt-5 border-b-blue-600 text-blue-500 w-full flex items-center"
                  >
                    Submit
                    <BsFillArrowRightCircleFill className="text-3xl ml-2 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

{
  /* <p>Mostofa Fatin</p>
              <p>MERN stack fresher</p>
              <p>
                I am available for developing work. Connect with me via and call
                in to my account.
              </p>
              <p>Phone: +01234567890</p>
              <p>Email: admin@example.com</p> */
}
