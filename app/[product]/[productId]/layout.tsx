import ProductDetailsLayout, {
  ProductDetailsLayoutProps,
} from '@c/productsPage/detailsPage/layout';

const ProductDetailLayout = (props: ProductDetailsLayoutProps) => {
  const { children } = props;
  return <ProductDetailsLayout {...props}>{children}</ProductDetailsLayout>;
};

export default ProductDetailLayout;