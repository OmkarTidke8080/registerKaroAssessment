import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t-2 border-black py-6">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="w-full">
            <p className="text-xl font-rockoFLFRegular">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
          </div>

          <div className="w-full">
            <h2 className="text-base text-yellow-600 sm:text-lg md:text-xl font-rockoUltraFLFBold lg:text-2xl font-semibold mb-2">
              START A BUSINESS
            </h2>
            <ul className="space-y-2 font-rockoFLFRegular">
              <li>Features</li>
              <li>Solution</li>
              <li>Integrations</li>
              <li>Enterprise</li>
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-xl text-yellow-600 font-rockoUltraFLFBold font-semibold mb-2">
              GOVERNMENT REGISTRATIONS
            </h2>
            <ul className="space-y-2 font-rockoFLFRegular">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-xl text-yellow-600 font-rockoUltraFLFBold font-semibold mb-2">
              COMPLIANCE & TAX
            </h2>
            <ul className="space-y-2 font-rockoFLFRegular">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-xl text-yellow-600 font-rockoUltraFLFBold font-semibold mb-2">
              BIDS & CDSCO
            </h2>
            <ul className="space-y-2 font-rockoFLFRegular">
              <li>About Us</li>
              <li>Leadership</li>
              <li>News</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>

        <div className="text-center font-rockoFLFRegular mt-6">
          <p className="text-sm">© 2024 RegisterKaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
