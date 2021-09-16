import React from "react";

const Login = (props) => {
    const {
        email, 
        setEmail,
        password,
        setPassword,
        hadleLogin,
        hadleSignup,
        hasAccout,
        setHasAccout,
        emailError,
        passwordError,
    } = props;

    return(
    <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <imput 
            type="text"
            autoFacus
            required
            value={email}
            onChange = {(e)=>setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <imput 
            type="password"
            required
            value={password}
            onChange = {(e)=>setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccout ? (
                    <>
                    <button onClick={hadleLogin}>Sign in</button>
                    <p>
                        No tenes cuenta ?
                        <span onClick={()=> setHasAccout(!hasAccout)}>Sign up</span>
                        </p>
                    </>
                ):(
                    <>
                    <button onClick={hadleSignup}>Sign up</button>
                    <p>Tenes cuenta ?
                    <span onClick={()=> setHasAccout(!hasAccout)}>Sign in</span>
                    </p>
                    </>  
                )}
            </div>
        </div>
    </section>
    )
};

export default Login;