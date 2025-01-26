import { ExploreNewAndPopularStyles, allProducts } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Product = {
  _id: string;
  title: string; // Changed from "name" to "title" to match the query
  description: string;
  price: number;
  priceWithoutDiscount?: number; // Optional, as it might not always be used
  badge?: string; // Optional
  inventory?: number; // Optional
  tags?: string[]; // Array of tags
  category?: {
    _id: string;
    title: string;
  }; // Nested category object
  imageUrl: string; // The URL for the image
};

export default async function Test({ params }: { params: { productId: string } }) {
  const { productId } = params;

  const products: Product[] = await sanityFetch({ query: allProducts });
  const style: Product[] = await sanityFetch({
    query: ExploreNewAndPopularStyles,
  });

  console.log(products)


  const product = products.find((product) => product._id == productId);

  console.log(product)
  
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="  w-full sm:w-1/2 lg:w-1/3 ">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
        <div className=" w-auto sm:w-1/2 flex  items-start flex-col gap-5 font-bold  ">
          <p></p>
          <span className="text-5xl">{product.title}</span>
          <span className="text-5xl">{product.tags}</span>
          <span className="text-5xl"></span>

          <div className="relative w-max">
            <Image
              src="/Group 51.png"
              alt="Shop Now"
              width={120}
              height={120}
              className=""
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
              {product.price}$ USD
            </span>
          </div>
          <p>{product.description}</p>
          <div className="w-max">
            <Image
              src="/Button.png"
              alt="Shop Now"
              width={120}
              height={120}
              className=""
            />
          </div>
        </div>
      </div>

      <div>
        <div className="my-24 mx-10 font-bold flex justify-between">
          <div>
            <p className="text-3xl">Featured Products</p>
          </div>
          <div>

            <Link href={`/products`}>
              <button
                type="submit"
                className="w-[30vw] sm:w-[7vw] border-b-2 border-black focus:outline-none focus:ring-0 text-black">
                View all
              </button>
              
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-nowrap sm:flex-row justify-center gap-12 mx-auto my-5 overflow-x-auto">
           
                {style.map((item) => (
                    <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 " key={item._id}>
                  <div>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                  </div>
                  <div>
                  <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm">Price: ${item.price}</p>
                <p className="text-sm">Stock: {item.inventory}</p>
                  <div>
                  <Link href={`/Single-Product/${item._id}`} className="text-blue-500 hover:text-blue-700 font-semibold underline">
                  Link to full Page
                  </Link>
                  </div>
              </div>
                  </div>
                   </div>
                ))}    
            </div>
        </div>
      </div>
    </div>
  );
}
