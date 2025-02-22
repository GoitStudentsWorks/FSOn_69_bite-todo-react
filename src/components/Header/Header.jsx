import React, { useEffect } from 'react';
import ThemeSelector from './ThemeSelector';
import Profile from './Profile';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledHeader, DivBtnStyle, StyledNav } from './Header.styled';

const Header = ({ menuActive, setMenuActive, toggleMenu }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape' && window.innerWidth <= 1439) {
        setMenuActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuActive, setMenuActive]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setMenuActive(true);
      } else {
        setMenuActive(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setMenuActive]);

  return (
    <StyledHeader>
      <DivBtnStyle onClick={toggleMenu}>
        <Svg w={32} h={32} use={`${sprite}#icon-burger`} />
      </DivBtnStyle>
      <StyledNav>
        <ThemeSelector />
        <Profile />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
