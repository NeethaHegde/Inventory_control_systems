import React from 'react';

function Register() {
    return (
        <div className="container">
            <div className="shadow-lg border border-warning bg-light rounded-3 p-3 mx-auto my-5"
                style={{ maxWidth: "23%", minHeight: "40%" }}>
                <h1 className="text-center mb-4">Register</h1>
                <div className="container">
                    <form method="POST">
                        <input className="form-control mb-3" name="username" type="text" placeholder="Username" />
                        <input className="form-control mb-3" name="email" type="email" placeholder="Email" />
                        <input className="form-control mb-3" name="password" type="password" placeholder="Password" />
                        <input className="form-control mb-4" name="confirmPassword" type="password" placeholder="Confirm Password" />
                        <div className="">
                            <button className="btn btn-success w-100" type="submit">Register</button>
                        </div>
                    </form>
                </div>
                <div className="my-2">
                    <center>Already have an account?&nbsp;
                        <a href="/login" class="text-decoration-none fw-bold">Login</a>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Register;
