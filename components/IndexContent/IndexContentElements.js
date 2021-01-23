import styled from 'styled-components';
import Link from 'next/link';

import { DiReact, DiHtml5, DiCss3 } from 'react-icons/di';

import { SiJavascript } from 'react-icons/si';

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-dark);
`;

export const HeadingContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  width: 80vw;
  margin: 2rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
`;

export const HeadingContent = styled.h1`
  font-size: 4.5em;
  color: var(--base-color-primary);
  font-family: 'Lato', sans-serif;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-light);
  padding: 2rem 4rem;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  width: 80vw;
  margin: 2rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
`;

export const HeadingSection = styled.h2`
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  color: var(--base-color-primary);
`;

export const ContentSection = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 3rem;
  max-width: 800px;

  ul {
    list-style: none;
    justify-content: center;
  }
  li {
    padding: 0.6rem 0;
  }

  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const LanguageSection = styled.div`
  display: flex;
  max-width: 680px;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
  flex-wrap: wrap;
  @media screen and (max-width: 810px) {
    width: 380px;
  }
`;

// export const LanguageBlock = styled.`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   font-size: 3rem;
// `;

export const React = styled(DiReact)`
  font-size: 3.5rem;
  color: #61dbfb;
`;
export const Css = styled(DiCss3)`
  font-size: 3.5rem;
  color: #264de4;
`;
export const Js = styled(SiJavascript)`
  font-size: 3.5rem;
  color: #f0db4f;
  background-color: #323330;
  box-sizing: border-box;
`;
export const Html = styled(DiHtml5)`
  font-size: 3.5rem;
  color: #f16529;
`;

export const LanguageButton = styled.button`
  outline: none;
  border: none;
  margin: 0.4rem;
  border-radius: 1rem;
  background: #fff;
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  width: 140px;
  height: 200px;
  // cursor: pointer;
  transition: all 0.25s ease;
  // &:hover {
  //   transform: scale(1.2);
  // }
`;
export const LanguageName = styled.p`
  font-size: 1.6rem;
  // color: #fff;
  font-family: 'Open Sans', sans-serif;
`;
