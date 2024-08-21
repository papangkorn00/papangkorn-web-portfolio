import {NavLink} from "react-router-dom"
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react"
import PoomNav from "../../public/profilePics/navPic.jpg"

const navigation = [
  {name: "Home", to: "/"},
  {name: "About", to: "/about"},
  {name: "Portfolio", to: "/portfolio"},
]

const Navbar = () => {
  return (
    <Disclosure as="nav" className="">
      <div className="fixed w-full mx-auto bg-black rounded-b-xl  px-2 sm:px-6 lg:px-10 ">
        <div className="flex h-[6rem] items-center justify-between ">
          <div className="flex space-x-5">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({isActive}) =>
                  `block rounded-md px-3 py-2 text-xl font-medium hover:bg-gray-600 hover:text-white tracking-wide ${
                    isActive ? "underline text-slate-100" : "text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <img alt="" src={PoomNav} className="h-12 w-12  rounded-full" />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Your Profile
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Sign out
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>

      {/* <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.to}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel> */}
    </Disclosure>
  )
}

export default Navbar
