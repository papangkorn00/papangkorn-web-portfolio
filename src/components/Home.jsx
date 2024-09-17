import Navbar from "./Navbar"
import PoomImgHome from "../../public/profilePics/poomImg.png"
import SocialLinks from "./socialLinks.jsx"

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-base min-h-screen flex justify-center items-center">
        <div className="flex items-center gap-x-2">
          {/*Poom*/}
          <div className="text-header">
            <h1 className="text-6xl font-bold">PAPANGKORN</h1>
            <h2 className="text-5xl font-semibold">KIJSAKULRAT</h2>
          </div>
          {/* Poom*/}

          {/* Poom's image */}
          <div>
            <img
              src={PoomImgHome}
              alt="PoomIMG"
              className="max-w-full max-h-[100%]"
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
