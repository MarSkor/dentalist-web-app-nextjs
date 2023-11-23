'use client'
import Link from "next/link"
import { 
  IconoirProvider, 
  Twitter, 
  Facebook, 
  Instagram 
} from "iconoir-react"
import { 
  FOOTER_DATA_CONTACT_INFORMATION, 
  FOOTER_DATA_LINKS 
} from "./data"


const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__row">
            <div className="footer__col">
              <div className="footer__col--content">
                <img 
                className="footer__col--logo" 
                src="/assets/footer/Footer__logo.svg" 
                alt="logo" 
                loading="lazy"
                />
                <p className="p-18">Dental Care Seattle is a top-rated local practice for cosmetic, preventative, and restorative dentistry on First Hill</p>
              </div>
              <div className="footer__col--content">
                <p className="label-12">Follow us on</p>
                <div className="footer__col--content__social-media">
                  <IconoirProvider iconProps={{
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer'
                  }}>
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                  </IconoirProvider>
                </div>
              </div>
            </div>

            <div className="footer__col">
              <div className="footer__col--content__links">
                <p className="label-12">Quick Links</p>
                {FOOTER_DATA_LINKS.map((link, index) => (
                  <Link key={index} className="label-14" href={link.value}>
                    {link.link_text}
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer__col">
              <p className="label-12">Contact & Information</p>
              {FOOTER_DATA_CONTACT_INFORMATION.map((item, index) => (
                <div key={index} className="footer__col--info-group">
                  <img src={item.icon} alt="number"/>
                  <div>
                    <p className="label-12">{item.label}</p>
                    <p className="p-18">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer__row copyright">
            <p className="p-16">&copy;Dentalist. All Rights Reserved</p>
            <div>
              <Link title="Terms of use" href={"#"}>Terms of Use</Link>
              <Link title="Privacy Policy" href={"#"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer