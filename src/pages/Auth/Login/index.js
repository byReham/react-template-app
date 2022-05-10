import classnames from 'classnames';
import { Container } from 'react-bootstrap';

import Form from './Form';

import styles from './index.module.scss';

const Login = () => (
  <>
    <Container
      className={classnames(styles.root, 'justify-content-md-center')}
      fluid="md">
      <h3 className="text-white mb-5">Sign In</h3>
      <Form />
    </Container>
  </>
);

export default Login;
