import { useEffect, useState } from "react";
import GlobalApi from "@/app/_utiliz/GlobalApi";
import Product from "@/interfaces";

const useProductDetails = (productId: string | undefined) => {
  const [chosenProduct, setChosenProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const getProdcutByAsin = async (amazon_domain: string, asin: string) => {
      try {
        setLoading(true);
        const resp = await GlobalApi.getProdcutByAsin(amazon_domain, asin);
        setChosenProduct(resp.data.product);
      } catch (err) {
        setError(`Failed to fetch product.${err}`);
      } finally {
        setLoading(false);
      }
    };

    const getproductsBuLangAndSearch = (productId: string) => {
      const pathname = window.location.pathname;
      if (pathname === "/it") {
        getProdcutByAsin("amazon.it", productId);
      } else if (pathname === "/fr") {
        getProdcutByAsin("amazon.fr", productId);
      } else {
        getProdcutByAsin("amazon.com", productId);
      }
    };

    getproductsBuLangAndSearch(productId);
  }, [productId]);

  return { chosenProduct, loading, error };
};

export default useProductDetails;
