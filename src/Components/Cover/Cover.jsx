/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import photo from "../../assets/Programming-pana-1.png"
import ReactRotatingText from "react-rotating-text";
import CoverContainer from "../../Container/CoverContainer";
import {  } from "react-icons/fa";
import {  } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { SiAdobeillustrator } from "react-icons/si";
import { LuInstagram } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineGithub } from "react-icons/ai";
import "./cover.css"
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Cover = () => {
  const items = ["Developer", "Professional Coder", "Designer"];

  return (
    <CoverContainer>
      <div
        className="lg:mt-48 mt-32 grid grid-cols-1 lg:grid-cols-3 items-center"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="text-white col-span-2">
          <p className="text-md lg:text-xl text-center lg:text-left">
            WELCOME TO MY PORTFOLIO
          </p>
          <p className="lg:text-6xl mt-5 lg:mt-10 text-center lg:text-left text-xl">
            Hi, I am{" "}
            <span className="name normal-case text-2xl lg:text-6xl  font-bold shadowed-text">
              Mostofa Fatin
            </span>{" "}
            <br />
            a <ReactRotatingText className="text-3xl font-bold" items={items} />
          </p>
          <p className="mt-8 lg:mr-24 lg:text-lg font-semibold mx-10 lg:mx-0">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <div className="lg:mt-20 mt-10">
            <p className="text-center lg:text-left lg:text-2xl font-bold">
              Find Me in
            </p>

            <div className="mx-16 lg:mx-0 flex justify-center lg:justify-start items-center gap-14 mt-8 ">
              <a
                href="https://www.linkedin.com/in/mostofa-fatin-zarif-863793257/"
                target="_blank"
              >
                <TiSocialLinkedinCircular className="rounded-full text-5xl lg:text-7xl hover:text-blue-500 shadow-lg shadow-slate-300" />
              </a>

              <a
                href="https://www.facebook.com/mostofafatin.zarif.3"
                target="_blank"
              >
                <CiFacebook className="rounded-full text-5xl lg:text-7xl hover:text-blue-500 shadow-lg shadow-slate-300" />
              </a>
              <a
                href="https://www.instagram.com/zarif_mostofa/"
                target="_blank"
              >
                <LuInstagram className="rounded-xl text-4xl lg:text-6xl hover:text-blue-500 shadow-lg shadow-slate-300" />
              </a>
              <a href="https://github.com/Iam-Zarif" target="_blank">
                <AiOutlineGithub className="rounded-xl text-4xl lg:text-6xl hover:text-blue-500 shadow-lg shadow-slate-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-16 lg:mx-0">
          <img src={photo} className=" " alt="My Big size photo" />
        </div>
      </div>
      <section className="text-center lg:text-left">
        
      </section>{" "}
      <hr className="mt-16 shadow-md py-1  " />
    </CoverContainer>
  );
};

export default Cover;
