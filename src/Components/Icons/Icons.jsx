import react from "../../assets/react.png"
import firebase from "../../assets/firebase.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind-css-icon.png"
import mongoDb from "../../assets/mongodb.png"
import node from "../../assets/nodeJS.png"
import html from "../../assets/html-5.png"
import css from "../../assets/css-3.png"
import Container from "../../Container/Container"
import "./icons.css"
const Icons = () => {
    return (
      <div>
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 justify-center mx-auto lg:justify-around mt-5 lg:mt-28">
            <img
              className="mx-auto lg:w-[180px] w-[180px] shadow-lg shadow-black p-8 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
              src={html}
              alt=""
            />
            <img
              className="mx-auto lg:w-[180px] w-[180px] shadow-lg shadow-black p-8 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
              src={css}
              alt=""
            />
            <img
              className="mx-auto lg:w-[180px] w-[180px] shadow-lg shadow-black p-8 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
              src={tailwind}
              alt=""
            />
            <img
              className="mx-auto lg:w-[180px] w-[180px] shadow-lg shadow-black p-8 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
              src={bootstrap}
              alt=""
            />
            <img
              className="mx-auto lg:w-[180px] w-[180px] shadow-lg shadow-black p-8 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
              src={react}
              alt=""
            />
            <img
              className="mx-auto lg:w-[180px] w-[180px] shadow-lg shadow-black p-8 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
              src={node}
              alt=""
            />
            <img
              className="mx-auto lg:w-[180px] w-[180px] shadow-lg shadow-black p-8 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
              src={firebase}
              alt=""
            />
            <img
              className="mx-auto lg:w-[180px] w-[180px] shadow-lg shadow-black p-8 rounded-xl hover:shadow-slate-400 animate-float lg:animate-none"
              src={mongoDb}
              alt=""
            />
          </div>
        </Container>
      </div>
    );
};

export default Icons;