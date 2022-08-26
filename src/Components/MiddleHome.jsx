import { SearchIcon } from "@chakra-ui/icons";
import { Box, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MiddleHome.css";
import Searchbox from "./Searchbox";
// function MiddleHome() {
//   return (
//     <>
{
  /* <Box className="Middle_page">
        <Box className="Middle_box">
          <Box style={{ filter: "brightness(120%)" }} marginTop="8%">
            <Heading textAlign="left" size="2xl">
              Unsplash
            </Heading>
            <Text textAlign="left">
              The internet's source of freely-usable images
            </Text>
            <Text textAlign="left"> Powered by creators everywhere </Text>
          </Box>
          
          <Input
            style={{ filter: "brightness(120%)" }}
            bg="white"
            marginLeft="-50%"
            width="50%"
          ></Input>
          <Box margi>
            {/* <Heading fontSize="sm" textAlign="left">SQUARESPACE</Heading> */
}
{
  /* <Text fontSize="md" textAlign="left">
              Trending,flower,wallpapers,backgrounds,happy,love
            </Text>
          </Box>
        </Box>
        
      <SimpleGrid color="white" columns={3} spacing={95} marginTop="14%"  >
        <Box>Photo by Michael Pointner</Box>
        <Box>Read more about the Unsplash License</Box>
        <Box>Create your website today.</Box> */
}
{
  /* </SimpleGrid> */
}
{
  /* </Box> */
}

function MiddleHome() {
  // const [Data, setData] = useState([]);

  // useEffect(() => {
  //   imagelink();
  // }, []);

  // const imagelink = () => {
  //   return axios

  //     .get(
  //       "https://api.unsplash.com/search/photos?page=2&query=random&limit=30&client_id=1TDSAOZE_7IRzQX9vcWwVMu-GgV80r3-69flNb9VpIo"
  //     )
  //     .then((res) => {
  //       setData(res.data)
         
  // console.log(res.data.results[5].urls.raw )
  //     });
  // };
  
// console.log(Data.results[5].urls.raw)
  return (
    <>
      {/* <Box className=".Middle_page" >
        <Searchbox/>
          <img className="Middle_box" src="https://images.unsplash.com/photo-1616016757924-02e7091bb0f5?ixlib=rb-1.2.1" alt="img" />        
      </Box> */}
    {/* res.data.results[0].urls.raw */} 
    </>
  );
}
export default MiddleHome;
