import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const SideBarContainer = styled.div`
  width: 30%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    var(--base-color-primary),
    rgba(12, 33, 61, 0.6)
  );
  backdrop-filter: blur(20px);
  border-left: 2px solid #c7be5d;
  z-index: 999;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  @media screen and (max-width: 800px) {
    width: 100%;
    border: none;
  }
`;

export const CloseIcon = styled(IoClose)`
  color: white;
  &:hover {
    color: #c7be5d;
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const SideBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const SideBarLink = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #c7be5d;
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBarRoute = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: 0.2s ease-in-out;
    color: #c7be5d;
  }
`;

export const SideBarBackground = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: ${({ isOpen }) => (isOpen ? '400' : '-400')};
  cursor: pointer;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 4.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:hover {
    p {
      color: #c7be5d;
    }
    svg {
      color: #c7be5d;
    }
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 2rem;
`;

export const SocialLabel = styled.p`
  color: #fff;
  margin: 0;
  font-size: 16px;
`;
