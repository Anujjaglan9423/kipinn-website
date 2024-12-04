import tw from "tailwind-styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { Images } from "../../Images";

// Styled Components
const Container = tw.div`
  max-w-6xl mx-auto py-24 w-full flex items-start justify-center relative flex-wrap
`;

const AbsoluteSVGWrapper = tw.div`
  absolute  hidden lg:block xl:-left-44 top-12 left-20 scale-[75%] lg:scale-[150%]
`;

const ContentWrapper = tw.div`
  w-full flex justify-center items-center space-x-2 md:flex-row flex-col mx-4 lg:mx-0
`;

const LeftContent = tw(ScrollAnimation)`
  animate-fadeInLeft lg:w-1/2 w-full flex flex-col mt-10 md:mt-28
`;

const Heading = tw.h1`
  xl:text-[64px] leading-[1.1] lg:text-5xl text-2xl font-semibold uppercase text-center lg:text-start group font-jost
`;

const HighlightedText = tw.span`
  text-[#ff6759] group-hover:text-[#27adfd] transition-colors duration-1000
`;

const Paragraph = tw.p`
  text-center lg:text-start text-[#60565C] font-maven pt-5 md:pr-[75px]
`;

const StatsWrapper = tw.div`
  flex justify-center items-center lg:justify-start w-full lg:pt-14
`;

const Stat = tw.span`
  p-4 text-black text-lg text-center
`;

const StatValue = tw.span`
  text-3xl font-semibold font-jost
`;

const StatLabel = tw.span`
  text-gray-600 font-maven text-base
`;

const RightContent = tw(ScrollAnimation)`
  animate-fadeInRight md:w-1/2 w-full flex flex-col justify-center items-center lg:block hidden
`;

const ImageWrapper = tw.div`
  w-full relative h-auto xl:ml-24 mt-28
`;

const CircleSVGWrapper = tw.div`
  absolute -top-24 right-38 scale-150 -z-10
`;

const StyledImage = tw.img`
  object-cover top-0 left-0 md:w-[60%]
`;

const FloatingImage = tw.img`
  rounded-full md:w-[60%] object-cover absolute sm:top-5 md:top-0 lg:top-0 xl:top-0 xl:left-0 top-0 2xl:top-5 p-2 hover:animate-[wiggle_1s_ease-in-out]
`;

const SideInfoWrapper = tw.div`
  absolute sm:block hidden bottom-10 sm:top-[16%]  md:right-[24%] sm:right-10 flex flex-col items-end space-y-4 w-[25%]
`;

const InfoBox = tw.div`
  sm:w-full w-1/3 flex bg-white px-2 py-4 shadow-2xl gap-2
`;

const InfoValue = tw.span`
  text-4xl text-[#ff6759] font-semibold font-jost
`;

const InfoLabel = tw.span`
  text-sm font-maven
`;

const SecondaryImageWrapper = tw.div`
  w-full relative self-start
`;

const SecondaryImage = tw.img`
  rounded-full object-cover absolute -top-20 xl:-left-40 left-4 p-2 hover:animate-[wiggle_1s_ease-in-out]
`;

// Component
function Hero() {
  return (
    <Container>
      <AbsoluteSVGWrapper>
        <svg
          fill="#f0f9ff"
          width="256px"
          height="256px"
          viewBox="0 0 24.00 24.00"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#f0f9ff"
        >
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
        </svg>
      </AbsoluteSVGWrapper>

      <ContentWrapper>
        {/* LEFT CONTENT */}
        <LeftContent>
          <Heading>
            Affordable <br />
            <HighlightedText>Co-Living</HighlightedText> Unforgettable
            Connections.
          </Heading>
          <Paragraph>
            Experience flexible, convenient, and affordable co-living homes
            designed for your lifestyle!
          </Paragraph>
          <StatsWrapper>
            <Stat className="border-0 border-r  border-black">
              <StatValue>1K</StatValue> <br />
              <StatLabel>Active users</StatLabel>
            </Stat>

            <Stat>
              <StatValue>4.9</StatValue> <br />
              <StatLabel>Average Rating</StatLabel>
            </Stat>
          </StatsWrapper>
        </LeftContent>

        {/* RIGHT CONTENT */}
        <RightContent>
          <ImageWrapper>
            <CircleSVGWrapper>
              <svg
                fill="#26aefd"
                width="256px"
                height="256px"
                viewBox="0 0 24.00 24.00"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
              </svg>
            </CircleSVGWrapper>
            <StyledImage src={Images.BorderImage} alt="Border Image" />
            <FloatingImage src={Images.UserLanding} alt="User Landing" />
            <SideInfoWrapper>
              {[
                { value: 90, label: "Rooms Available" },
                { value: 10, label: "Total Properties" },
                { value: 75, label: "Total Tenants" },
              ].map((item, index) => (
                <InfoBox key={index}>
                  <InfoValue>{item.value}</InfoValue>
                  <InfoLabel>{item.label}</InfoLabel>
                </InfoBox>
              ))}
            </SideInfoWrapper>
          </ImageWrapper>

          <SecondaryImageWrapper>
            <SecondaryImage src={Images.LandingPageTwo} alt="Landing Page Two" />
          </SecondaryImageWrapper>
        </RightContent>
      </ContentWrapper>
    </Container>
  );
}

export default Hero;
