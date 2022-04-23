import { useNavigate, useLocation } from 'react-router-dom';

import urls from '../api/urls';

const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state?.from ?? urls.dashboard;

  const navigateBack = () => navigate(path, { replace: true });

  return navigateBack;
};

export default useNavigateBack;
