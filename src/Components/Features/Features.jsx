import { CgWebsite } from "react-icons/cg";

import CoverContainer from "../../Container/CoverContainer";
const Features = () => {
  return (
    <CoverContainer>
      <div className="mt-28 text-white">
        <h1 className="text-2xl text-blue-500">Features</h1>
        <h1 className="text-5xl mt-10 font-bold">What I do</h1>
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3">
          <div>
            <CgWebsite />
            <p>Web development</p>
            <p>
              The MERN stack is a popular technology stack used for building
              full-stack web applications. It is an acronym that stands for
              MongoDB, Express.js, React.js, and Node.js, representing the
              different components of the stack
            </p>
          </div>
          <div>
            <CgWebsite />
            <p>Web development</p>
            <p>
              The MERN stack is a popular technology stack used for building
              full-stack web applications. It is an acronym that stands for
              MongoDB, Express.js, React.js, and Node.js, representing the
              different components of the stack
            </p>
          </div>
          <div>
            <CgWebsite />
            <p>Web development</p>
            <p>
              The MERN stack is a popular technology stack used for building
              full-stack web applications. It is an acronym that stands for
              MongoDB, Express.js, React.js, and Node.js, representing the
              different components of the stack
            </p>
          </div>
          <div>
            <CgWebsite />
            <p>Web development</p>
            <p>
              The MERN stack is a popular technology stack used for building
              full-stack web applications. It is an acronym that stands for
              MongoDB, Express.js, React.js, and Node.js, representing the
              different components of the stack
            </p>
          </div>
        </div>
      </div>
    </CoverContainer>
  );
};

export default Features;
