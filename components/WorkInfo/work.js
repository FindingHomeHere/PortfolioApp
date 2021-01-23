import styled from 'styled-components';
import Image from 'next/image';

export const Background = styled.div`
  display: flex;
  min-height: 100vh;
  height: contain;
  padding: 8rem 0 4rem 0;
  justify-content: center;
  align-items: center;
  background-color: var(--background-dark);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  width: 80vw;
  min-height: contain;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  background: white;
  border-radius: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 1.5rem;
  width: 97%;
  text-align: center;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
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
  background: white;
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
  font-size: 1.5rem;
  padding: 1rem 6rem;
  border-radius: 1rem;
  background: white;
  cursor: pointer;
  color: var(--base-color-primary);
  outline: none;
  border: 1px solid var(--base-color-primary);
  &:hover {
    background: var(--base-color-primary);
    color: white;
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }
`;
