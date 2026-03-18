import Navbar from "./Navbar"
import SocialLinks from "./SocialLinks"
import Card from "./Ui/Card"

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-base min-h-screen w-screen flex justify-center items-center">
        <div className="w-3/4 lg:mt-40 flex flex-col lg:flex-col gap-y-5 items-center justify-center">
          <Card />
          <Card />
        </div>
      </div>

      <SocialLinks />
    </div>
  )
}

export default Portfolio
