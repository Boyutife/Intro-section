import MenuItems from './MenuItems';
import closeMenu from '../assets/icon-close-menu.svg';
const MobileMenu = ({ isOpen, setIsOpen }) => {
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} p-4`}>
      <div className="flex justify-end mb-10">
        <button onClick={handleCloseMenu}>
          <img src={closeMenu} alt="Close menu icon" />
        </button>
      </div>
      <div className="ml-5">
        <MenuItems />
      </div>
    </div>
  );
};

export default MobileMenu;
