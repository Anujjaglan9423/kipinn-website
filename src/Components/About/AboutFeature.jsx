import React from "react";
import tw from "tailwind-styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { BsCalendarEvent } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { FcVideoProjector } from "react-icons/fc";

// Styled Components
const Container = tw.div`w-full py-16 px-4 bg-white`;
const Content = tw.div`max-w-6xl mx-auto text-center`;
const Title = tw.h2`text-4xl md:text-5xl font-semibold text-gray-900 mb-4 font-jost`;
const Subtitle = tw.p`text-gray-600 mb-12 max-w-3xl mx-auto font-maven`;
const FeaturesGrid = tw.div`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`;
const FeatureCard = tw.div`p-10 border border-gray-200  transition-shadow duration-300`;
const IconWrapper = tw.div`text-4xl text-blue-500 mb-4 flex justify-center`;
const FeatureTitle = tw.h3`text-xl font-semibold text-blue-500 mb-3 font-maven`;
const FeatureDescription = tw.p`text-gray-600 text-sm font-maven`;

const features = [
    {
        icon: <BsCalendarEvent />,
        title: "EVENT ACCESS",
        description: "Lorem Ipsum is simply dummy text of the printing and huh typesetting industry."
    },
    {
        icon: <FaWifi />,
        title: "INTERNET",
        description: "Lorem Ipsum is simply dummy text of the printing and huh typesetting industry."
    },
    {
        icon: <MdMeetingRoom />,
        title: "MEETING ROOMS",
        description: "Lorem Ipsum is simply dummy text of the printing and huh typesetting industry."
    },
    {
        icon: <FcVideoProjector />,
        title: "HD PROJECTORS",
        description: "Lorem Ipsum is simply dummy text of the printing and huh typesetting industry."
    }
];

export default function AboutFeature() {
    return (
        <Container>
            <Content>

                <Title>Features That Make Us Stand Out</Title>

                <Subtitle>
                    We're redefining the way you find and rent homes. Our platform is packed with features
                    designed to simplify your search and enhance your rental experience.
                </Subtitle>
                <FeaturesGrid>
                    {features.map((feature, index) => (
                        <ScrollAnimation key={index} animateIn="swing" delay={index * 200}>
                            <FeatureCard>
                                <IconWrapper>{feature.icon}</IconWrapper>
                                <FeatureTitle>{feature.title}</FeatureTitle>
                                <FeatureDescription>{feature.description}</FeatureDescription>
                            </FeatureCard>
                        </ScrollAnimation>
                    ))}
                </FeaturesGrid>
            </Content>
        </Container>
    );
}

