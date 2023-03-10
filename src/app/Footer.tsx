import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='mx-auto w-11/12'>
      <hr className='my-4 h-0.5 rounded border-0 bg-gray-700 md:mt-6'></hr>
      <div className='mb-5 flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-0'>
        <div className='relative flex flex-col text-center md:flex-row'>
          <p>Copyright © 2023</p>
          <p className='invisible md:visible'>&nbsp;|&nbsp;</p>
          <p className='relative -top-3 md:-top-0'>All rights reserved.</p>
        </div>
        <div className='relative -top-3 flex gap-8 md:-top-0'>
          <a href='https://www.facebook.com/'>
            <FaGithub size={20} />
          </a>
          <a href='https://www.facebook.com/'>
            <FaFacebook size={20} />
          </a>
          <a href='https://www.instagram.com/'>
            <FaInstagram size={20} />
          </a>
          <a href='https://www.twitter.com/'>
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
