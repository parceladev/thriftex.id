import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { saveToken, validateToken } from '../../utils/TokenUtilities';

import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import SubmitButton from './SubmitButton';
import BorderButton from './BorderButton';

const FormSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post(
        'http://localhost/rest.thriftex/api/users/login',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      const data = response.data;
      if (data.status) {
        if (!data.token) {
          console.error('Token is undefined or null.');
        } else {
          saveToken(data.token);
        }

        const validation = validateToken(data.token);
        if (validation.valid) {
          console.log('Token is valid:', validation.decoded);
          if (validation.decoded.role === 'user') {
            navigate('/user/home');
          } else {
            console.error(
              'Access denied for user role:',
              validation.decoded.role
            );
          }
        } else {
          setErrorMessage('Invalid or expired token');
        }
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(
        'Login Error:',
        error.response ? error.response.data : error
      );
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:p-12 p-9 rounded-2xl text-white bg-white/35 w-full sm:w-[475px]"
    >
      <a href="#" className="flex justify-center mb-4">
        <img src="/src/assets/auth/form-logo.png" alt="Auth Form Logo" />
      </a>
      <InputEmail
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username or Email"
      />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
      />
      {errorMessage && (
        <p className="mb-2 text-sm text-red-500">{errorMessage}</p>
      )}
      <a href="#" className="mb-4 text-sm font-bold">
        Forgot password?
      </a>
      <SubmitButton name="Sign In" />
      <BorderButton />
    </form>
  );
};

export default FormSignIn;
