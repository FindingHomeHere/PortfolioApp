import styled from 'styled-components';

import { DiReact, DiHtml5, DiCss3 } from 'react-icons/di';

import { SiJavascript, SiNextDotJs } from 'react-icons/si';

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-200);
  margin-bottom: -100px;

  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export const HeadingContainer = styled.section`
  display: flex;
  position: relative;
  top: -128px;
  align-items: flex-start;
  background-color: var(--grey-100);
  width: 1200px;
  border-radius: 1rem;
  border-top: var(--border-top);
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1200px) {
    width: 100vw;
    border-radius: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
  }
`;

export const HeadingContent = styled.h1`
  font-size: 54px;
  color: var(--primary-800);
  background-color: var(--grey-100);
  padding: 2rem 3rem;
  width: 1000px;
  margin: 0;
  font-family: 'Lato', sans-serif;
  @media screen and (max-width: 1200px) {
    font-size: 48px;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    font-size: 32px;
    padding: 1rem 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-100);
  padding: 0;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  margin: 2rem;
  border-radius: 1rem;
  border-top: var(--border-top-alt);
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 800px) {
    width: 100vw;
    border-radius: 0;
    margin: 0;
    height: 100%;
  }
`;

export const HeadingSection = styled.h2`
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  color: var(--primary-800);
  width: 800px;
  padding: 0 3rem;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const ContentSection = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: var(--primary-800);
  margin: 0;
  padding: 0 3rem;
  line-height: 1.5;

  ul {
    list-style: none;
    justify-content: center;
    padding: 0 12px;
  }
  li {
    padding: 12px 0;
  }

  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding: 1rem;
    height: 100%;
  }
`;

export const LanguageSection = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;
  background: var(--grey-100);
  @media screen and (max-width: 800px) {
    width: 380px;
  }
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;

export const Next = styled(SiNextDotJs)`
  font-size: 3.5rem;
  color: #000;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const React = styled(DiReact)`
  font-size: 3.5rem;
  color: #61dbfb;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const Css = styled(DiCss3)`
  font-size: 3.5rem;
  color: #264de4;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const Js = styled(SiJavascript)`
  font-size: 3.5rem;
  color: #f0db4f;
  background-color: #323330;
  box-sizing: border-box;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const Html = styled(DiHtml5)`
  font-size: 3.5rem;
  color: #f16529;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

export const LanguageButton = styled.button`
  outline: none;
  border: none;
  margin: 0.4rem;
  border-radius: 1rem;
  background: #fff;
  border-top: var(--border-top);
  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  width: 140px;
  height: 200px;
  // cursor: pointer;
  transition: all 0.25s ease;
  @media screen and (max-width: 800px) {
    width: 70px;
    height: 100px;
  }
`;
export const LanguageName = styled.p`
  font-size: 1.6rem;
  // color: #fff;
  font-family: 'Open Sans', sans-serif;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
