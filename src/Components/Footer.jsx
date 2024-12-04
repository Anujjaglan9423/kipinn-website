import React from "react";
import tw from "tailwind-styled-components";
import { HiHome } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { Images } from "../Images";
import { Link } from "react-router-dom";

const FooterContainer = tw.footer`w-full bg-[#1B1117] text-white py-16`;
const FooterContent = tw.div`max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`;
const Column = tw.div`space-y-6`;
// const Logo = tw.div`flex items-center space-x-2 text-xl font-bold`;
const Logo = tw.div`flex items-center space-x-2 text-xl font-bold`;
const Description = tw.p`text-gray-300 mb-8`;
const SocialLinks = tw.div`flex space-x-4`;
const SocialIcon = tw.a`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300`;
const Title = tw.h3`text-xl font-semibold mb-6`;
const ContactInfo = tw.div`space-y-4`;
const ContactItem = tw.div`flex items-center space-x-3 text-gray-300`;
const Links = tw.div`space-y-3`;
const Linkss = tw(Link)`block text-gray-300 hover:text-white transition-colors`;
const BottomBar = tw.div`max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400`;
const LogoImage = tw.img`h-16 w-auto`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <Column >
                    <Link to="/">
                        <Logo>
                            <HiHome className="w-8 h-8 text-[#ff6b6b]" />
                            <span>Book<span className="text-[#ff6b6b]">My</span>Ghar</span>
                            {/* <LogoImage src={Images.FooterLogo} alt="BookMyGhar Logo" /> */}
                        </Logo>
                    </Link>
                    <Description >
                        We provides a wide range of options from PGs to studio apartments to fully furnished flats. Have a look at our properties and choose for yourself.
                    </Description>
                    <SocialLinks>
                        <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="w-5 h-5" />
                        </SocialIcon>
                        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-5 h-5" />
                        </SocialIcon>
                        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="w-5 h-5" />
                        </SocialIcon>
                    </SocialLinks>
                </Column>

                <Column>
                    <Title>Get in Touch</Title>
                    <ContactInfo>
                        <ContactItem>
                            <HiLocationMarker className="w-5 h-5 flex-shrink-0" />
                            <span>D217 Sec 3, opposite Airoli Station, Airoli, Maharashtra 400708</span>
                        </ContactItem>
                        <ContactItem>
                            <HiMail className="w-5 h-5 flex-shrink-0" />
                            <a href="mailto:contact@bookmyghar.co.in" className="hover:text-white transition-colors">
                                contact@bookmyghar.co.in
                            </a>
                        </ContactItem>
                        <ContactItem>
                            <HiPhone className="w-5 h-5 flex-shrink-0" />
                            <a href="tel:+919004505514" className="hover:text-white transition-colors">
                                + 91-90045 05514
                            </a>
                        </ContactItem>
                    </ContactInfo>
                </Column>

                <Column>
                    <Title>Useful Links</Title>
                    <Links>
                        <Linkss to="/">Home</Linkss>
                        <Linkss to="/about-us">About</Linkss>
                        {/* <Linkss t0="/property/:id">Properties</Linkss> */}
                        {/* <Link href="/privacy-policy">Privacy Policy</Link> */}
                    </Links>
                </Column>
            </FooterContent>

            <BottomBar>
                <p>Copyright © 2024 Think Straight IT LLP. All Rights Reserved.</p>
                <div className="mt-4 md:mt-0">
                    <p>Powered by Think Straight IT LLP</p>
                </div>
            </BottomBar>
        </FooterContainer>
    );
}

