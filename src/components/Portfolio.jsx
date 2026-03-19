import Navbar from "./Navbar"
import SocialLinks from "./SocialLinks"
import Card from "./Ui/Card"
import data from "../data/data.json"

const Portfolio = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-base min-h-screen w-screen">
        <div className="w-4/5 mx-auto py-20 lg:py-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="hidden lg:flex">
        <SocialLinks />
      </div>
    </div>
  )
}

export default Portfolio
