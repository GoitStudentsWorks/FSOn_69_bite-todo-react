import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { RestrictedRoute } from './restrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser, refreshToken } from 'store/auth/operations';
import { selectAuthError, selectIsLoggedIn } from 'store/auth/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from './Loader/Loader';
import { Layout } from './Layout/Layout';
import Welcome from '../pages/Welcome/Welcome';
import { Auth } from '../pages/Auth';
import MainDashboard from '../pages/MainDashboard/MainDashboard';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector(selectAuthError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (authError.message === 'Token expired') {
      dispatch(refreshToken());
      dispatch(refreshUser());
    }

    if (authError.message === 'Unable to fetch user') return;

    Notify.init({
      fontFamily: 'Poppins',
      timeout: 4000,
      clickToClose: true,
      warning: {
        background: '#ff5549',
      },
    });

    if (authError.message) {
      switch (authError.status) {
        case 401:
          Notify.warning('Invalid email or password');
          break;

        case 409:
          Notify.warning('This user is already registered');
          break;

        default:
          Notify.warning(`${authError.message}`);
      }
    }
  }, [dispatch, authError]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={<RestrictedRoute redirectTo="/home" component={<Welcome />} />}
      />
      <Route
        path="/auth/:actionId"
        element={<RestrictedRoute redirectTo="/home" component={<Auth />} />}
      />
      <Route path="/home" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/" component={<MainDashboard />} />
          }
        />
        <Route
          path="/home/:boardName"
          element={
            <PrivateRoute redirectTo="/" component={<MainDashboard />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
