import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import iconCalendar from '../assets/icon-calendar.svg';
import iconPlanning from '../assets/icon-planning.svg';
import iconReminders from '../assets/icon-reminders.svg';
import iconTodo from '../assets/icon-todo.svg';
import arrowDown from '../assets/icon-arrow-down.svg';
import arrowUp from '../assets/icon-arrow-up.svg';

const MenuItems = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const clickFeature = () => {
    setIsFeaturesOpen((prev) => !prev);
  };

  const clickCompany = () => {
    setIsCompanyOpen((prev) => !prev);
  };

  const features = [
    { id: 1, name: 'Todo List', src: iconTodo },
    { id: 2, name: 'Calendar', src: iconCalendar },
    { id: 3, name: 'Reminders', src: iconReminders },
    { id: 4, name: 'Planning', src: iconPlanning },
  ];
  const companies = [
    { id: 1, name: 'History' },
    { id: 2, name: 'Our Team' },
    { id: 3, name: 'Blog' },
  ];

  const isMobile = window.innerWidth < 768;
  return (
    <div className="flex flex-col md:justify-between md:flex-row gap-10 md:gap-0  w-full">
      <div className="flex flex-col items-start md:flex md:flex-row gap-6 text-gray-500">
        <motion.button
          initial={isMobile ? { opacity: 0, x: '100%' } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`${isFeaturesOpen ? 'flex-col' : ''} md:relative`}
          onClick={clickFeature}
        >
          <div className="flex items-center gap-2">
            <p>Features</p>
            <img
              src={isFeaturesOpen ? arrowUp : arrowDown}
              alt="arrow-down icon"
              className="h-[0.4rem]"
            />
          </div>
          <div
            className={
              isFeaturesOpen
                ? 'md:absolute top-10 right-0 flex flex-col gap-4 md:bg-white md:shadow-md p-4 rounded-md z-10 md:min-w-[10rem]'
                : 'hidden'
            }
          >
            {isFeaturesOpen &&
              features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-2 ">
                  <img src={feature.src} alt={feature.name} />
                  <p>{feature.name}</p>
                </div>
              ))}
          </div>
        </motion.button>
        <motion.button
          initial={isMobile ? { opacity: 0, x: '100%' } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.35, delay: 0.1 }}
          className={`${isCompanyOpen ? 'flex-col' : ''} md:relative`}
          onClick={clickCompany}
        >
          <div className="flex items-center gap-2">
            <p>Company</p>
            <img
              src={isCompanyOpen ? arrowUp : arrowDown}
              alt="arrow-down icon"
              className="h-[0.4rem]"
            />
          </div>
          <div
            className={
              isCompanyOpen
                ? 'md:absolute top-10 left-0 flex flex-col gap-2 md:bg-white md:shadow-md p-4 rounded-md z-10 min-w-[8rem]'
                : 'hidden'
            }
          >
            {isCompanyOpen &&
              companies.map((company) => (
                <div
                  key={company.id}
                  className="flex items-center  gap-2 mt-2 ml-4"
                >
                  <p>{company.name}</p>
                </div>
              ))}
          </div>
        </motion.button>
        <motion.button
          initial={isMobile ? { opacity: 0, x: '100%' } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.375, delay: 0.1 }}
        >
          Careers
        </motion.button>
        <motion.button
          initial={isMobile ? { opacity: 0, x: '100%' } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          About
        </motion.button>
      </div>
      <div className="flex flex-col md:flex md:flex-row gap-6 text-gray-500">
        <motion.button
          initial={isMobile ? { opacity: 0, x: '100%' } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.425, delay: 0.1 }}
        >
          Login
        </motion.button>
        <motion.button
          initial={isMobile ? { opacity: 0, x: '100%' } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="border-2 py-2 px-4 rounded-2xl border-gray-500"
        >
          Register
        </motion.button>
      </div>
    </div>
  );
};

export default MenuItems;
