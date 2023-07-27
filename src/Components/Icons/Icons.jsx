import react from "../../assets/react.png";
import firebase from "../../assets/firebase.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind-css-icon.png";
import mongoDb from "../../assets/mongodb.png";
import node from "../../assets/nodeJS.png";
import html from "../../assets/html-5.png";
import Container from "../../Container/Container";
import figma from "../../assets/figma.png";
import sass from "../../assets/sass.png";
import js from "../../assets/js.png";
import "./icons.css";
const Icons = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 mx-auto  mt-5 lg:mt-28">
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={html}
            alt=""
          />
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={tailwind}
            alt=""
          />
          <img
            className="mx-auto  lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={js}
            alt=""
          />
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={bootstrap}
            alt=""
          />
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={react}
            alt=""
          />
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={node}
            alt=""
          />
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={firebase}
            alt=""
          />
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={mongoDb}
            alt=""
          />
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={figma}
            alt=""
          />
          <img
            className="mx-auto lg:w-[180px]  w-[100px] shadow-lg shadow-black p-4 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
            src={sass}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default Icons;
