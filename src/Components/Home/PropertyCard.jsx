
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import ImageCarousel from "./ImageCarousel";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

// Styled Components using tailwind-styled-components
const CardWrapper = tw.div`bg-white border w-full overflow-hidden border border-sky-400 `;
const ImageContainer = tw.div`w-full h-[180px] object-cover`;
const CardDetails = tw.div`p-5`;
const CardHeader = tw.div`flex justify-between items-center w-full`;
const PropertyName = tw.div`font-semibold text-xl mb-3`;
const RentAmount = tw.div`text-xl`;
const TenantPreference = tw.div`flex justify-between gap-2 font-medium items-center w-full text-gray-600`;
const LocationText = tw.div`text-gray-600 flex justify-start items-center mt-3`;
const PreferenceTag = tw.div`font-medium text-sm px-2 rounded-full flex justify-center items-center gap-2 truncate text-white`;

function PropertyCard({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigation = useNavigate();

    function getPreferrence(data) {
        if (data == 1)
            return <PreferenceTag className="bg-blue-500">Boys</PreferenceTag>;
        else if (data == 2)
            return <PreferenceTag className="bg-pink-500">Girls</PreferenceTag>;
        else
            return <PreferenceTag className="bg-purple-500">Boys & Girls</PreferenceTag>;
    }

    return (
        <CardWrapper>
            <ImageContainer
                onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(true);
                }}
            >
                <img
                    src={data?.images[0]}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </ImageContainer>
            <CardDetails onClick={() => navigation(`/property/${data?.id}`)}>
                <CardHeader>
                    <PropertyName>{data?.name}</PropertyName>
                    <RentAmount>₹{data?.rent}</RentAmount>
                </CardHeader>

                <TenantPreference>{getPreferrence(data?.tenantPreference)}</TenantPreference>
                <LocationText>
                    <IoLocationOutline />
                    {data?.address}
                </LocationText>
            </CardDetails>

            {isModalOpen && <ImageCarousel setIsModalOpen={setIsModalOpen} data={data} />}
        </CardWrapper>
    );
}

export default PropertyCard;
