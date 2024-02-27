import { copyrightSign } from "../../assets/icons"
import { footerLogo } from "../../assets/images"
import { socialMedia } from "../constants/"
import { footerLinks } from "../constants/"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between flex-wrap gap-20 items-start max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 
          font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. 
            Find Your perfect Size In Store. Get Rewards
          </p>
          
          <div className="flex items-center gap-5">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full mt-8">
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title} className="">
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul className="">
                {section.links.map((link) => (
                    <li key={link.name} className="font-montserrat text-white-400 text-base mt-5 hover:text-slate-gray cursor-pointer">
                      <a href={link.link} > 
                        {link.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center font-montserrat">
          <div className="flex gap-2">
            <img 
              src={copyrightSign}
              alt="copyright sign"
              height={20}
              width={20}
              className=""
            />
            <p>Copyright. All rights reserved</p>
          </div>
          {/* Below would be updated to a link, otherwise why is it clickable. Needs to link to Terms & Conditions Page. */}
          <p className="cursor-pointer">Terms & Conditions</p>
        </div>

    </footer>
  )
}

export default Footer