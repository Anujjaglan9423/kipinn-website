import { useState, useEffect } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { BiCabinet, BiWater } from "react-icons/bi";
import { BsHouseCheck } from "react-icons/bs";
import { CiGlass } from "react-icons/ci";
import { FaTv } from "react-icons/fa";
import { FaSquareParking } from "react-icons/fa6";
import {
  GiBunkBeds,
  GiElectric,
  GiPillow,
  GiShower,
  GiWashingMachine,
} from "react-icons/gi";
import { IoMdBed } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import {
  MdOutlineCleaningServices,
  MdOutlineKingBed,
  MdOutlineSecurity,
} from "react-icons/md";
import { PiFan } from "react-icons/pi";
import { RiFridgeLine, RiWifiLine } from "react-icons/ri";
import { TbAirConditioning, TbToolsKitchen } from "react-icons/tb";
import { useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import Config from "../Config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../Redux/action";
import Loading from "../Components/Loading";
import NotFoundModel from "../Components/NotFoundModel";
import { toast } from "react-toastify";
import UserDetailsModal from "../Components/UserDetailsModel";

const amenities = [
  {
    icons: <RiFridgeLine className="text-xl text-gray-500" />,
    data: "Fridge",
  },
  {
    icons: <GiShower className="text-xl text-gray-500" />,
    data: "Gyser",
  },
  {
    icons: <IoMdBed className="text-xl text-gray-500" />,
    data: "Bed with Storage",
  },
  {
    icons: <GiPillow className="text-xl text-gray-500" />,
    data: "Pillow",
  },
  {
    icons: <IoBedOutline className="text-xl text-gray-500" />,
    data: "Mattress",
  },
  {
    icons: <BiCabinet className="text-xl text-gray-500" />,
    data: "Cupboard with mirror",
  },
  {
    icons: <TbToolsKitchen className="text-xl text-gray-500" />,
    data: "Working Kitchen",
  },
  {
    icons: <CiGlass className="text-xl text-gray-500" />,
    data: "Water Purifier",
  },
  {
    icons: <FaSquareParking className="text-xl text-gray-500" />,
    data: "2 Wheeler Parking",
  },

  {
    icons: <MdOutlineCleaningServices className="text-xl text-gray-500" />,
    data: "Regular Cleaning",
  },

  {
    icons: <TbAirConditioning className="text-xl text-gray-500" />,
    data: "AC",
  },

  {
    icons: <RiWifiLine className="text-xl text-gray-500" />,
    data: "WiFi",
  },
  {
    icons: <GiWashingMachine className="text-xl text-gray-500" />,
    data: "Washing Machine",
  },
  {
    icons: <FaTv className="text-xl text-gray-500" />,
    data: "Television",
  },
  {
    icons: <MdOutlineSecurity className="text-xl text-gray-500" />,
    data: "24x7 Security",
  },
  {
    icons: <GiElectric className="text-xl text-gray-500" />,
    data: "Electricity Backup",
  },
  {
    icons: <BiWater className="text-xl text-gray-500" />,
    data: "Hot & Cold Water",
  },

  {
    icons: <PiFan className="text-xl text-gray-500" />,
    data: "Ceiling Fan",
  },
  {
    icons: <AiOutlineFire className="text-xl text-gray-500" />,
    data: "Fire Safety",
  },
];

const Container = tw.div`w-full h-full flex justify-center items-center`;
const ContentWrapper = tw.div`w-full md:pt-24 pt-10 h-auto flex flex-col justify-center items-start space-y-10 max-w-6xl md:mx-8 items-center mx-4`;
const ImageGrid = tw.div`w-full grid sm:grid-cols-4 gap-1 grid-cols-1`;
const Image = tw.img`w-full h-full object-cover aspect-square transition-all hover:scale-105 hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] cursor-pointer`;
const ContentSection = tw.div`flex justify-start items-between w-full lg:flex-nowrap flex-wrap`;
const Description = tw.div`flex justify-between w-full items-center flex-wrap`;
const PriceDetailsGrid = tw.div`grid gap-4 w-full grid-cols-2 sm:grid-cols-2 lg:grid-cols-4`;
const PriceCard = tw.div`bg-gray-200 rounded-xl border flex flex-col items-start justify-center sm:p-5 p-3`;
const AmenitiesGrid = tw.div`flex w-full flex-wrap gap-2`;
const AmenityCard = tw.div`flex gap-2 p-2`;
const BedStatsWrapper = tw.div`flex md:justify-start justify-start items-center gap-5 w-full flex-wrap`;
const BedCard = tw.div`flex justify-center items-center gap-5 w-full h-[125px] max-w-fit rounded-xl shadow-md`;
const IconWrapper = tw.div`bg-[#ff66585f] h-full flex justify-center items-center md:p-4 p-2 rounded-l-xl`;
const BedDetails = tw.div`flex justify-center items-start flex-col flex-wrap min-w-fit`;
const BedCount = tw.span`md:text-3xl text-2xl font-semibold`;
const BedLabel = tw.p`w-20 md:w-32 text-sm text-gray-600 pr-2`;

function PropertyDetail() {
  const { id } = useParams();
  const [userForm, setUserForm] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailFunction = async () => {
    if (!id) return;
    return await axios.get(`${Config.ApiUrl}property/${id}`);
  };

  const {
    data,
    error,
    refetch,
    isLoading: InitialLoading,
  } = useQuery(`getTenantDetail`, detailFunction, {
    enabled: true,
    onSuccess: (data) => {
      dispatch(setUserDetails(data));
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  console.log(data?.data?.data);
  //   const ImageArr = data?.data?.data?.images;
  const ImageArr = Array.isArray(data?.data?.data?.images)
    ? data?.data?.data?.images
    : [];
  const PropertyName = data?.data?.data?.name;
  const PropertyAddress = data?.data?.data?.address;
  const ClientId = data?.data?.data?.clientId;

  function delim(url) {
    return url.includes("?") ? "&" : "?";
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    data?.data?.data?.data?.address + data?.data?.data?.data?.streetAddress
  )}&output=embed`;

  const Appointment = async (values) => {
    return await axios.post(`${Config.ApiUrl}appointment`, values, {
      //   headers: {
      //     authorization: "Bearer" + " " + token,
      //     "Content-Type": "application/json",
      //   },
    });
  };

  const onAppointmentSuccess = (data) => {
    toast.success(data?.data?.msg || "Success");
    setUserForm(false);
  };

  const onAppointmentError = (data) => {
    toast.error(data?.response?.data?.msg || "Error");
  };

  const { isLoading: AppointmentLoading, mutate: postAppointment } =
    useMutation(Appointment, {
      onSuccess: onAppointmentSuccess,
      onError: onAppointmentError,
    });

  if (error) {
    return <NotFoundModel />;
  }
  return (
    <Container>
      {userForm && (
        <UserDetailsModal
          closeModal={setUserForm}
          ClientId={ClientId}
          postAppointment={postAppointment}
          AppointmentLoading={AppointmentLoading}
        />
      )}
      {InitialLoading ? (
        <Loading />
      ) : (
        <ContentWrapper>
          {/* PHOTO COLLAGE */}
          <ImageGrid>
            {/* MAIN IMAGE */}
            <div className="col-span-2 row-span-2">
              <Image src={ImageArr[0]} />
            </div>

            {/* SIDE PHOTO */}
            {ImageArr?.slice(1).map((photo, index) => (
              <div key={index} className="w-full h-full sm:grid hidden">
                <Image src={photo + delim(photo)} />
              </div>
            ))}
          </ImageGrid>

          <ContentSection>
            {/* CONTENT */}
            <div className="flex flex-col justify-center items-start space-y-10 pr-5 ">
              {/* DESCRIPTION */}
              <Description>
                <div>
                  <h1 className="text-xl font-semibold">{PropertyName}</h1>
                  <p className="text-lg font-light">{PropertyAddress}</p>
                </div>
                <button
                  className="bg-[#ff6758] text-white sm:p-2 py-2 px-1 rounded-lg mt-4 "
                  onClick={() => setUserForm(true)}
                >
                  Schedule Appointment
                </button>
              </Description>

              <div className="w-full border "></div>

              {/* PRICE DETAILS  */}
              <PriceDetailsGrid>
                <PriceCard>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-semibold w-full">
                    Security Deposit
                  </p>
                  <h1 className="text-sm sm:text-base lg:text-lg text-gray-600 w-full">
                    For this data
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-xl text-black font-semibold flex flex-wrap w-full">
                    ₹ {data?.data?.data?.security}/{" "}
                    <sub className="text-sm sm:text-base font-normal">
                      month
                    </sub>
                  </p>
                </PriceCard>

                {data?.data?.data?.roomType
                  ?.slice(0, 4)
                  ?.sort((a, b) => Number(a.type) - Number(b.type))
                  ?.map((item, key) => (
                    <PriceCard key={key}>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-semibold w-full">
                        {item.type == 1 && "Single Sharing"}
                        {item.type == 2 && "Double Sharing"}
                        {item.type == 3 && "Triple Sharing"}
                        {item.type == 4 && "3+ Sharing"}
                      </p>
                      <h1 className="text-sm sm:text-base lg:text-lg text-gray-600 w-full">
                        Starting from
                      </h1>
                      <p className="text-lg sm:text-xl lg:text-xl flex-wrap text-black font-semibold flex w-full">
                        ₹ {item?.rent} / month
                      </p>
                    </PriceCard>
                  ))}
              </PriceDetailsGrid>

              <div className="w-full border "></div>
              <BedStatsWrapper>
                {/* Total Beds */}
                <BedCard>
                  <IconWrapper>
                    <BsHouseCheck className="text-[#ff6758] text-5xl" />
                  </IconWrapper>
                  <BedDetails>
                    <BedCount>{data?.data?.data?.beds?.total}</BedCount>
                    <BedLabel>Total Beds</BedLabel>
                  </BedDetails>
                </BedCard>

                {/* Occupied Beds */}
                <BedCard>
                  <IconWrapper>
                    <GiBunkBeds className="text-[#ff6758] text-5xl" />
                  </IconWrapper>
                  <BedDetails>
                    <BedCount>{data?.data?.data?.beds?.occupied}</BedCount>
                    <BedLabel>Occupied Beds</BedLabel>
                  </BedDetails>
                </BedCard>

                {/* Vacant Beds */}
                <BedCard>
                  <IconWrapper>
                    <MdOutlineKingBed className="text-[#ff6758] text-5xl" />
                  </IconWrapper>
                  <BedDetails>
                    <BedCount>{data?.data?.data?.beds?.vacant}</BedCount>
                    <BedLabel>Vacant Beds</BedLabel>
                  </BedDetails>
                </BedCard>
              </BedStatsWrapper>
              <div className="w-full border "></div>
              {/* AMENITIES */}
              <AmenitiesGrid>
                {amenities.map((amenity, key) => (
                  <AmenityCard key={key}>
                    {amenity.icons}
                    <span className="text-sm text-gray-500">
                      {amenity.data}
                    </span>
                  </AmenityCard>
                ))}
              </AmenitiesGrid>
              <div className="w-full border "></div>

              {/* INFO */}
              <p className="w-auto font-light">
                Budget accommodation available in Airoli with below facilities-
                -Single/double/triple sharing -Washing machine -Fridge -Gyser
                -Bed with storage, pillow, mattress -Cupboard with mirror
                -Working kitchen -Water purifier -2 wheeler parking -No
                brokerage -Regular cleaning Address - Sec 3, Just opp to Airoli
                station, near Chai sutta bar Located in Airoli, Navi Mumbai
                <br /> Airoli Ghar is modern and spacious PG home is close to
                major educational commercial hubs in the area. This unisex PG
                offers all the comforts like AC, Wi-Fi etc. The PG has strict
                adherence to hygiene standards and offers single, double, triple
                rooms. Please contact in case you are interested or queries.
                Looking forward to serving you.
              </p>

              <div className="lg:w-full border "> </div>
            </div>
          </ContentSection>
          {/* GOOGLE MAP */}

          <div className="w-full flex flex-col gap-3 justify-center items-start">
            <h1 className="text-xl font-semibold">Where will you be</h1>

            <p className="text-lg font-light ">{PropertyAddress}</p>
            <div className="w-full  h-[250px]">
              <iframe
                title="google-map"
                className="w-full h-full border-0"
                src={mapSrc}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </ContentWrapper>
      )}
    </Container>
  );
}

export default PropertyDetail;
