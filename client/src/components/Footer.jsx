import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-48 text-sm text-gray-500">
      <motion.div
        {...fadeUp(0)}
        className="flex flex-wrap justify-between items-start gap-10 pb-10 border-b border-borderColor"
      >
        <div className="max-w-sm">
          <motion.img
            {...fadeUp(0.2)}
            src={assets.logo}
            alt="logo"
            className="h-9 mb-3"
          />

          <motion.p {...fadeUp(0.3)} className="leading-relaxed">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center gap-4 mt-6"
          >
            {[assets.facebook_logo, assets.instagram_logo, assets.twitter_logo, assets.gmail_logo].map(
              (logo, i) => (
                <a key={i} href="#">
                  <img src={logo} className="w-5 h-5 hover:opacity-70 transition" />
                </a>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap justify-between w-full md:w-1/2 gap-10"
        >
          <div>
            <h2 className="text-base font-medium text-gray-900 uppercase tracking-wide">
              Quick Links
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {["Home", "Browse Cars", "List Your Car", "About Us"].map(
                (item) => (
                  <li key={item}>
                    <a className="hover:text-gray-700 transition" href="#">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-900 uppercase tracking-wide">
              Resources
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {["Help Center", "Terms of Service", "Privacy Policy", "Insurance"].map(
                (item) => (
                  <li key={item}>
                    <a className="hover:text-gray-700 transition" href="#">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-900 uppercase tracking-wide">
              Contact
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>+1 234 567890</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        {...fadeUp(0.5)}
        className="flex flex-col md:flex-row gap-3 items-center justify-between py-6 text-gray-600"
      >
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>

        <ul className="flex items-center gap-4">
          {["Privacy", "Terms", "Cookies"].map((item, i) => (
            <React.Fragment key={item}>
              <li>
                <a className="hover:text-gray-800 transition" href="#">
                  {item}
                </a>
              </li>
              {i < 2 && <span>|</span>}
            </React.Fragment>
          ))}
        </ul>
      </motion.div>
    </footer>
  );
};

export default Footer;
