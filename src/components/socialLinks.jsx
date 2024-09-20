import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"

const socialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/papangkorn-kijsakulrat-pmm/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/papangkorn00",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:papangkorn.poomm@gmail.com",
      style: "rounded-tr-md",
    },
  ]

  return (
    <div className="hidden lg:flex flex-col top-[40%] left-0 fixed">
      <ul>
        {links.map((social) => (
          <li
            key={social.id}
            className={
              " flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-slate-300 bg-opacity-90" +
              " " +
              social.style
            }
          >
            <a
              href={social.href}
              className="flex justify-between items-center w-full text-slate-700 font-bold tracking-wide"
              target="_blank"
            >
              {social.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default socialLinks
