// import { Routes, Route } from 'react-router-dom';
// import { Navbar, Footer } from '../components/layouts';
// import routes from './../routes';

// export function UserLayout() {
//   return (
//     <div>
//       <Navbar routes={routes} />
//       <div>
//         <Routes>
//           {routes.map(
//             ({ layout, pages }) =>
//               layout === 'UserLayout' &&
//               pages.map(({ path, element }) => (
//                 <Route exact key={path} path={path} element={element} />
//               ))
//           )}
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// UserLayout.displayName = '/src/layouts/UserLayout.jsx';

// export default UserLayout;

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/user/HomePage';
import LegitCheckPage from '../pages/user/LegitCheckPage';
import AboutPage from '../pages/user/AboutPage';
import ProfilePage from '../pages/user/ProfilePage';
import LegitCheckFormPage from '../pages/user/LegitCheckFormPage';
import { Navbar, Footer } from './../components/layouts';
import routes from './../routes';
import PrivateRoute from './../utils/PrivateRoute';

export function UserLayout() {
  return (
    <div>
      <Navbar routes={routes} />
      <div>
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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;
