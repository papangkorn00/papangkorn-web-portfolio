import Navbar from "./Navbar"
import PoomImgHome from "../../public/profilePics/poomImg.jpg"

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center">
        <div>
          <h1>PAPANGKORN</h1>
          <h2>KIJSAKULRAT</h2>
        </div>
        <div>
          {/* <img src={PoomImgHome} alt="PoomIMG" className="h- " /> */}
        </div>
      </div>
    </>
  )
}

export default Home
