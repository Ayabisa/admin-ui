import React, { useContext } from 'react';
import AuthLayout from '../components/Layout/AuthLayout';
import FormSignIn from '../components/Fragment/FormSignIn';
import { loginService } from '../services/authService';
import { AuthContext } from '../components/Layout/authContext';

function signIn() {
  const { login } = useContext(AuthContext);

	const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
			
			login(refreshToken); 
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <AuthLayout>
        <FormSignIn onSubmit={handleLogin} />
    </AuthLayout>
  );
}

export default signIn