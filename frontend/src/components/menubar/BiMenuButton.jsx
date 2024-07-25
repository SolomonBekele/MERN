import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import SlideMenu from '../slidebar/SlideMenu';

const BiMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <BiMenu
        className="text-white p-2  cursor-pointer"
        size={40}
        onClick={toggleMenu}
      />
      <SlideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

export default BiMenuButton;