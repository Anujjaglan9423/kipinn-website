import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import Testimonials from "../Components/About/Testimonials";
import Benefits from "../Components/Home/Benefits";
import WorkSpace from "../Components/Home/WorkSpace";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import Config from "../Config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../Redux/action";
import NotFoundModel from "../Components/NotFoundModel";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailFunction = async () => {
    const clientId = 69;
    if (!clientId) return;
    return await axios.get(`${Config.ApiUrl}properties/${clientId}`);
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

  if (error) {
    return <NotFoundModel />;
  }
  return (
    <>
      <Hero />
      <WorkSpace data={data} loading={InitialLoading} />
      <Features />
      <Benefits />
      <Testimonials />
    </>
  );
};

export default Home;
