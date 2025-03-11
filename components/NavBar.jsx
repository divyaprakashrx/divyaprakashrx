import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { navigationItems } from '../utils/navigation';

const NavContainer = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
  font-family: var(--font-mono);
  border-radius: 30px; /* Changed to 30px for a 50% rounded look relative to height */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3),
              0 0 20px rgba(0, 153, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    width: calc(100% - 30px);
  }
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px; /* adjusted to account for border-radius */
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(15px);
    padding: 1rem 0;
    gap: 0;
    border-radius: 0 0 30px 30px; /* Updated to match main navbar */
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-top: none;
  }
`;

const NavItem = styled.li`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #00a8ff;
    transition: width 0.3s ease;
  }

  &:hover:after,
  &.active:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00a8ff;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <NavContainer>
      <Logo>
        <Link href="/" passHref legacyBehavior>
          <NavLink>DP</NavLink>
        </Link>
      </Logo>
      
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '☰'}
      </MenuButton>
      
      <NavItems isOpen={isOpen}>
        {navigationItems.map((item, index) => (
          <NavItem 
            key={index} 
            className={router.pathname === item.path ? 'active' : ''}
          >
            <Link href={item.path} passHref legacyBehavior>
              <NavLink>{item.title}</NavLink>
            </Link>
          </NavItem>
        ))}
      </NavItems>
    </NavContainer>
  );
};

export default NavBar;
