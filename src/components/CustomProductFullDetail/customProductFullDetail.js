import React from 'react';
import Price from '@magento/venia-ui/lib/components/Price';
import RichContent from '@magento/venia-ui/lib/components/RichContent/richContent';
import Carousel from '@magento/venia-ui/lib/components/ProductImageCarousel';
import { useState } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { generateUrl } from '@magento/peregrine/lib/util/imageUtils';
import CustomAttributes from '@magento/venia-ui/lib/components/ProductFullDetail/CustomAttributes';
const CustomProductFullDetail = ({
    productDetails,
    mediaGalleryEntries,
    options,
    customAttributesDetails
}) => {
    const [increment, setIncrement] = useState(0);

    const mainImage = mediaGalleryEntries?.[0];

    const imageUrl = mainImage
        ? generateUrl(mainImage.file, 'image-product')(1000)
        : null;

    function handleClickAdd() {
        if (increment < 11) {
            setIncrement(increment + 1);
        }
    }
    function handleClickSub() {
        if (increment > 0) {
            setIncrement(increment - 1);
        }
    }

    return (
        <section className=" px-5 text-center w-full flex flex-col items-center gap-5">
            <h1 className="text-indingo-950 pt-40 font-black text-2xl">Shop</h1>
            <button className="bg-yellow-400 px-6 py-3 font-extrabold flex gap-3">
                <span>Home</span>/<span>Shop</span>/<span>Starters</span>/
                <span>Straciella</span>
            </button>
            <div className="lg_flex items-center py-10 justify-center gap-10">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={mainImage.label || productDetails.name}
                        className="w-full lg_max-w-[500px]"
                    />
                )}
                <div className="text-start w-full flex flex-col gap-5 ">
                    <div className="bg-gray-100 p-6 w-full lg_min-w-[500px] ">
                        <h2 className="mb-3 font-extrabold text-indigo-950">
                            {productDetails.name}
                        </h2>
                        <div className="bg-yellow-400 text-center text-xl py-3 font-extrabold">
                            <Price
                                currencyCode={productDetails.price.currency}
                                value={productDetails.price.value}
                            />
                        </div>

                        {options}
                        <div className="flex mb-5 items-center font-extrabold gap-5 py-5">
                            <button
                                className="bg-yellow-400 w-6 h-6 flex items-center justify-center rounded-full"
                                onClick={handleClickSub}
                            >
                                -
                            </button>
                            <p>{increment}</p>
                            <button
                                className="bg-yellow-400 w-6 h-6 flex items-center justify-center rounded-full"
                                onClick={handleClickAdd}
                            >
                                +
                            </button>
                            <button className="bg-yellow-400 px-6 py-3 flex items-center gap-3">
                                <IoBagHandleOutline size={22} /> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-20 max-w-[1024px] font-extrabold lg_flex gap-10 text-gray-500 text-start">
                <div>
                    <h3 className="font-extrabold text-indigo-950 text-lg">
                        Description
                    </h3>
                    <RichContent html={productDetails.description} />
                </div>
                <div>
                    <h3 className="font-extrabold text-indigo-950 text-lg">
                        Details
                    </h3>
                    <CustomAttributes
                        customAttributes={customAttributesDetails.list}
                    />
                </div>
            </div>
        </section>
    );
};

export default CustomProductFullDetail;
