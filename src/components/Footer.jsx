import React from 'react';
import { footerLinks } from '../constants';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons from react-icons library

const Footer = () => {
  // Define your social media URLs
  const socialMediaUrls = {
    github: 'https://github.com/Roshu09',
    instagram: 'https://www.instagram.com/ig_roshan09',
    linkedin: 'https://www.linkedin.com/in/roshan-gupta-340887227'
  };

  const email = 'guptaroshan8084@gmail.com'; // Define your email address

  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue">
              Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue">
              other retailer
            </span>{' '}
            near you.
          </p>
          {/* Make the email address clickable */}
          <p className="font-semibold text-gray text-xs">
            Or email- <a href={`mailto:${email}`} className="underline text-blue">{email}</a>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          {/* Add social media icons */}
          <div className="flex">
            {/* GitHub */}
            <a href={socialMediaUrls.github} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray">
              <FaGithub />
            </a>
            {/* Instagram */}
            <a href={socialMediaUrls.instagram} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray">
              <FaInstagram />
            </a>
            {/* LinkedIn */}
            <a href={socialMediaUrls.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray">
              <FaLinkedin />
            </a>
          </div>
          
          <p className="font-semibold text-gray text-xs">
            Clone Purpose Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
