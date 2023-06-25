
import ReactRotatingText from "react-rotating-text";
import CoverContainer from "../../Container/CoverContainer";


const Cover = () => {
  const items = ["Developer", "Professional Coder", "Designer"];

  return (
    <CoverContainer>
      <div className="mt-32 grid grid-cols-1 lg:grid-cols-3">
        <div className="text-white col-span-2">
          <p className="text-xl">WELCOME TO MY WORLD</p>
          <p className="lg:text-6xl mt-5">
            Hi,  I am{" "}
            <span className="normal-case lg:text-6xl text-blue-600 font-semibold shadowed-text">
              Mostofa Fatin
            </span>{" "} <br />
            a <ReactRotatingText items={items} />
          </p>
          <p className="mt-5 lg:mr-24 text-lg">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <div className="mt-20">
            <p className="text-2xl">Find Me in</p>
            
          </div>
        </div>
          <div>
            <img src="" alt="My Bug size photo" />
          </div>
      </div>
    </CoverContainer>
  );
};

export default Cover;
