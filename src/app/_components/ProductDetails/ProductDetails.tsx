
"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProductImages from "./ProductImages";
import Details from "./Details";
import useProductDetails from "./useFetchProduct";

const ProductDetails = () => {
  const { productId } = useParams();
  const { chosenProduct, loading, error } = useProductDetails(productId as string);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!chosenProduct) return <p>No product found.</p>;

  return (
    <section className="container my-[100px]">
      <div className="flex justify-between mb-[100px] flex-wrap gp-3">
        <ul className=" flex gap-2">
          <li className="text-[#878787] hover:text-lis-hover-color duration-300">
            <Link href="/account">Account</Link>
          </li>
          <span className="text-[#878787]">/</span>
          <li className="text-[#878787] hover:text-lis-hover-color duration-300">
            Gaming
          </li>
          <span className="text-[#878787]">/</span>
          <li>{chosenProduct && chosenProduct.title}</li>
        </ul>
      </div>
      <div className="flex gap-7 flex-wrap lg:flex-nowrap">
        {chosenProduct && 
        <>
        <ProductImages chosenProduct={chosenProduct}/>
        <Details chosenProduct={chosenProduct}/>
        </>
        }
      </div>
    </section>
  );
};

export default ProductDetails;

