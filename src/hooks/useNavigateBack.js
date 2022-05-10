import { useNavigate, useLocation } from 'react-router-dom';

const useNavigateBack = path => {
  const navigate = useNavigate();
  const location = path ?? useLocation().state?.from ?? '/';

  const navigateBack = () => navigate(location, { replace: false });

  return navigateBack;
};

export default useNavigateBack;
