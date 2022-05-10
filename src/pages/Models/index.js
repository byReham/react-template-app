import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { withFormik } from 'formik';
import moment from 'moment';
import { Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import BootstrapForm from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { LONG_DATE_FORMAT } from '../../constants';
// import FormikTextField from '../../components/Form/FormikTextField';
import { modelsIndex } from '../../store/models';

const Models = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(modelsIndex());
  }, []);

  const models = useSelector(store => store.models.index);
  // const isLoading = useSelector(store => store.models.isLoading);
  // const handleSubmit = () => {
  //   alert('Submitted');
  // };

  return (
    <>
      <Container fluid>
        <h1>Управление наличием</h1>
        <div>
          {/*<BootstrapForm>
            <Row className="mb-3">
              <FormikTextField
                formGroupProps={{ as: Col, md: 3 }}
                name="manufacture_number_cont"
                label="Номер модели"
              />
              <Col
                md={2}
                className="align-self-end">
                <Button
                  className="form-button"
                  variant="outline-primary"
                  disabled={isLoading}
                  onClick={handleSubmit}>
                  Поиск
                </Button>
              </Col>
            </Row>
          </BootstrapForm>*/}
        </div>
        <hr />
        <Row
          xs={2}
          md={4}
          lg={6}
          xl={8}
          className="g-2">
          {models.map(model => (
            <Col key={model.id}>
              <Card
                key={model.id}
                bg="dark"
                text="light">
                <Card.Header>
                  <Card.Title className="text-light">
                    {model.company.title} {model.manufacture_number} {moment(model.created_at).format(LONG_DATE_FORMAT)}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-light">
                    {model.currency}
                    {model.price}
                  </Card.Subtitle>
                </Card.Header>
                <Card.Img src={model.preview.versions.webp_thumb} />
                {/*<Card.Body></Card.Body>*/}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ manufacture_number_cont: '' }),
})(Models);
