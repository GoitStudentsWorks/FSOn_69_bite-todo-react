import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAuthError,
  selectIsTokenRefreshed
} from '../store/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const authError = useSelector(selectAuthError);
  const isTokenRefreshed = useSelector(selectIsTokenRefreshed)

  return {
    isLoggedIn,
    isRefreshing,
    user,
    authError,
    isTokenRefreshed
  };
};
