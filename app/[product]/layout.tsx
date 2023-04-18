import { ReactNode } from 'react';
import LandingSection from '@cc/landingSection';
import { ProductRoutes } from '@/src/commomTypes';

interface ProductLayoutProps {
  children: ReactNode;
  params: {
    product: ProductRoutes;
  };
}

const ProductLayout = (props: ProductLayoutProps) => {
  const { children } = props;

  return (
    <>
      <LandingSection />
      {children}
    </>
  );
};

export default ProductLayout;