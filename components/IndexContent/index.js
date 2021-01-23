import {
  ContentCard,
  HeadingContainer,
  HeadingContent,
  ContentContainer,
  HeadingSection,
  ContentSection,
  LanguageSection,
  LanguageButton,
  Next,
  React,
  Css,
  Html,
  Js,
  LanguageName,
} from './IndexContentElements';

const IndexContent = () => (
  <>
    <ContentCard>
      <HeadingContainer>
        <HeadingContent>What I do</HeadingContent>
      </HeadingContainer>
      <ContentContainer>
        <HeadingSection>
          Full Stack JavaScript
        </HeadingSection>
        <ContentSection>
          Utilizing the latest technology to build lightning
          fast webpages, apps and stores. Including user
          authentication, security, Ecommerce, and other
          exciting features.
          <ul>
            <li>
              <strong>React.js:</strong> This lightweight,
              component based system was developed by
              Facebook, and is great for large, dynamic
              apps. Like social media sites and Ecommerce.
            </li>
            <li>
              <strong>JavaScript:</strong> This is the
              'brain' of nearly all modern websites. Without
              this wonderful language, the website you are
              viewing would be a blank screen.
            </li>
            <li>
              <strong>CSS:</strong> The style for every
              internet application.
            </li>
            <li>
              <strong>HTML:</strong> The 'Bare-bones'
              building block for all websites.
            </li>
          </ul>
        </ContentSection>
        <LanguageSection>
          <LanguageButton>
            <Next />
            <LanguageName>Next.js</LanguageName>
          </LanguageButton>
          <LanguageButton>
            <React />
            <LanguageName>React</LanguageName>
          </LanguageButton>
          <LanguageButton>
            <Js />
            <LanguageName>JavaScript</LanguageName>
          </LanguageButton>
          <LanguageButton>
            <Css />
            <LanguageName>CSS</LanguageName>
          </LanguageButton>
          <LanguageButton>
            <Html />
            <LanguageName>HTML</LanguageName>
          </LanguageButton>
        </LanguageSection>
      </ContentContainer>
    </ContentCard>
  </>
);

export default IndexContent;
