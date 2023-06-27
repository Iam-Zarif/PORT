import { FaPhone } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import Container from "../../Container/Container";
import photo from "../../assets/Contact-1.gif";
const Contact = () => {
  return (
    <Container>
      <div className="mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <div className="text-white card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={photo} alt="contact photo" />
              </figure>
              <div className="card-body">
                <p className="text-center text-4xl font-bold text-blue-500">
                  Mostofa Fatin
                </p>
                <p className="text-center text-xl font-bold">
                  MERN stack fresher
                </p>
                <hr className="mt-2" />
                <p className="text-lg mt-4">
                  I am available for developing work. Connect with me via and
                  call in to my account.
                </p>
                <p className="mt-6 text-lg ">
                  <span className="text-blue-600 font-bold">
                    <FaPhone className="inline text-xl" />
                  </span>{" "}
                  : +8801933329902
                </p>
                <p className=" text-lg">
                  <span className="text-blue-600 font-bold">
                    <AiTwotoneMail className="inline text-xl" />
                  </span>{" "}
                  : zarifraja19@gmail.com
                </p>
                <div className="mt-8">
                  <p className="text-center  lg:text-xl font-bold">
                    Find Me in
                  </p><hr className="mt-4"/>
                  
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div></div>
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
