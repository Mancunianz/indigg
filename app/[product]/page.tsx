import { ProductRoutes } from '@/src/commomTypes';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import { includes, map, some } from 'lodash';
import { Metadata } from '@nm/next';
import { products } from '@cc/constant.server';

const BrowseGames = dynamic(() => import('@c/productsPage/browseGames'));
const BrowseClans = dynamic(() => import('@c/productsPage/browseClans'));
const BrowseQuests = dynamic(() => import('@c/productsPage/browseQuests'));

export async function generateMetadata(
  param: ProductParams,
): Promise<Metadata> {
  const { params } = param;
  const { product } = params;
  checkProductAndRedirect(product);
  return { title: { default: product, template: `%s | ${product}` } };
}

const checkProductAndRedirect = (product: ProductRoutes) => {
  if (
    !some(products, (item) => {
      const productLowerCase = product.toLowerCase();
      const itemLowerCase = item.toLowerCase();
      const isInReqProductName = includes(productLowerCase, itemLowerCase);
      const isProduct = itemLowerCase === productLowerCase;
      if (isInReqProductName && !isProduct) {
        redirect(`/${itemLowerCase}`);
      }
      return itemLowerCase === productLowerCase;
    })
  ) {
    redirect('/');
  }
  return;
};

export interface ProductParams {
  params: {
    product: ProductRoutes;
  };
}

const Product = (param: ProductParams) => {
  const {
    params: { product },
  } = param;

  return (
    <>
      {product === 'games' ? (
        <BrowseGames />
      ) : product === 'clans' ? (
        <BrowseClans />
      ) : product === 'quests' ? (
        <BrowseQuests />
      ) : (
        redirect('/')
      )}
    </>
  );
};

export default Product;

export async function generateStaticParams() {
  return map(products, (product) => {
    return {
      product,
    };
  });
}