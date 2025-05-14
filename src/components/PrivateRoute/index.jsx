import { useEffect } from 'react';
import { verifyUserService } from '../../services/auth/login';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();

  useEffect(
    function () {
      async function userInfo() {
        const user = await verifyUserService();

        const authToken = user.token;

        if (!authToken) navigate('/');
      }

      userInfo();
    },
    [navigate]
  );

  return children;
}
