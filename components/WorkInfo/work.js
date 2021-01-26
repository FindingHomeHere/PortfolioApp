import styled from 'styled-components';
import Image from 'next/image';

export const Background = styled.div`
  display: flex;
  position: relative;
  min-height: 90vh;
  height: contain;
  padding: 8rem 0 2rem 0;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-300);

  @media screen and (max-width: 800px) {
    padding: 0;
    padding-bottom: 80px;
  }
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: var(--grey-100);
  background-image: var(--background-texture);
  border-top: var(--border-top);
  border-radius: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  width: 80vw;
  min-height: contain;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 800px) {
    top: 80px;
    width: 100%;
    border-radius: 0;
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  background: var(--grey-100);
  border-radius: 1rem;
  border-top: var(--border-top);
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 1.5rem;
  width: 97%;
  text-align: center;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  gap: 30px 30px;
  width: 97%;
  @media screen and (max-width: 800px) {
    grid-template-columns: auto;
  }
`;

export const WorkContainer = styled.div`
  background: white;
  border-radius: 1rem;
  border-top: var(--border-top-alt);
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  &:hover {
    transform: scale(1.05);

    img {
      opacity: 1;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

export const LinkTo = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const WorkItem = styled.h3`
  font-size: 1.1rem;
  padding: 0 2rem;
`;

export const WorkDescription = styled.p`
  padding: 0 2rem;
`;

export const WorkImage = styled(Image)`
  height: 18rem;
  width: 100%;
  opacity: 0.8;
  border-radius: 1rem 1rem 0 0;
`;

export const Contact = styled.h1`
  font-size: 2.5rem;
  background: var(--grey-100);
  border-top: var(--border-top);
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 0;
  padding: 1.5rem;
  width: 97%;
  text-align: center;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
`;

export const ContactBtn = styled.button`
  font-size: 24px;
  font-family: 'Open Sans', sans-serif;
  background: var(--primary-500);
  color: var(--primary-100);
  padding: 0.5rem 1rem;
  // margin-bottom: 32px;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  -webkit-box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15),
    inset 0 3px 2px hsla(256, 29%, 60%, 0.35);
  transition: all 0.25s ease;
  &:hover {
    color: var(--secondary-100);
    transform: scale(1.02);
    -webkit-box-shadow: 0 16px 1.5rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 16px 1.5rem rgba(0, 0, 0, 0.15);
  }
  &:active {
    background-color: var(--primary-600);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
