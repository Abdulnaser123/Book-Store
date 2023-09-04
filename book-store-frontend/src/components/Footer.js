/** @format */

import React from "react";
import {
  Envelope,
  TelephoneFill,
  Github,
  Linkedin,
  Map,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className='bg-dark text-white py-4 mt-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h5 className='mb-4 '>Contact</h5>
            <p>
              <a
                href='mailto:abodkar96@gmail.com'
                className='text-white d-flex align-items-center'
              >
                <Envelope className='mr-2' />
                abodkar96@gmail.com
              </a>
            </p>
            <p>
              <a
                href='tel:0594982946'
                className='text-white d-flex align-items-center'
              >
                <TelephoneFill className='mr-2' />
                0594982946
              </a>
            </p>
            <p>
              <a className='text-white d-flex align-items-center'>
                <Map className='mr-2' />
                Location
              </a>
            </p>
          </div>
          <div className='col-md-4'>
            <h5 className='mb-4'>Social Links</h5>
            <p>
              <a
                href='https://github.com/Abdulnaser123'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white d-flex align-items-center'
              >
                <Github className='mr-2' color='#e4edf3' />
                GitHub
              </a>
            </p>
            <p>
              <a
                href='https://www.linkedin.com/in/abdelnasserobeid/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white d-flex align-items-center'
              >
                <Linkedin className='mr-2' color='#0068c5' />
                LinkedIn
              </a>
            </p>
          </div>
          <div className='col-md-4'>
            <h5 className='mb-4'>Google Map Location</h5>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5535.374971172392!2d35.20354535627182!3d32.4114772614986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693757687560!5m2!1sen!2sus'
              width='280'
              height='150'
              title='Google Location'
              loading='lazy'
            ></iframe>
          </div>
        </div>
        <div className='text-center mt-3'>
          <p>&copy; {new Date().getFullYear()} endeavor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
