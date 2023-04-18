import LandingSection from '@cc/landingSection';
import FeaturedGames from '@c/landingPage/featuredGames';
import SpotlightGames from '@c/landingPage/spotlightGames';
import FeaturedClans from '@c/landingPage/featuredClans';
import FeaturedQuests from '@c/landingPage/featuredQuests';
import SpotlightClans from '@c/landingPage/spotlightClans';
import ExploreCatalog from '@c/landingPage/ExploreCatalog';
import Categorized from '@c/landingPage/categorized';

const Home = () => {
  return (
    <>
      <LandingSection />
      <FeaturedGames />
      <SpotlightGames />
      <FeaturedClans />
      <FeaturedQuests />
      <Categorized />
      <SpotlightClans />
      <ExploreCatalog />
    </>
  );
};

export default Home;