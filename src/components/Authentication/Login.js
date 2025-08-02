import React from 'react'

function Login(){
    return(
    <div className="container">
        <div className="shadow-lg border border-warning bg-light rounded-3 p-3 mx-auto my-5"
            style={{maxWidth: "23%", minHeight:"40%"}}>
            <h1 className="text-center mb-5">Sign In</h1>
            <div class="container"><div>
                    <form method="POST">
                        <input className="form-control mb-4" name="username" value="" type="text" placeholder="Username" />
                        <input className="form-control mb-4" name="password" type="password" placeholder="Password" />
                        <div className="">
                            <button class="btn btn-success w-100" type="submit">Sign In</button>
                            <a href="/forgot-password" class="nav-link text-center">Forgot password</a>
                        </div>
                    </form>
                </div>
                <div className="my-2">
                    <center>Don't have an account?
                        <a href="/register" class="text-decoration-none fw-bold">Register</a>
                    </center>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Login;