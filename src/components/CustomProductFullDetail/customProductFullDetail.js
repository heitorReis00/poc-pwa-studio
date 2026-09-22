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
    breadcrumbs,
    customAttributesDetails
}) => {
    const [increment, setIncrement] = useState(0);

    const [trocar, setTrocar] = useState('B');

    const mainImage = mediaGalleryEntries?.[0];

    const imageUrl = mainImage
        ? generateUrl(mainImage.file, 'image-product')(1000)
        : null;

    function handleClickAdd() {
        if (increment < 10) {
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
            <div className='py-20 mt-40 px-10 bg-gray-50 w-full flex flex-col justify-between lg_flex-row items-center'>
                <h1 className="text-indigo-950  font-semibold text-3xl">
                    Shop
                </h1>
                <div className="meu-breadcrumbs bg-yellow-400  items-center justify-center font-semibold py-3 px-6 flex text-center">
                    {breadcrumbs}
                </div>
            </div>
            <div className="lg_flex items-center py-10 justify-center gap-10">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={mainImage.label || productDetails.name}
                        className="w-full lg_max-w-[500px]"
                    />
                )}
                <div className="text-start w-full flex flex-col gap-5 ">
                    <div className=" p-6 w-full lg_min-w-[500px] ">
                        <div className="bg-gray-50 flex items-center justify-between">
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

                        {options}
                        <div className="flex mb-5 items-center font-semibold gap-5 py-5">
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
            <div className="flex flex-col w-full gap-2 lg_gap-5 lg_flex-row">
                <button
                    className={` ${
                        trocar === 'A'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-gray-200  text-gray-400'
                    } py-3 font-semibold px-6`}
                    onClick={() => setTrocar('A')}
                >
                    Description
                </button>
                <button
                    className={` ${
                        trocar === 'B'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-gray-200 text-gray-400'
                    } py-3 font-semibold px-6 `}
                    onClick={() => setTrocar('B')}
                >
                    Details
                </button>
            </div>

            <div className="mb-20 max-w-[1024px] font-normal lg_flex gap-10 text-gray-400 text-start">
                {trocar === 'A' && (
                    <div>
                        <h3 className="font-semibold text-indigo-950 text-lg">
                            Description
                        </h3>
                        <RichContent html={productDetails.description} />
                    </div>
                )}
                {trocar === 'B' && (
                    <div>
                        <h3 className="font-semibold text-indigo-950 text-lg">
                            Details
                        </h3>
                        <CustomAttributes
                            customAttributes={customAttributesDetails.list}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default CustomProductFullDetail;
