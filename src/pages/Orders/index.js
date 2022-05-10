import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import classnames from 'classnames';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { ordersIndex } from '../../store/orders';

import Filters from './filters';
import OrderRow from './order-row';

import styles from './index.module.scss';

const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ordersIndex());
  }, []);

  const orders = useSelector(store => store.orders.index);

  return (
    <>
      <Container fluid="md">
        <Filters />
        <Row
          xs={1}
          className={classnames('g-2', styles.order_list)}>
          {orders.map(order => (
            <Col key={order.id}>
              <OrderRow order={order} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Orders;
