import React from "react";
import tw from "tailwind-styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import ContactForm from "../Components/Contact/ContactForm";

// Styled Components
const Container = tw.div`w-full min-h-screen bg-[#F7FDFF]`;
const Hero = tw.div`relative h-[270px] flex items-center justify-center bg-gray-900`;
const HeroOverlay = tw.div`absolute inset-0 bg-black/50`;
const HeroTitle = tw.h1`text-white text-4xl font-semibold z-10 font-jost `;

export default function ContactUs() {
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
        <HeroTitle>GET IN TOUCH</HeroTitle>
        {/* </ScrollAnimation> */}
      </Hero>
      <ContactForm />
    </Container>
  );
}
