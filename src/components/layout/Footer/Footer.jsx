import footerLogo from '../../../assests/Gc_logo.png'


import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaDiscord, FaYoutube, FaTwitter, FaFacebookF, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative bg-[#0b0b0f] border-t border-[#497DFF] py-12 md:py-16 pb-8 font-['Poppins'] overflow-hidden">
      <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,20vw,200px)] font-black text-white opacity-[0.05] whitespace-nowrap tracking-tighter pointer-events-none select-none">
        GRAVITY CODING
      </div>

      <div className="relative z-10 px-5 sm:px-8 md:px-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 md:gap-8 mb-10 text-left">
          {/* Column 1 - Brand & Social */}
          <div className="flex flex-col items-start">
            <div className="mb-3">
              <img src={footerLogo} alt="Gravity Coding" className="h-[48px] object-contain block" />
            </div>
            <h3 className='text-white text-2xl font-bold mb-3'>Building Future Coders</h3>
            <p className="text-[0.9rem] text-white/55 mb-5 leading-relaxed max-w-[300px]">Let's connect with our socials</p>
            <div className="flex gap-4 flex-wrap justify-start">
              <a href="https://www.instagram.com/gravitycoding" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-white/85 transition-all duration-300 hover:text-[#497DFF] hover:-translate-y-1" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/gravitycoding/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-white/85 transition-all duration-300 hover:text-[#497DFF] hover:-translate-y-1" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://github.com/gravity-coding" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-white/85 transition-all duration-300 hover:text-[#497DFF] hover:-translate-y-1" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://www.facebook.com/gravitycoding" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-white/85 transition-all duration-300 hover:text-[#497DFF] hover:-translate-y-1" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.youtube.com/@gravitycoding" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-white/85 transition-all duration-300 hover:text-[#497DFF] hover:-translate-y-1" aria-label="YouTube">
                <FaYoutube size={18} />
               </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-[1rem] font-semibold text-white uppercase tracking-widest mb-5">COMPANY</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5"><Link to="/" className="text-[0.95rem] text-white/60 transition-colors duration-300 hover:text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">About Us</Link></li>
              <li className="mb-2.5"><Link to="/" className="text-[0.95rem] text-white/60 transition-colors duration-300 hover:text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Support</Link></li>
              <li className="mb-2.5"><Link to="/privacy-policy" className="text-[0.95rem] text-white/60 transition-colors duration-300 hover:text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Privacy Policy</Link></li>
              <li className="mb-2.5"><Link to="/terms-and-conditions" className="text-[0.95rem] text-white/60 transition-colors duration-300 hover:text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Terms and Condition</Link></li>
              <li className="mb-2.5"><Link to="/pricing-refund-policy" className="text-[0.95rem] text-white/60 transition-colors duration-300 hover:text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Pricing and Refund</Link></li>
            </ul>
          </div>

          {/* Column 3 - Community */}
          <div>
            <h4 className="text-[1rem] font-semibold text-white uppercase tracking-widest mb-5">COMMUNITY</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5"><a href="#" className="text-[0.95rem] text-white/60 transition-colors duration-300 hover:text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Interns</a></li>
              <li className="mb-2.5"><a href="#" className="text-[0.95rem] text-white/60 transition-colors duration-300 hover:text-white no-underline relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Discord</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-[1rem] font-semibold text-white uppercase tracking-widest mb-5">Get in Touch</h4>
            <ul className="list-none p-0 m-0 mb-6">
              <li className="text-[0.95rem] text-white/60 leading-relaxed mb-1.5"><a href="tel:+917462830649" className="text-white/60 no-underline hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">+91 7462830649</a></li>
              <li className="text-[0.95rem] text-white/60 leading-relaxed mb-1.5"><a href="tel:+916260259118" className="text-white/60 no-underline hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">+91 6260259118</a></li>
              <li className="text-[0.95rem] text-white/60 leading-relaxed mb-1.5"><a href="mailto:contact@gravitycoding.com" className="text-white/60 no-underline hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">contact@gravitycoding.com</a></li>
              <li className="text-[0.95rem] text-white/60 leading-normal">Add : Sai Mandir Chouraha, Lamheta Rd, Sagra, Jabalpur, Madhya Pradesh 482003</li>
            </ul>
            <Link to="/contact" className="inline-block px-8 py-3 bg-[#497DFF] text-white text-[0.95rem] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#3366ee] hover:shadow-[0_4px_20px_rgba(73,125,255,0.4)] no-underline active:scale-95 shadow-lg shadow-[#497DFF]/20">Contact us</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/10">
          <p className="text-[0.85rem] text-white/50 m-0">© All rights reserved. Skillsvarz Gravity Coding Pvt. Ltd. 2025</p>
          <div className="flex gap-6 flex-wrap justify-start">
            <a href="#" className="text-[0.85rem] text-white/50 no-underline transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Imprint</a>
            <Link to="/terms-and-conditions" className="text-[0.85rem] text-white/50 no-underline transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Terms</Link>
            <Link to="/privacy-policy" className="text-[0.85rem] text-white/50 no-underline transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Privacy Policy</Link>
            <a href="#" className="text-[0.85rem] text-white/50 no-underline transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#497DFF] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
