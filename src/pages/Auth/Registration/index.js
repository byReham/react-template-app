import classnames from 'classnames';
import { Container } from 'react-bootstrap';

import Form from './Form';

import styles from './index.module.scss';

const Registration = () => (
  <>
    <div className={classnames('page-content', styles.root)}>
      <Container
        fluid
        className="justify-content-md-center">
        <h3 className="text-white mb-5">Sign In</h3>
        <Form />
      </Container>
    </div>
  </>
);

export default Registration;
