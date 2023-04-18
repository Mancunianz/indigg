import Overview from '@c/productsPage/detailsPage/overview';
import OverviewSlider from '@c/productsPage/detailsPage/overview/overviewSlider';
import { gameOverviewImages } from '@/src/store/product/game/detailPage';
import OverviewInfo from '@c/productsPage/detailsPage/overview/overviewInfo';
import ReviewSection from '@c/productsPage/detailsPage/overview/review';

const ProductDetailsPages = () => {
  return (
    <>
      <Overview />
      <OverviewSlider
        data={{
          images: gameOverviewImages,
        }}
      />
      <OverviewInfo />
      <ReviewSection />
    </>
  );
};

export default ProductDetailsPages;