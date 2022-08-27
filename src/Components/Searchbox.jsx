import { Box, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import Home from "./Home";
import "./Searchbox.css";
function Searchbox() {
  const [text, setText] = useState("");
  const [query, setquery] = useState([]);

  const handlechange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Box className="search-box">
        <Box color="white" className="box1">
          <Heading size="2xl">Unsplash</Heading>
          <Box>
            <Text>The internet's sourse of freely-usable images.</Text>
            <Text>Powered by creator everywhere</Text>
          </Box>

          <Input
            placeholder="Search free hight-resolution photos"
            backgroundColor="white"
            onChange={handlechange}
          ></Input>

          <Text>Trending:flower,wallpapers,backgrounds,happy,love</Text>
        </Box>
        <Box color="white" className="box2">
          <Box>
            <Text>Photo by Reinaldo Photography</Text>
          </Box>
          <Box>SQUARESPACE</Box>
          <Box>create your website today.</Box>
        </Box>
      </Box>
    </>
  );
}

export default Searchbox;
