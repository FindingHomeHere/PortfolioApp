import AboutContent from '../components/AboutContent';
import AboutMe from '../components/AboutMe';
// import PageHero from '../components/AboutHero';
import Services from '../components/Services';

export default function About() {
  return (
    <>
      {/* <PageHero /> */}
      <AboutMe />
      <div>
        <AboutContent />
        <Services />
      </div>
    </>
  );
}
