import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { HiMenu, HiX } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Nav = tw.nav`fixed top-0 left-0 right-0 bg-white shadow-sm z-50`;
const NavContainer = tw.div`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`;
const NavContent = tw.div`flex justify-between items-center h-16`;
const LogoContainer = tw.div`flex items-center`;
const Logo = tw.div`flex items-center space-x-2 text-xl font-bold`;
const NavLinks = tw.div`hidden md:flex md:items-center md:space-x-8`;
const NavLink = tw(Link)`text-gray-600 hover:text-gray-900 transition-colors`;
const CallButton = tw(Link)`hidden md:block bg-[#ff6b6b] text-white px-6 py-2 rounded-md hover:bg-[#ff5252] transition-colors`;
const MobileMenuButton = tw.button`md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100`;
const MobileMenu = tw.div`md:hidden`;
const MobileNavLinks = tw.div`px-2 pt-2 pb-3 space-y-1 sm:px-3`;
const MobileNavLink = tw(Link)`block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50`;
const MobileCallButton = tw(Link)`w-full bg-[#ff6b6b] text-white px-6 py-2 rounded-md hover:bg-[#ff5252] transition-colors mt-4`;

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Nav>
            <NavContainer>
                <NavContent>
                    <LogoContainer>
                        <Link to="/">
                            <Logo>
                                <HiHome className="w-8 h-8 text-[#ff6b6b]" />
                                <span>Book<span className="text-[#ff6b6b]">My</span>Ghar</span>
                            </Logo>
                        </Link>
                    </LogoContainer>

                    <NavLinks>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about-us">About Us</NavLink>
                        {/* <NavLink to="/spaces">Spaces</NavLink> */}
                        {/* <NavLink to="/contact-us">Contact Us</NavLink> */}
                        <CallButton to="/contact-us">Contact Us</CallButton>
                    </NavLinks>

                    <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? (
                            <HiX className="w-6 h-6" />
                        ) : (
                            <HiMenu className="w-6 h-6" />
                        )}
                    </MobileMenuButton>
                </NavContent>

                {isMobileMenuOpen && (
                    <MobileMenu>
                        <MobileNavLinks>
                            <MobileNavLink to="/">Home</MobileNavLink>
                            <MobileNavLink to="/about-us">About Us</MobileNavLink>
                            {/* <MobileNavLink to="/spaces">Spaces</MobileNavLink> */}
                            {/* <MobileNavLink to="/contact">Contact Us</MobileNavLink> */}
                            <MobileCallButton to="/contact-us">Contact Us</MobileCallButton>
                        </MobileNavLinks>
                    </MobileMenu>
                )}
            </NavContainer>
        </Nav>
    );
}

// import React, { useState } from "react";
// import tw from "tailwind-styled-components";
// import { HiMenu, HiX } from "react-icons/hi";
// import { HiHome } from "react-icons/hi2";
// import { Images } from "../Images";

// const Nav = tw.nav`fixed top-0 left-0 right-0 bg-white shadow-sm z-50`;
// const NavContainer = tw.div`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`;
// const NavContent = tw.div`flex justify-between items-center h-16`;
// const LogoContainer = tw.div`flex items-center`;
// const Logo = tw.div`flex items-center space-x-2 text-xl font-bold`;
// const LogoImage = tw.img`h-16 w-auto`;
// const NavLinks = tw.div`hidden md:flex md:items-center md:space-x-8`;
// const NavLink = tw.a`text-gray-600 hover:text-gray-900 transition-colors`;
// const CallButton = tw.button`hidden md:block bg-[#ff6b6b] text-white px-6 py-2 rounded-md hover:bg-[#ff5252] transition-colors`;
// const MobileMenuButton = tw.button`md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100`;
// const MobileMenu = tw.div`md:hidden`;
// const MobileNavLinks = tw.div`px-2 pt-2 pb-3 space-y-1 sm:px-3`;
// const MobileNavLink = tw.a`block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50`;
// const MobileCallButton = tw.button`w-full bg-[#ff6b6b] text-white px-6 py-2 rounded-md hover:bg-[#ff5252] transition-colors mt-4`;

// export default function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <Nav>
//             <NavContainer>
//                 <NavContent>
//                     <LogoContainer>
//                         <Logo>
//                             {/* Replace text with an image */}
//                             <LogoImage src={Images.Logo} alt="BookMyGhar Logo" />
//                         </Logo>
//                     </LogoContainer>

//                     <NavLinks>
//                         <NavLink href="/">Home</NavLink>
//                         <NavLink href="/about-us">About Us</NavLink>
//                         <NavLink href="/spaces">Spaces</NavLink>
//                         <NavLink href="/contact-us">Contact Us</NavLink>
//                         <CallButton>Call Us</CallButton>
//                     </NavLinks>

//                     <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                         {isMobileMenuOpen ? (
//                             <HiX className="w-6 h-6" />
//                         ) : (
//                             <HiMenu className="w-6 h-6" />
//                         )}
//                     </MobileMenuButton>
//                 </NavContent>

//                 {isMobileMenuOpen && (
//                     <MobileMenu>
//                         <MobileNavLinks>
//                             <MobileNavLink href="/">Home</MobileNavLink>
//                             <MobileNavLink href="/about">About Us</MobileNavLink>
//                             <MobileNavLink href="/spaces">Spaces</MobileNavLink>
//                             <MobileNavLink href="/contact">Contact Us</MobileNavLink>
//                             <MobileCallButton>Call Us</MobileCallButton>
//                         </MobileNavLinks>
//                     </MobileMenu>
//                 )}
//             </NavContainer>
//         </Nav>
//     );
// }
