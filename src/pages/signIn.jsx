import React, { useContext, useState } from 'react'; // ← TAMBAHKAN useState
import AuthLayout from '../components/Layout/AuthLayout';
import FormSignIn from '../components/Fragment/FormSignIn';
import { loginService } from '../services/authService';
import { AuthContext } from '../components/Layout/authContext';
import AppSnackbar from '../components/Elements/AppSnackbar';

function SignIn() { // ← PERBAIKI: huruf besar S (SignIn)
  const { login } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
      login(refreshToken);
    } catch (err) {
      setSnackbar({ 
        open: true, 
        message: err.msg || "Login gagal", 
        severity: "error" 
      });
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default SignIn; // ← PERBAIKI: export dengan huruf besar