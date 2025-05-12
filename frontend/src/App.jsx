import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';

import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import SuggetionForm from './components/ui/SuggetionForm.jsx';
import Profile from './pages/Profile.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import TermsAndConditions from './components/ui/TermConditions.jsx';
import PrivacyPolicy from './components/ui/PrivacyPolicy.jsx';
import ContactUs from './components/ui/ContactUs.jsx';
import AboutUs from './components/ui/AboutUs.jsx';
import NotFound from './pages/NotFound.jsx';
import MainLayout from './pages/Layout.jsx'; // ⬅️ import layout

const App = () => {
  return (
    <UserProvider>
      <Router>
        <ToastContainer />
        <Routes>
        <Route path="*" element={<NotFound />} />
          {/* Pages without layout */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>} />

          {/* Pages with Navbar/Footer layout */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={
              <ProtectedRoute role="user">
                <Home />
              </ProtectedRoute>} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>} />
            <Route path="/suggetion-form" element={
              <ProtectedRoute>
                <SuggetionForm />
              </ProtectedRoute>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/term-condition" element={<TermsAndConditions />} />
            <Route path="/not-found" element={<NotFound />} />
          </Route>

        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
