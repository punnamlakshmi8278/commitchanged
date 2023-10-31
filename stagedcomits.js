import Input from "./Input";

export { Input };
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const SocialSettings = ({ googleToken, facebookToken }) => {
 return (
    <div>
      <h1>Social Settings</h1>
      <GoogleLogin
        clientId="your-google-client-id.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={(response) => googleToken(response.tokenObj.id_token)}
        onFailure={(response) => googleToken(response.tokenObj.id_token)}
        cookiePolicy={'single_host_origin'}
      />
      <FacebookLogin
        appId="your-facebook-app-id"
        autoLoad={false}
        fields="name,email,picture"
        callback={(response) => facebookToken(response.accessToken)}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
        textButton="Login with Facebook"
      />
    </div>
 );
};

export default SocialSettings;
import React from 'react';
import SocialSettings from './SocialSettings';

const GeneralSettings = ({ onGoogleTokenChange, onFacebookTokenChange }) => {
 return (
    <div>
      <h1>General Settings</h1>
      <SocialSettings googleToken={onGoogleTokenChange} facebookToken={onFacebookTokenChange} />
    </div>
 );
};

export default GeneralSettings;
import React, { useState } from 'react';
import { Row, Col, Input, Button, Select } from 'antd';

const { Option } = Select;

const RoleAccessSettings = ({ roleAccess, setRoleAccess }) => {
 const [formData, setFormData] = useState({
    property: '',
    value: '',
 });

 const handleInputChange = (e, key) => {
   