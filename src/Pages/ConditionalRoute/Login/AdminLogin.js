import React from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/btn_google_light_focus_ios.svg';
import './Login.css';

const AdminLogin = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className="container mb-5">
            <div className="login-form">
                <div className="input-form p-lg-4 mt-lg-5 p-sm-2 mt-sm-4">
                    <form>
                        <h2 className="py-3">Admin Login</h2>
                        <div className="mb-3">
                            <label className="form-label">User Id</label>
                            <input type="email" className="form-control" placeholder="Enter your user id" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" required />
                        </div>
                        <button className="btn btn-warning">Login</button>
                    </form>
                    <div>Or Sign In Using</div>
                    <button style={{ border: 'none', backgroundColor: 'white' }} onClick={signInUsingGoogle}><img style={{ width: '60px' }} src={logo} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;