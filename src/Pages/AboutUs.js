import React from "react";
import tw from "tailwind-styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Images } from "../Images";
import AboutFeature from "../Components/About/AboutFeature";
import Testimonials from "../Components/About/Testimonials";

// Styled Components
const Container = tw.div`w-full min-h-screen`;
const Hero = tw.div`relative h-[270px] flex items-center justify-center bg-gray-900`;
const HeroOverlay = tw.div`absolute inset-0 bg-black/50`;
const HeroTitle = tw.h1`text-white text-4xl font-semibold z-10 font-jost `;
const Content = tw.div`max-w-6xl mx-auto px-4 xl:-mt-52 py-16 xl:py-0`;
const AboutSection = tw.div`grid xl:grid-cols-2 gap-12 items-center`;
const AboutContent = tw.div`space-y-6`;
const Title = tw.h2`text-3xl font-semibold font-jost `;
const Highlight = tw.span`text-[#ff6b6b]`;
const FeatureList = tw.ul`space-y-4`;
const FeatureItem = tw.li`flex items-center space-x-2 text-gray-600 font-maven`;
const ContactButton = tw.button`bg-[#ff6b6b] text-white px-8 py-3 rounded-md hover:bg-[#ff5252] transition duration-300 font-jost font-medium`;

export default function AboutUs() {
  return (
    <Container>
      <Hero
        style={{
          backgroundImage: `url('../../Image/AboutK.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HeroOverlay />
        {/* <ScrollAnimation animateIn="animate__fadeIn"> */}
        <HeroTitle>ABOUT US</HeroTitle>
        {/* </ScrollAnimation> */}
      </Hero>

      <Content>
        <AboutSection>
          <ScrollAnimation animateIn="animate__slideInLeft">
            <AboutContent>
              <div className="text-[#40bfff] font-maven font-semibold">
                About Us
              </div>
              <Title>
                YOUR TRUSTED PARTNER IN FINDING THE{" "}
                <Highlight>PERFECT HOME</Highlight>
              </Title>
              <p className="text-gray-600 font-maven">
                Welcome to <strong>Ghar</strong>, your one-stop destination for
                hassle-free living in the bustling suburb of Airoli. We
                specialize in offering fully-furnished homes and shared
                accommodations that blend comfort, affordability, and community
                living.
              </p>
              <FeatureList>
                <FeatureItem>
                  <svg
                    className="w-5 h-5 text-[#40bfff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Fully Furnished Spaces: Move in without the hassle of
                    setting up your home.
                  </span>
                </FeatureItem>
                <FeatureItem>
                  <svg
                    className="w-5 h-5 text-[#40bfff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Prime Locations: Stay close to workplaces, schools, and
                    entertainment hubs.
                  </span>
                </FeatureItem>
                <FeatureItem>
                  <svg
                    className="w-5 h-5 text-[#40bfff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Flexible Options: Private rooms, shared spaces.</span>
                </FeatureItem>
                <FeatureItem>
                  <svg
                    className="w-5 h-5 text-[#40bfff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Affordable Pricing: Quality living that fits your budget.
                  </span>
                </FeatureItem>
              </FeatureList>
              <ScrollAnimation animateIn="animate__fadeIn" delay={500}>
                <ContactButton>Contact Us</ContactButton>
              </ScrollAnimation>
            </AboutContent>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="animate__slideInRight"
            className="xl:block hidden"
          >
            <div className="relative">
              {/* <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#40bfff] rounded-full opacity-10" /> */}
              <div className="relative right-28 top-60">
                <svg
                  fill="#26aefd"
                  width="150px"
                  height="150px"
                  viewBox="0 0 24.00 24.00"
                  className="w-full h-full scale-75"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier"></g>
                  <g id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                  </g>
                </svg>
              </div>
              <div className="relative xl:-top-20 xl:left-20">
                <img
                  src={Images.BorderImage}
                  alt="Border"
                  width={500}
                  height={500}
                  className="object-cover md:w-[70%]"
                />
                <img
                  src={Images.UserLanding}
                  alt="User Landing"
                  width={500}
                  height={500}
                  className="rounded-full md:w-[70%] object-cover absolute sm:top-5 md:top-0 lg:top-0 xl:top-0 xl:left-0 top-0 2xl:top-5 p-2 hover:animate-[wiggle_1s_ease-in-out]"
                />
              </div>
              <div className="relative -left-28 -top-20">
                <img
                  src={Images.LandingPageTwo}
                  alt=""
                  className="rounded-full object-cover p-2 hover:animate-[wiggle_1s_ease-in-out]"
                />
              </div>
            </div>
          </ScrollAnimation>
        </AboutSection>
      </Content>
      <AboutFeature />
      <Testimonials />
    </Container>
  );
}
