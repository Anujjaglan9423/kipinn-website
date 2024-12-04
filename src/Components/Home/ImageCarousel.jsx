/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronBack, IoChevronForward, IoCloseOutline } from "react-icons/io5";
import tw from "tailwind-styled-components";

// Styled Components using tailwind-styled-components
const Overlay = tw.div`fixed inset-0 bg-black backdrop-blur-sm bg-opacity-20 flex justify-center items-center z-50 cursor-default addCommentModel`;
const ModalWrapper = tw.div`relative sm:w-[40vw] w-[80vw] bg-white rounded-xl`;
const CloseButton = tw.button`absolute top-3 right-3 text-2xl z-50 bg-white rounded-full p-2`;
const PrevArrowButton = tw.button`absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-800 bg-gray-100 rounded-full p-2 z-10`;
const NextArrowButton = tw.button`absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-800 bg-gray-100 rounded-full p-2 z-10`;
const ImageWrapper = tw.div`flex justify-center items-center h-[50vh] object-fill`;
const ThumbnailWrapper = tw.div`w-16 h-16 -ml-5`;
const ImageThumbnail = tw.img`w-full h-full object-cover rounded-lg transparent`;
const ImageModal = tw.img`w-full h-full bg-white object-contain rounded-xl`;

const CustomPrevArrow = (props) => {
    const { style, onClick } = props;
    return (
        <PrevArrowButton style={{ ...style }} onClick={onClick}>
            <IoChevronBack className="text-2xl" />
        </PrevArrowButton>
    );
};

const CustomNextArrow = (props) => {
    const { style, onClick } = props;
    return (
        <NextArrowButton style={{ ...style }} onClick={onClick}>
            <IoChevronForward className="text-2xl" />
        </NextArrowButton>
    );
};

function ImageCarousel({ setIsModalOpen, data }) {
    const getCurrentTarget = (e) => {
        const targetClass = Array.from(e.target.classList);
        if (targetClass.includes("addCommentModel")) {
            setIsModalOpen(false);
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: data?.images?.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        customPaging: function (i) {
            return (
                <ThumbnailWrapper>
                    <ImageThumbnail
                        src={data?.images[i]}
                        alt={`Thumbnail ${i + 1}`}
                    />
                </ThumbnailWrapper>
            );
        },
    };

    return (
        <Overlay onClick={getCurrentTarget}>
            <ModalWrapper>
                <CloseButton
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(false);
                    }}
                >
                    <IoCloseOutline className="text-black" />
                </CloseButton>
                <div>
                    <Slider {...sliderSettings} className="slick-dots-custom bg-white rounded-xl">
                        {data?.images?.map((img, index) => (
                            <div key={index}>
                                <ImageWrapper>
                                    <ImageModal src={img} alt={`Image ${index}`} />
                                </ImageWrapper>
                            </div>
                        ))}
                    </Slider>
                </div>
            </ModalWrapper>
        </Overlay>
    );
}

export default ImageCarousel;
