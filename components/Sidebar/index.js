import Link from 'next/link';

import { FaGithub } from 'react-icons/fa';
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBarMenu,
  SideBarLink,
  SideBarRoute,
  SideBarBackground,
  SocialIcons,
  SocialIconLink,
  SocialLabel,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const routes = [
    {
      id: 1,
      link: '/',
      name: 'Home',
    },
    {
      id: 2,
      link: '/pricing',
      name: 'Pricing',
    },
    {
      id: 3,
      link: '/contact',
      name: 'Contact',
    },
  ];

  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
        <SideBarMenu>
          {routes.map((el) => {
            return (
              <SideBarLink key={el.id}>
                <Link href={el.link}>
                  <SideBarRoute onClick={toggle}>
                    {el.name}
                  </SideBarRoute>
                </Link>
              </SideBarLink>
            );
          })}
        </SideBarMenu>
        <SocialIcons>
          <SocialIconLink
            href="https://github.com/FindingHomeHere"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
            <SocialLabel>Github</SocialLabel>
          </SocialIconLink>
        </SocialIcons>
      </SideBarContainer>
      <SideBarBackground isOpen={isOpen} onClick={toggle} />
    </>
  );
};

export default Sidebar;
