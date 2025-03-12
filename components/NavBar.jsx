import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { navigationItems } from '../utils/navigation';
import { siteContent } from '../config/content';
import { siteConfig } from '../config/site';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavContainer = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  height: 60px;
  background-color: ${siteConfig.theme.background.blur};
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
  font-family: var(--font-mono);
  border-radius: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3),
              0 0 20px ${siteConfig.theme.primary.light};
  border: 1px solid ${siteConfig.theme.border.light};
  
  @media (max-width: 768px) {
    width: calc(100% - 30px);
  }
`;

const Logo = styled.div`
  color: ${siteConfig.theme.text.primary};
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
    top: 70px;
    left: 0;
    width: 100%;
    background-color: ${siteConfig.theme.background.blur};
    backdrop-filter: blur(15px);
    padding: 1rem 0;
    gap: 0;
    border-radius: 0 0 30px 30px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    border: 1px solid ${siteConfig.theme.border.light};
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
    background-color: ${siteConfig.theme.primary.accent};
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
  color: ${siteConfig.theme.text.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${siteConfig.theme.primary.accent};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${siteConfig.theme.text.primary};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: ${siteConfig.theme.text.primary};
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    color: ${siteConfig.theme.primary.accent};
    transform: translateY(-2px);
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  // Get the current URL path including hash fragments
  const currentPath = router.asPath;

  // Function to determine if a navigation item is active
  const isItemActive = (itemPath) => {
    if (itemPath === '/') {
      // Homepage is only active when there's no hash or it's exactly '/'
      return currentPath === '/' || currentPath === '';
    }
    
    // For sections on homepage (with hash fragments)
    if (itemPath.startsWith('/#')) {
      return currentPath === itemPath;
    }
    
    // For other pages, check if the current path starts with the item path
    // This handles both exact matches and child routes
    return currentPath.startsWith(itemPath);
  };

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
            className={isItemActive(item.path) ? 'active' : ''}
          >
            <Link href={item.path} passHref legacyBehavior>
              <NavLink>{item.title}</NavLink>
            </Link>
          </NavItem>
        ))}
        {router.pathname === '/' && siteContent.navigation.additionalItems.map((item, index) => (
          <NavItem 
            key={`additional-${index}`}
            className={isItemActive(item.path) ? 'active' : ''}
          >
            <Link href={item.path} passHref legacyBehavior>
              <NavLink>{item.title}</NavLink>
            </Link>
          </NavItem>
        ))}
        
        {/* Social icons */}
        <SocialIcons isOpen={isOpen}>
          <SocialLink href={siteContent.contact.social.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink href={siteContent.contact.social.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
        </SocialIcons>
      </NavItems>
    </NavContainer>
  );
};

export default NavBar;
