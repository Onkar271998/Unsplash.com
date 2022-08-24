import "./Login.css"

function Login(){
    return(
        <>
       <div className="Login_page">
          
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
                <input type="Email"></input>
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



       </div>
        </>
    )
}
export default Login;