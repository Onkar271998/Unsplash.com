import { SearchIcon } from "@chakra-ui/icons";
import { Box, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import "./MiddleHome.css";
function MiddleHome() {
  return (
    <>
      <Box className="Middle_page">
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
            {/* <Heading fontSize="sm" textAlign="left">SQUARESPACE</Heading> */}
            <Text fontSize="md" textAlign="left">
              Trending,flower,wallpapers,backgrounds,happy,love
            </Text>
          </Box>
        </Box>
        
      <SimpleGrid color="white" columns={3} spacing={95} marginTop="13%">
        <Box>Photo by Michael Pointner</Box>
        <Box>Read more about the Unsplash License</Box>
        <Box>Create your website today.</Box>
      </SimpleGrid>
      </Box>

    </>
  );
}
export default MiddleHome;
