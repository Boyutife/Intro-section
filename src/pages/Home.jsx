import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import clientAudiophile from '../assets/client-audiophile.svg';
import clientDatabiz from '../assets/client-databiz.svg';
import clientMaker from '../assets/client-maker.svg';
import clientMeet from '../assets/client-meet.svg';

import imageHeroDesktop from '../assets/image-hero-desktop.png';
import imageHeroMobile from '../assets/image-hero-mobile.png';

const Home = () => {
  const clients = [
    { id: 1, src: clientDatabiz, alt: 'Databiz' },
    { id: 2, src: clientAudiophile, alt: 'Audiophile' },
    { id: 3, src: clientMeet, alt: 'Meet' },
    { id: 4, src: clientMaker, alt: 'Maker' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' },
  };

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
  };

  return (
    <>
      <div className="flex relative flex-col min-h-screen md:items-center gap-6  overflow-hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bg-white w-2/3 h-full md:hidden"
            >
              <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.div>
          )}
        </AnimatePresence>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex flex-col gap-6 md:flex-row md:w-11/12 md:justify-center">
          <section className="hero md:order-2 md:px-10 md:w-1/2 md:flex md:justify-center">
            <img
              src={imageHeroMobile}
              alt="hero image"
              className="md:hidden h-auto w-full"
            />
            <img
              src={imageHeroDesktop}
              alt="hero image"
              className="hidden w-auto max-h-[38rem]  md:block"
            />
          </section>
          <div className="container flex flex-col gap-6 items-center md:w-2/5 md:justify-center md:pl-10 md:items-start">
            <h1 className="text-gray-950 text-center text-4xl font-bold px-2 md:text-7xl md:text-balance md:text-left">
              Make remote work
            </h1>
            <p className="text-gray-500 text-center px-4 md:text-left md:text-pretty md:w-4/5 ">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-slate-950 text-gray-50 py-3 px-3 w-fit rounded-xl">
              Learn more
            </button>
            <article className="flex w-full justify-between my-4 px-3 md:px-0">
              {clients.map((client) => (
                <img
                  key={client.id}
                  src={client.src}
                  alt={`${client.alt} logo`}
                  className="h-[1.5rem] md:h-fit "
                ></img>
              ))}
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
