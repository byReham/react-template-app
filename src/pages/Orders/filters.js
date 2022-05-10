import { useSelector } from 'react-redux';

import classnames from 'classnames';
import { withFormik } from 'formik';
// import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import FormikTextField from '../../components/Form/FormikTextField';

import styles from './index.module.scss';

const Filters = () => {
  const isLoading = useSelector(store => store.orders.isLoading);
  const handleSubmit = () => {
    alert('Submitted');
  };

  return (
    <div className={classnames(styles.filters)}>
      {
        <Form>
          <Row className="align-items-start">
            <Col>
              <Row className="gx-2 gy-3">
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="Номер заказа"
                />
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="Покупатель"
                />
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="Телефон"
                />
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="E-mail"
                />
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="Статус заказа"
                />
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="03.04.2022"
                />
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="30.04.2022"
                />
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="Способ доставки"
                />
                <FormikTextField
                  formGroupProps={{ as: Col, md: 3 }}
                  name="manufacture_number_cont"
                  placeholder="Со страницы"
                />
              </Row>
            </Col>
            <Col md={2}>
              <Button
                className="form-button"
                variant="primary"
                disabled={isLoading}
                onClick={handleSubmit}>
                Поиск
              </Button>
            </Col>
          </Row>
        </Form>
      }
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    manufacture_number_cont: '',
  }),
})(Filters);
