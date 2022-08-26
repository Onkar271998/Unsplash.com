// import {
//   Box,
//   Button,
//   Container,
//   Input,
//   SimpleGrid,
//   Text,
// } from "@chakra-ui/react";
// import { useState } from "react";

// import Searchbox from "./Searchbox";
// function Navbar() {

import {
  Box,
  Button,
  Input,
  Menu,
  MenuButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Navbar2 from "./Navbar2";

//   return (
//     <> <Box>
//       <SimpleGrid
//         columns={[3, 3, 3, 3]}
//         spacing={0}
//         className="Nav-one"
//         alignItems="center"
//         height="10%"
//       >
//         <Box>
//           <Box marginTop="-2%">
//             <img
//               style={{ width: "15%" }}
//               src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"
//             />
//           </Box>
//         </Box>
//         <Box marginLeft="-75%">
//           <Box>
//             <Input
//               backgroundColor="#eeeeee"
//               placeholder="Search photos"
//             ></Input>
//           </Box>
//         </Box>

//         <Box>
//           <SimpleGrid
//             columns={[5, 5, 5, 4]}
//             spacing={0}
//             className="Nav-one"
//             alignItems="center"
//           >
//             <Box>
//               <Text>Advertise</Text>
//             </Box>
//             <Box>
//               <Text>Blog</Text>
//             </Box>
//             <Box>
//               <Button disabled={true}>Submit a photo</Button>
//             </Box>
//             <Box>
//               <Text>Notification</Text>
//             </Box>
//           </SimpleGrid>
//         </Box>
//       </SimpleGrid>

//       {/* //Navabr Second */}

//

//     </>
//   );
// }

// export default Navbar;

function Navbar() {
  

  
  const [count, setCount] = useState(0);
  const [value, setvalue] = useState(false);
  return (
    <>
      <div className="Nav-Div">
        <div>
          <Link to="/">
            <img
              style={{ width: "23%" }}
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"
            />
          </Link>
        </div>
        <div style={{ width: "50%", marginLeft: "-12%" }}>
          <Input
            onClick={() => setvalue(!value)}
            backgroundColor="#eeeeee"
            placeholder="Search free high-resolution photos"
          ></Input>

          {value ? (
            <div className="Hamburg">
              <Dropdown />
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "20%",
          }}
        >
          <div>Explore</div>
          <div>Advertise</div>
          <div>Blog</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "20%",
            alignItems: "center",
          }}
        >
          <div>
            <Link to="/login">Log in</Link>
          </div>
          <div>/</div>
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>

          <div>
            <Button>Submit a photo</Button>
          </div>
          <div>
            <HamburgerIcon onClick={() => setvalue(!value)} />

            {value ? (
              <div className="Hamburg">
                <Dropdown />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
<Navbar2/>
      {/* <Box display="flex" gap="1%" alignItems="center" marginLeft="0.5%">
        <Box>
          <Box>Editorial</Box>
        </Box> */}

      {/* <Box>
          {" "}
          <Box height="10%">
            <SimpleGrid
              columns={[4, 5, 5, 14]}
              spacing={-1}
              alignItems="center"
            >
              <Button
                className="Butt"
                disabled={count < 1}
                onClick={() => setCount(count - 1)}
              >
                {"<"}
              </Button>
              <Box textAlign="center">
                <Text fontSize="80%" width="100%">{Nav2[count]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 1]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 2]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 3]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 4]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 5]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 6]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 7]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 8]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 9]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 10]}</Text>
              </Box>
              <Box textAlign="center">
                <Text width="90%">{Nav2[count + 11]}</Text>
              </Box>
              <Button
                className="Butt"
                disabled={count > 11}
                onClick={() => setCount(count + 1)}
              >
                {">"}
              </Button>
            </SimpleGrid>

            {/* {Nav2[count+1]}{Nav2[count+2]}{Nav2[count+3]}{Nav2[count+4]} */}
      {/* </Box> */}
      {/* </Box>  */}
      {/* // </Box> */}
    </>
  );
}
export default Navbar;
