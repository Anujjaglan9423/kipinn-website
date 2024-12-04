import React from "react";
import tw from "tailwind-styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Images } from "../../Images";

const Container = tw.div`w-full py-16 px-4`;
const Content = tw.div`max-w-6xl mx-auto text-center`;
const SubTitle = tw.p`text-blue-400 text-lg font-semibold mb-4 font-maven`;
const Title = tw.h2`md:text-4xl text-2xl font-semibold uppercase text-center  group font-jost`;
const Description = tw.p`text-gray-600 max-w-3xl mx-auto mb-12 font-maven mt-4`;
const TestimonialCard = tw.div`px-8 py-6 mx-4 `;
const QuoteLeft = tw.div`absolute text-[120px] text-blue-300 font-serif top-0 left-0 leading-none`;
const QuoteRight = tw.div`absolute text-[120px] text-blue-300 font-serif bottom-0 right-0 leading-none`;
const TestimonialText = tw.p`text-gray-600 mb-6 relative z-10 font-maven`;
const ProfileContainer = tw.div`flex items-center justify-center gap-4`;
const ProfileImage = tw.img`w-16 h-16 rounded-full object-cover`;
const ProfileInfo = tw.div`text-left`;

const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    name: "Judy Curtis",
    role: "Freelancer",
    image: Images.UserLanding,
    nameColor: "text-blue-400"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    name: "Roger Burke",
    role: "Freelancer",
    image: Images.UserLanding,
    nameColor: "text-[#ff6b6b]"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    name: "Emma Johnson",
    role: "Designer",
    image: Images.UserLanding,
    nameColor: "text-green-500"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    name: "Michael Chen",
    role: "Developer",
    image: Images.UserLanding,
    nameColor: "text-purple-500"
  }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: () => (
      <div className="w-2 h-2 mx-1 bg-gray-300 rounded-full hover:bg-blue-400 transition-colors" />
    ),
    dotsClass: "slick-dots !flex !justify-center !items-center !gap-2 !relative !bottom-0 mt-8",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Container>
      <Content>
        <SubTitle>Customers Trust</SubTitle>
        <Title>
          What <span className="text-[#ff6b6b]">People Say</span> About Us
        </Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
        </Description>

        <Slider {...settings} className="bg-[#F9FDFF]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOnce={true} // Ensures the animation runs only once
                duration={1} // Animation duration in seconds
              >
                <div className="bg-white p-4">
                  {/* <QuoteLeft>"</QuoteLeft> */}
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <QuoteRight>"</QuoteRight>
                  <ProfileContainer>
                    <ProfileImage src={testimonial.image} alt={testimonial.name} />
                    <ProfileInfo>
                      <h4 className={`font-semibold font-maven text-lg ${testimonial.nameColor}`}>{testimonial.name}</h4>
                      <p className="text-gray-500 font-maven">{testimonial.role}</p>
                    </ProfileInfo>
                  </ProfileContainer>
                </div>
              </ScrollAnimation>
            </TestimonialCard>
          ))}
        </Slider>
      </Content>
    </Container>
  );
}

