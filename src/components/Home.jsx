import Navbar from "./Navbar"
import PoomImgHome from "../assets/img/profilePics/poomImg.png"
import SocialLinks from "./socialLinks.jsx"

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-base min-h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/*Poom*/}
          <div className="text-header w-3/4 md:w-2/5 lg:w-1/3">
            {/* <h1 className="text-2xl font-extrabold font-media tracking-wider  lg:text-6xl">
              PAPANGKORN
            </h1>
            <h2 className="text-xl font-bold font-media tracking-wide  lg:text-5xl">
              KiJSAKULRAT😉
            </h2> */}

            <h1 className="text-xl font-bold font-media tracking-wider md:text-4xl">
              Hi, I&apos;m Poom! 😉
            </h1>
            <h2 className="text-xl md:text-2xl font-medium font-media tracking-wider text-wrap">
              Developer who loves building websites and mastering new
              technologies.
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
