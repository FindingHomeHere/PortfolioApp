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

const routes = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/about',
    name: 'About',
  },
  {
    link: '/work',
    name: 'Work',
  },
  {
    link: '/contact',
    name: 'Contact',
  },
];

const Sidebar = ({ isOpen, toggle }) => {
  const routes = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/about',
      name: 'About',
    },
    {
      link: '/work',
      name: 'Work',
    },
    {
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
              <SideBarLink>
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
