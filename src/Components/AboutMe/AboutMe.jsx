/* eslint-disable react/no-unescaped-entities */

import Container from "../../Container/Container";
import CoverContainer from "../../Container/CoverContainer";
import photo from "../../assets/Programming-pana-1.png"
import sketch from "../../assets/sketch2.gif"
import sing from "../../assets/sing1.gif"
import read from "../../assets/read1.gif"

const AboutMe = () => {
    return (
      <div>
        <CoverContainer>
          <div className="mt-36 text-white ">
            <p className="text-center text-2xl font-bold">
              My Summary at a glance
            </p>
            <hr className="mt-2" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div
                className=" mt-16"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img src={photo} alt="" />
              </div>
              <div
                className="mt-16 shadow-lg shadow-black p-8 rounded-xl"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <p className="text-4xl font-bold">Basic Information</p>
                <hr className=" mt-4" />
                <div className="flex flex-col gap-4 mt-5 text-xl">
                  <p className="">
                    <span className="text-blue-500 font-bold">Name</span> :
                    Mostofa Fatin
                  </p>
                  <p>
                    <span className="text-blue-500 font-bold">Nickname</span> :
                    Zarif
                  </p>
                  <p>
                    <span className="text-blue-500 font-bold">
                      Date Of Birth
                    </span>{" "}
                    : 14 May, 2001
                  </p>
                  <p>
                    <span className="text-blue-500 font-bold">Nationality</span>{" "}
                    : bangladeshi
                  </p>
                  <p>
                    <span className="text-blue-500 font-bold">Address</span> :
                    Dhaka,bangladesh
                  </p>
                  <p>
                    <span className="text-blue-500 font-bold">
                      Father's Name
                    </span>{" "}
                    : Mizanul Islam
                  </p>
                  <p>
                    <span className="text-blue-500 font-bold">
                      Mothers's name
                    </span>{" "}
                    : Jannatul Ferdous
                  </p>
                  <p>
                    <span className="text-blue-500 font-bold">
                      Current Education
                    </span>{" "}
                    : Hons 3rd Year(CSE)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CoverContainer>
        <Container>
          <div className="mt-32 text-white">
            <h1 className="text-center text-2xl font-bold">Education</h1>
            <hr className="mt-5" />
            <div className="mt-20 grid grid-cols-1 lg:gap-32 lg:grid-cols-3">
              <div
                className=" shadow-md shadow-black rounded-xl text-center py-10 px-5"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <p className="text-3xl font-bold">
                  Secondary School Certificate
                </p>
                <p className="text-xl text-slate-300 mt-2">
                  Gaowair High School,Dhaka
                </p>
                <p className="mt-2 text-lg font-bold">Passing Year: (2017)</p>
                <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-black">
                  5 / 5
                </span>
              </div>
              <div
                className=" shadow-md shadow-black rounded-xl text-center py-10 px-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="text-3xl font-bold">Higher School Certificate</p>
                <p className="text-xl text-slate-300 mt-2">
                  KC Model College,Dhaka
                </p>
                <p className="mt-2 text-lg font-bold">Passing Year: (2019)</p>
                <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-black">
                  4.91 / 5
                </span>
              </div>
              <div
                className=" shadow-md shadow-black rounded-xl text-center py-10 px-5"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <p className="text-3xl font-bold">BSC at Hons(CSE)</p>
                <p className="text-xl text-slate-300 mt-2">
                  Tejgaon College,Dhaka
                </p>
                <p className="mt-2 text-lg font-bold">Session(2019-2020)</p>
                <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-black">
                  Currently studying
                </span>
              </div>
            </div>
          </div>
        </Container>
        <CoverContainer>
          <div className="mt-32 text-white">
            <p className="text-center text-3xl font-bold">Hobby</p>
            <hr className="mt-5" />

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img src={sketch} alt="" />
              </div>
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-3xl font-bold text-blue-500">Sketching</p>
                <p className="mt-10 text-lg">
                  I am a passionate individual with a love for sketching.
                  Through my artwork, I strive to capture the beauty and essence
                  of the world around me. Sketching is not just a hobby for me;
                  it's a form of self-expression that allows me to unleash my
                  creativity and communicate my thoughts and emotions visually.
                </p>
              </div>
            </div>
            <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-3xl font-bold text-blue-500">Singing</p>
                <p className="mt-10 text-lg">
                  singing is my greatest passion. From an early age, I
                  discovered the incredible power of music and the ability of
                  the human voice to convey emotions and touch the hearts of
                  others. Through singing, I find a profound sense of joy and
                  fulfillment. It is a form of self-expression that allows me to
                  share my innermost thoughts and feelings with the world.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img src={sing} alt="" className="ml-auto" />
              </div>
            </div>
            <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img src={read} className="w-4/5" alt="" />
              </div>
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p className="text-3xl font-bold text-blue-500">
                  Reading Novels
                </p>
                <p className="mt-10 text-lg">
                  With every turn of the page, I embark on a journey of
                  discovery. Novels transport me to different eras, cultures,
                  and perspectives, allowing me to explore the depths of human
                  emotions and experiences. From gripping mysteries to epic
                  fantasies, from heartwarming romances to thought-provoking
                  literary works, I delve into a diverse array of genres,
                  seeking narratives that resonate with my soul.
                </p>
              </div>
            </div>
          </div>
        </CoverContainer>
      </div>
    );
};

export default AboutMe;


{/* <div className="mt-32">
  <h1 className="text-center text-2xl font-bold">Education</h1>
  <hr className="mt-5" />
  <div className="mt-20 grid grid-cols-1 lg:gap-32 lg:grid-cols-3">
    <div
      className=" shadow-md shadow-black rounded-xl text-center py-10 px-5"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <p className="text-3xl font-bold">Secondary School Certificate</p>
      <p className="text-xl text-slate-300 mt-2">Gaowair High School,Dhaka</p>
      <p className="mt-2 text-lg font-bold">Passing Year: (2017)</p>
      <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-black">
        5 / 5
      </span>
    </div>
    <div
      className=" shadow-md shadow-black rounded-xl text-center py-10 px-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <p className="text-3xl font-bold">Higher School Certificate</p>
      <p className="text-xl text-slate-300 mt-2">KC Model College,Dhaka</p>
      <p className="mt-2 text-lg font-bold">Passing Year: (2019)</p>
      <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-black">
        4.91 / 5
      </span>
    </div>
    <div
      className=" shadow-md shadow-black rounded-xl text-center py-10 px-5"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <p className="text-3xl font-bold">BSC at Hons(CSE)</p>
      <p className="text-xl text-slate-300 mt-2">Tejgaon College,Dhaka</p>
      <p className="mt-2 text-lg font-bold">Session(2019-2020)</p>
      <span className="font-bold text-lg inline-block mt-4 px-3 py-2 rounded-xl bg-slate-700 shadow-md shadow-black">
        Currently studying
      </span>
    </div>
  </div>
</div>; */}