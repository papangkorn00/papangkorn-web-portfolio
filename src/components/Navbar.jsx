import {NavLink} from "react-router-dom"
import {
  Disclosure,
  // Menu,
  // MenuButton,
  // MenuItems,
  // MenuItem,
} from "@headlessui/react"
// import PoomNavPic from "../../public/profilePics/navPic.png"

const navigation = [
  {name: "Home", to: "/"},
  // {name: "About", to: "/about"},
  {name: "Portfolio", to: "/portfolio"},
]

const Navbar = () => {
  return (
    <Disclosure as="nav">
      <div className="fixed z-50 w-full mx-auto bg-black rounded-b-xl  px-2 sm:px-6 lg:px-10 ">
        <div className="hidden lg:flex lg:h-24 lg:items-center lg:justify-between ">
          <div className="flex space-x-5">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({isActive}) =>
                  `block rounded-md px-3 py-2 text-xl font-apercu hover:text-white tracking-wide ${
                    isActive ? "text-slate-100 font-[759]" : "text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </Disclosure>
  )
}

export default Navbar
