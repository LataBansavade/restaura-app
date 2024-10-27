import React, { useRef } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter,FaLinkedin,FaGithub   } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import video from '../assets/Food-Promo-cut.mp4';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_axtshj9',
        'template_g0yt23x',
        form.current,
        '7Bgxn_yBrZmbTMZBA'
      )
      .then(
        (result) => {
          console.log('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message, please try again.');
        }
      );
    e.target.reset();
  };

  return (
    <section className="w-full h-auto" id="contact">
      {/* Video Section */}
      <div id="video-section" className="relative w-full h-screen">
        <video
          src={video}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Social Icons and Address on Video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          {/* Address */}
          <div className="mb-8">
            <h3 className="text-3xl font-semibold">Visit Us at</h3>
            <p className="mt-4 text-lg">123 Main Street, Paris, France, 345678</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/in/lata-bansavade-8541742a2/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition-colors">
              <FaLinkedin  />
            </a>
            <a href="https://github.com/LataBansavade" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition-colors">
              <FaGithub  />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition-colors">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative w-full bg-transparent py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-400 mb-8">Contact Us</h2>

          {/* 3D Contact Form */}
          <div className="bg-transparent custom-shadow2 rounded-lg shadow-2xl transform rotate-x-3 rotate-y-3 p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-6 text-gray-500">
              <div>
                <label htmlFor="name" className="block text-lg font-light">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="w-full mt-1 px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-purple-600"
                  
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-light">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="w-full mt-1 px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-purple-600"
                  
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-light">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full mt-1 px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-purple-600"
                  rows="4"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-800 transition-colors text-white font-light shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
