/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import '../../App.css';
class Login extends React.Component{
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var access_token = googleUser.getAuthResponse().access_token;
    //anything else you want to do(save to localStorage)...
    this.props.updateInfo(googleUser.getBasicProfile(), id_token, access_token);
  }
 
  render () {
    return (
      <div>
        <GoogleLogin socialId="682369715368-2nnca8b1cv7it9a6s7k628qmjr8hlvl8.apps.googleusercontent.com"
                     className="google-login"
                     scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
                     fetchBasicProfile={true}
                     responseHandler={this.responseGoogle.bind(this)}>
                     Connexion
        </GoogleLogin>
      </div>
    );
  }
 
}
 
export default Login;