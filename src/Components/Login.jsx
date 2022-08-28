import { Box, Button, Container, Heading, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() { 

  let navigate = useNavigate();



  const loginclick=()=>{
    navigate("/")
  }

  return (
    /* <div className="Login_page">
          
          <div className="Login_page_img">
            <img src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"/>
          </div> 
          <h1>Login</h1>
          <p>Welcome back</p>

          <div>
            <h3>Login with Facebook</h3>
          </div>
          <p>OR</p>


          <div>
            <div>
                <p>Email</p>
                <div>

                <input type="Email"></input>
                </div>
              
            </div>
            <div>
                <p>Password</p>
                <input type="password"></input>
            </div>
            <div>
                <button>Login</button>
            </div>
          </div>
        
        <div>
            
            <p>Don't have an account?</p>

        </div>



       </div> */

    <Container className="outer-container-login">
      <Box className="Logo-box">
      <img src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" />
      </Box>
      <Box >
     
        <Heading size="xl">Login</Heading>
        <Text>Welcome back</Text>
        <Button bgColor="#1778f2" width="95%" color="white">Login with facebook</Button>
        <Text>OR</Text>
      </Box>
      <Box marginTop="-3%"> 
      <Box textAlign="left">
        <Text>Email</Text>
        <Input></Input>
      </Box>

      <Box textAlign="left">
        <Text>Password</Text>

        <Input></Input>
      </Box>  
      </Box> 
      <Button bgColor="black" width="95%" color="white" onClick={loginclick}>Login</Button>

      <Box marginTop="1%">
        <Text marginTop="2%">Don't have an account? Join Unsplash</Text>
      </Box>
    </Container>
  );
}
export default Login;
