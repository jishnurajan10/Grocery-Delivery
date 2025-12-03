import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion } from 'motion/react';
import { ShoppingBasket, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { productsData, currency, addToCart, addToFavorite } = useContext(AppContext);
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Load product
  useEffect(() => {
    if (!productsData?.length) return;

    const foundProduct = productsData.find((item) => item._id == id);
    setProduct(foundProduct);

    if (foundProduct?.images?.length > 0) {
      setMainImage(foundProduct.images[0]);
    }
  }, [id, productsData]);

  // Load related products
  useEffect(() => {
    if (!product) return;

    const related = productsData.filter(
      (item) => item.category === product?.category
    );
    setRelatedProducts(related);
  }, [product, productsData]);

  // Scroll to top whenever a new product loads
  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return <p className="text-center py-12">Loading product...</p>;
  }

  return (
    <div className='py-12'>
      <div className='flex flex-col md:flex-row items-start mt-6 gap-6 justify-center'>

        {/* Images */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
          <div className="w-full max-w-2xl flex justify-center">
            <img
              src={`http://localhost:4000/uploads/${mainImage}`}
              className="w-1/2 rounded-lg"
              alt="Main product"
            />
          </div>

          <div className="grid grid-cols-4 gap-4 w-full max-w-2xl">
            {product.images?.map((img, index) => (
              <img
                src={`http://localhost:4000/uploads/${img}`}
                key={index}
                onClick={() => setMainImage(img)}
                className='thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80'
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h1 className="text-2xl font-semibold text-gray-800">
            {product.name}
          </h1>

          <div className="flex items-center space-x-4 mt-4">
            <h2 className="text-lg font-bold line-through text-gray-500">
              {currency}{product.price}
            </h2>
            <h2 className="text-lg font-bold text-gray-800">
              {currency}{product.offerPrice}
            </h2>
          </div>

          <p className="text-lg text-gray-600 font-medium my-2">
            {product.smallDesc}
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <motion.button
              onClick={() => addToCart(product)}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-8 py-3 bg-secondary text-white font-medium cursor-pointer hover:bg-primary transition-all ease-in-out duration-300"
            >
              <ShoppingBasket />
              Add to Cart
            </motion.button>

            <motion.button
              onClick={() => addToFavorite(product)}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-8 py-3 bg-secondary text-white font-medium cursor-pointer hover:bg-primary transition-all ease-in-out duration-300"
            >
              <Heart />
              Add to Wishlist
            </motion.button>
          </div>

          <p className="text-secondary text-xl font-semibold my-4">
            {product.category?.name || product.category}
          </p>

          <div className="border border-gray-200 rounded-lg mt-6">
            <h1 className="w-full bg-secondary text-white py-4 pl-3 text-2xl font-semibold">
              Description
            </h1>
            <p className='p-2'>{product.longDesc}</p>
          </div>
        </div>

      </div>

      <h1 className="mt-12 text-secondary font-extrabold text-3xl text-center">
        Related Products
      </h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {relatedProducts.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
