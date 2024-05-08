import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './../components/layouts';
import routes from './../routes';

import HomePage from '../pages/user/HomePage';
import LegitCheckPage from '../pages/user/LegitCheckPage';
import AboutPage from '../pages/user/AboutPage';
import ProfilePage from '../pages/user/ProfilePage';
import LegitCheckFormPage from '../pages/user/LegitCheckFormPage';
import ContactUsPage from '../pages/user/ContactUsPage';
import PrivateRoute from './../utils/PrivateRoute';
import MyLegitPage from './../pages/user/MyLegitPage';
import { useTheme } from '../ThemeContext';

export function UserLayout() {
  const { selectedTheme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        selectedTheme === 'dark'
          ? 'bg-secondary border-white text-textWhite'
          : 'bg-primary border-gray-700 text-textBlack'
      }`}
    >
      <Navbar routes={routes} />
      <main className="flex-grow">
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="legit-check" element={<LegitCheckPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="profile"
            element={<PrivateRoute element={<ProfilePage />} />}
          />
          <Route
            path="legit-check-form"
            element={<PrivateRoute element={<LegitCheckFormPage />} />}
          />
          <Route
            path="my-legit"
            element={<PrivateRoute element={<MyLegitPage />} />}
          />
          <Route path="contact-us" element={<ContactUsPage />} />
        </Routes>
      </main>
      <Footer routes={routes} />
    </div>
  );
}

export default UserLayout;
