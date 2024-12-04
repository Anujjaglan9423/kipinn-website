import React from "react";
import tw from "tailwind-styled-components";
import { Images } from "../Images";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NotFoundModel = () => {

    const navigate = useNavigate();

    return (
        <BgColor>
            <Container>
                <Main>
                    <Figure>
                        <img src={Images.NotFound} alt="Page not found" />
                        <Text>Sorry, the page you requested could not found </Text>

                    </Figure>

                </Main>
            </Container>
        </BgColor>
    );
};

const Container = tw.div`md:max-w-sm w-full mx-auto items-center`;
const Main = tw.div`flex flex-col items-center justify-center`;
const BgColor = tw.div`bg-white max-h-screen min-h-fit md:min-h-screen md:max-h-fit`;
const Figure = tw.div` mx-auto md:my-24 my-36`;
const Text = tw.p`text-center text-gray-500 text-sm`;
export default NotFoundModel;
