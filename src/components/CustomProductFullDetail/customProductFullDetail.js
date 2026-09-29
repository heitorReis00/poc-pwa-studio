import React, { useState } from 'react';
import { Form } from 'informed';
import Price from '@magento/venia-ui/lib/components/Price';
import RichContent from '@magento/venia-ui/lib/components/RichContent/richContent';
import QuantityStepper from '@magento/venia-ui/lib/components/QuantityStepper';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { generateUrl } from '@magento/peregrine/lib/util/imageUtils';

const CustomProductFullDetail = ({
    productDetails,
    mediaGalleryEntries,
    options,
    breadcrumbs,
    handleAddToCart,
    isAddToCartDisabled,
    errors
}) => {

    const [trocar, setTrocar] = useState('A');

    const mainImage = mediaGalleryEntries?.[0];

    const imageUrl = mainImage
        ? generateUrl(mainImage.file, 'image-product')(1000)
        : null;

    

    return (
        <section className="flex flex-col gap-15 lg_px-0 px-5 mx-auto max-w-[1220px]">
            <div className=" mb-20 w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] mt-40 bg-gray-50 flex items-center justify-center">
                <div className=" py-20 max-w-[1220px]  w-full flex flex-col items-center lg_justify-between lg_flex-row">
                    <h1 className="text-indigo-950  font-semibold text-3xl">
                        Shop
                    </h1>
                    <div className="meu-breadcrumbs bg-yellow-400  items-center justify-center font-semibold py-3 px-6 flex text-center">
                        {breadcrumbs}
                    </div>
                </div>
            </div>
            <div className="lg_flex items-center py-10 justify-center gap-10">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={mainImage.label || productDetails.name}
                        className="w-full lg_max-w-[550px]"
                    />
                )}
                <div className="text-start w-full flex flex-col gap-5 ">
                    <div className=" w-full lg_min-w-[500px] ">
                        <div className="bg-gray-50 w-full flex items-center justify-between">
                            <h2 className="ml-6 mr-10 font-semibold text-indigo-950">
                                {productDetails.name}
                            </h2>
                            <div className="bg-yellow-400 p-5 text-center text-xl font-semibold">
                                <Price
                                    currencyCode={productDetails.price.currency}
                                    value={productDetails.price.value}
                                    classes={{
                                        currency: 'text-sm'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="text-gray-400 my-5">
                            <RichContent html={productDetails.description} />
                        </div>

                        {options}

                        <ul className='lg_flex'>
                            <li className="flex flex-col gap-3">
                                <div className="numero-item text-yellow-500 text-xl">
                                    01
                                </div>
                                <h3 className="font-semibold">
                                    Add to the cart and place an order
                                </h3>
                                <p className="text-sm text-gray-400 ">
                                    Porro comirton pera nemo veniam
                                </p>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="numero-item text-yellow-500 text-xl">
                                    02
                                </div>
                                <h3 className="font-semibold">
                                    Enter your phone number and address
                                </h3>
                                <p className="text-sm text-gray-400 ">
                                    Eligendi adipisci numquam.
                                </p>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="numero-item text-yellow-500 text-xl">
                                    03
                                </div>
                                <h3 className="font-semibold">
                                    Enjoy your favorite food at home!
                                </h3>
                                <p className="text-sm text-gray-400 ">
                                    Nnecessitatibus praesentium
                                </p>
                            </li>
                        </ul>

                       <Form onSubmit={handleAddToCart} className="flex gap-3 font-semibold my-5">
        {/* todo o layout */}
        <div className='layout-increment'>
            <QuantityStepper min={1} message={errors?.get('quantity')} />
        </div>
        <button className='bg-yellow-400 py-3 px-6 flex items-center gap-3 justify-center' type="submit" disabled={isAddToCartDisabled}> <HiOutlineShoppingBag size={22} /> Add to Cart</button>
    </Form>

                        
                    </div>
                </div>
            </div>
            <div className="flex mt-20 flex-col mb-5 w-full gap-2 lg_gap-5 lg_flex-row">
                <button
                    className={` ${
                        trocar === 'A'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-gray-200  text-gray-400'
                    } py-3 font-semibold px-6`}
                    onClick={() => setTrocar('A')}
                >
                    Ingredients
                </button>
                <button
                    className={` ${
                        trocar === 'B'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-gray-200 text-gray-400'
                    } py-3 font-semibold px-6 `}
                    onClick={() => setTrocar('B')}
                >
                    Description
                </button>
                <button
                    className={` ${
                        trocar === 'C'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-gray-200 text-gray-400'
                    } py-3 font-semibold px-6 `}
                    onClick={() => setTrocar('C')}
                >
                    Reviews
                </button>
            </div>

        </section>
    );
};

export default CustomProductFullDetail;
