import React from 'react';
import AuthLayout from '../components/Layout/AuthLayout';
import FormSignIn from '../components/Fragment/FormSignIn';

function signIn() {
  return (
    <AuthLayout>
        <FormSignIn />
    </AuthLayout>
  );
}

export default signIn