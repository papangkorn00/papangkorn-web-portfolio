import Navbar from "./Navbar"
import PoomImgHome from "../../public/profilePics/poomImg.png"
import SocialLinks from "./socialLinks.jsx"

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-base min-h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center gap-x-2 lg:mx-20">
          {/*Poom*/}
          <div className="text-header">
            {/* <h1 className="text-2xl font-extrabold font-media tracking-wider  lg:text-6xl">
              PAPANGKORN
            </h1>
            <h2 className="text-xl font-bold font-media tracking-wide  lg:text-5xl">
              KiJSAKULRAT😉
            </h2> */}

            <h1 className="text-xl font-bold font-media tracking-wider lg:text-5xl ">
              Hi, I'm Poom! 😉
            </h1>
            <h2 className="text-xl font-extrabold font-media tracking-wider md:text-xl">
              Full Stack Developer☕
            </h2>
          </div>
          {/* Poom*/}

          {/* Poom's image */}
          <div className="flex justify-center">
            <img
              src={PoomImgHome}
              alt="PoomIMG"
              className="max-w-[65%] lg:max-w-full lg:max-h-[100%]"
            />
          </div>
          {/* Poom's image */}
        </div>
      </div>

      <SocialLinks />
    </>
  )
}

export default Home
