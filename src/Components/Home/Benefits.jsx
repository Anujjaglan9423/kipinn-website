import tw from "tailwind-styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { Images } from "../../Images";

// Styled Components
const Container = tw.div`
  w-full flex justify-center items-center min-h-fit py-24 bg-[#1c1318]
`;

const ContentWrapper = tw.div`
  flex w-full max-w-6xl mx-auto items-center lg:flex-row flex-col
`;

const ImageSection = tw(ScrollAnimation)`
  lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-end lg:-mt-80 lg:block hidden
`;

const CircleWrapper = tw.div`
  absolute -top-20 scale-125 mt-10 -z-10
`;

const RelativeWrapper = tw.div`
  w-full relative h-auto
`;

const BorderImage = tw.img`
  object-cover lg:w-[60%] w-[80%] absolute lg:left-40 left-10
`;

const LandingImage = tw.img`
  rounded-full lg:w-[60%] w-[80%] object-cover absolute top-0 lg:left-40 left-10 p-2 hover:animate-[wiggle_1s_ease-in-out]
`;

const TextSection = tw(ScrollAnimation)`
  flex flex-col lg:w-1/2 w-full pt-5
`;

const TextHeader = tw.div`
  mb-6 text-center lg:text-start
`;

const SubTitle = tw.h3`
  text-xl text-white font-semibold font-maven mb-6
`;

const Title = tw.h2`
  text-3xl lg:text-4xl text-white font-bold leading-tight font-jost
`;

const Paragraph = tw.p`
  text-white mt-4 text-base lg:text-lg
`;

const BenefitsList = tw.div`
  space-y-4 mt-6 lg:mx-0 mx-4
`;

const BenefitItem = tw.div`
  p-4 font-maven text-lg lg:text-xl
  ${(props) => (props.highlight ? "bg-[#FCBF5B] text-black font-semibold" : "bg-[#392A33] text-white")}
`;

// Benefits Data
const benefits = [
    {
        id: 1,
        text: "Fully Furnished Accommodations",
        highlight: true,
    },
    {
        id: 2,
        text: "Hassle-free move-in and move-out procedures.",
        highlight: false,
    },
    {
        id: 3,
        text: "Reliable Wi-Fi for work, study, or entertainment.",
        highlight: false,
    },
    {
        id: 4,
        text: "CCTV surveillance and secure access systems.",
        highlight: false,
    },
    {
        id: 5,
        text: "Mobile apps for rent payments, maintenance requests.",
        highlight: false,
    },
];

// Component
function Benifits() {
    return (
        <Container>
            <ContentWrapper>
                {/* Image Section */}
                <ImageSection animateIn="fadeInLeftBig">
                    <RelativeWrapper>
                        {/* Dark Blue Circle */}
                        <CircleWrapper>
                            <svg
                                fill="#26aefd"
                                width="256px"
                                height="256px"
                                viewBox="0 0 24.00 24.00"
                                className="w-full h-full scale-100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier"></g>
                                <g id="SVGRepo_tracerCarrier"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                                </g>
                            </svg>
                        </CircleWrapper>
                        <div className="relative w-full h-full mt-5">
                            <BorderImage src={Images.BorderImage} alt="Border" />
                            <LandingImage src={Images.UserLanding} alt="User Landing" />
                        </div>
                    </RelativeWrapper>
                </ImageSection>

                {/* Text Section */}
                <TextSection animateIn="fadeInRightBig">
                    <TextHeader>
                        <SubTitle>Our benefits</SubTitle>
                        <Title>
                            Our <span className="text-blue-500">Coliving</span> That Are Designed With Your Business In Mind
                        </Title>
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s, when an unknown printer took.
                        </Paragraph>
                    </TextHeader>

                    {/* Benefits List */}
                    <BenefitsList>
                        {benefits.map((benefit) => (
                            <BenefitItem key={benefit.id} highlight={benefit.highlight}>
                                {benefit.text}
                            </BenefitItem>
                        ))}
                    </BenefitsList>
                </TextSection>
            </ContentWrapper>
        </Container>
    );
}

export default Benifits;
