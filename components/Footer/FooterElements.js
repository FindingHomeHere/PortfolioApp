import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--primary-800);
  border-top: 2px solid var(--secondary-500);
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterCopy = styled.p`
  color: #fff;
  justify-self: start;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: var(--secondary-500);
  }
`;
