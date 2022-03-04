import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>
        <div id="content_container">
            <div id="form_container">
                <div id="form_header_container">
                    <h2 id="form_header"> Cupid's Arrow </h2> 
                </div>

                <div id="form_content_container">
                    <div id="form_content_inner_container">
                        <input type="text" id="username" placeholder="username" />
                        <input type="email" id="email" placeholder="Email" />
                        <input type="password" id="password" placeholder="Password" />


                        <div id="button_container">
                            <button onclick="login()">Login</button>
                            <button onclick="register()">Register</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login