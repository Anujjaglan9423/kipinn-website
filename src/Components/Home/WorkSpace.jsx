import tw from "tailwind-styled-components"
import PropertyCard from "./PropertyCard"
import Loading from "../Loading"

export const Container = tw.div`flex flex-col items-center justify-center max-w-6xl mx-auto px-4 pt-16 text-center `
export const Subtitle = tw.span`text-blue-500 font-maven mb-6 font-semibold`
export const Title = tw.h1`md:text-4xl text-2xl font-semibold uppercase text-center  group font-jost`
export const Highlight = tw.span`text-[#ff6b6b]`
export const Description = tw.p`text-gray-600 mb-12 max-w-3xl mx-auto font-maven mt-4`
export const GridContainer = tw.div`grid md:mx-40 py-4 px-4 md:py-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  sm:gap-10   items-center`
const WorkSpace = (data, loading) => {
  // console.log(data?.data?.data?.data)
  const propData = data?.data?.data?.data || []
  return (
    <div className="bg-[#F6FCFF]">
      <Container>
        <Subtitle>Coliving spaces</Subtitle>
        <Title>
          Building A{" "}
          <Highlight>Better Coliving:</Highlight>{" "}
          Our Mission <br />And Values
        </Title>
        <Description>
          Our mission is to revolutionize urban living by creating vibrant, inclusive, and
          hassle-free co-living spaces that empower individuals to thrive in a supportive
          community.
        </Description>

      </Container>
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <GridContainer>
        {/* {propData?.map((item) => (
          <PropertyCard data={item} key={item.id} />
        ))} */}
        {Array.isArray(propData) && propData.map((item) => (
          <PropertyCard data={item} key={item.id} />
        ))}
      </GridContainer>
      {/* )} */}

    </div>
  )
}
export default WorkSpace