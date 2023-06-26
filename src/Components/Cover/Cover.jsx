/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import ReactRotatingText from "react-rotating-text";
import CoverContainer from "../../Container/CoverContainer";
import {  } from "react-icons/fa";
import {  } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { SiAdobeillustrator } from "react-icons/si";
import { LuInstagram } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";

import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Cover = () => {
  const items = ["Developer", "Professional Coder", "Designer"];

  return (
    <CoverContainer>
      <div className="mt-48 grid grid-cols-1 lg:grid-cols-3">
        <div className="text-white col-span-2">
          <p className="text-xl">WELCOME TO MY PORTFOLIO</p>
          <p className="lg:text-6xl mt-10">
            Hi, I am{" "}
            <span className="normal-case lg:text-6xl text-blue-600 font-bold shadowed-text">
              Mostofa Fatin
            </span>{" "}
            <br />
            a <ReactRotatingText items={items} />
          </p>
          <p className="mt-8 lg:mr-24 text-lg font-semibold">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <div className="mt-20">
            <p className="text-2xl">Find Me in</p>
            
            <div className="flex items-center gap-14 mt-8">
              <a
                href="https://www.linkedin.com/in/mostofa-fatin-zarif-863793257/"
                target="_blank"
              >
                <TiSocialLinkedinCircular className="rounded-full text-7xl hover:text-blue-500 shadow-lg shadow-slate-300" />
              </a>

              <a
                href="https://www.facebook.com/mostofafatin.zarif.3"
                target="_blank"
              >
                <CiFacebook className="rounded-full text-7xl hover:text-blue-500 shadow-lg shadow-slate-300" />
              </a>
              <a
                href="https://www.instagram.com/zarif_mostofa/"
                target="_blank"
              >
                <LuInstagram className="rounded-xl text-6xl hover:text-blue-500 shadow-lg shadow-slate-300" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src="" alt="My Bug size photo" />
        </div>
      </div>
      <button className="btn btn-outline text-blue-500 hover:text-blue-700 hover:shadow-md hover:shadow-slate-300 mt-10 text-xl">Download My Resume</button>
        <hr className="mt-16 shadow-md py-1  "/>
    </CoverContainer>
  );
};

export default Cover;
