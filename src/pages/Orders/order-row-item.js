import PropTypes from 'prop-types';

import { useState } from 'react';

import classnames from 'classnames';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiOutlineDown } from 'react-icons/ai';

import sdekLogo from '../../assets/images/cdek-logo.png';
import TextField from '../../components/Form/TextField';
import { SHORT_DATE_FORMAT, DATE_DAY_FORMAT } from '../../constants';

import styles from './index.module.scss';

const OrderRowItem = ({ item, order, isLast }) => {
  const [comment, setComment] = useState(item.comment ?? '');
  const { user } = order ?? {};

  const handleChangeComment = () => value => {
    setComment(value);
  };

  return (
    <Row className={classnames({ 'pb-5': !isLast })}>
      <Col className={styles.row__col}>
        {order ? (
          <>
            <div>
              <div className={styles.row__col_text}>N{order.id}</div>
              <div className={classnames(styles.row__col_text, 'text-secondary')}>Корзина</div>
            </div>
            <div>
              <div className={styles.row__col_text}>{moment(order.created_at).format(SHORT_DATE_FORMAT)}</div>
              <div className={styles.row__col_text}>{moment(order.created_at).format('LT')}</div>
              <div className={styles.row__col_text}>{moment(order.created_at).format(DATE_DAY_FORMAT)}</div>
            </div>
            <div>
              <div className={classnames(styles.row__col_text, 'text-secondary')}>Сумма заказа</div>
              <div className={styles.row__col_text}>
                {order.total_price}
                {order.currency}
              </div>
            </div>
            {isLast ? null : (
              <Button>
                <AiOutlineDown />
              </Button>
            )}
          </>
        ) : null}
      </Col>
      <Col className={styles.row__col}>
        <img
          className={styles.items__row_image}
          title={item.model?.manufacture_number}
          src={item.model?.preview}
        />
      </Col>
      <Col
        md={8}
        className={styles.row__col}>
        <Row
          key={item.id}
          md={3}
          className={styles.items__row}>
          <Col className={classnames(styles.row__col)}>
            <div>
              <div className={styles.row__col_text}>Category name</div>
              <div className={classnames(styles.row__col_text, 'text-secondary')}>Company name</div>
            </div>
            <div>
              <div className={styles.row__col_text}>{item.model?.manufacture_number}</div>
              <div className={classnames(styles.row__col_text, 'text-secondary')}>{item.model?.color}</div>
            </div>
            <div className="text-center">
              <div className={classnames(styles.orders_item__sizebox)}>{item.size}</div>
            </div>
            <div>
              <div className={classnames(styles.row__col_text, 'text-secondary')}>Цена</div>
              <div className={styles.row__col_text}>
                {item.price}
                {item.currency}
              </div>
            </div>
          </Col>
          <Col className={classnames(styles.row__col, 'justify-content-start')}>
            {order ? (
              <>
                <div>
                  <div className={styles.row__col_text}>{user?.name}</div>
                  <div className={classnames(styles.row__col_text, 'text-secondary')}>{user?.email}</div>
                  <div className={classnames(styles.row__col_text, 'mt-3')}>{user?.phone_number}</div>
                </div>
                <hr className="w-75 mx-auto" />
                <div>
                  <div className={styles.row__col_text}>{user?.country}</div>
                  <div className={styles.row__col_text}>{user?.region}</div>
                  <div className={styles.row__col_text}>{user?.city}</div>
                  <div className={styles.row__col_text}>{user?.address}</div>
                  <div className={styles.row__col_text}>{user?.post_code}</div>
                </div>
              </>
            ) : null}
          </Col>
          <Col className={classnames(styles.row__col)}>
            {order ? (
              <>
                <div>
                  <Button
                    variant="warn"
                    className="d-flex align-items-center px-3 disabled m-auto">
                    {order.status}
                    <AiOutlineDown />
                  </Button>
                </div>
                <hr className="w-75 mx-auto" />
                <div>
                  <img
                    src={sdekLogo}
                    alt="sdek"
                    className="mb-3"
                  />
                  <div>1329496753</div>
                </div>
              </>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className={styles.row__col}>
            <TextField
              name="comment"
              value={comment}
              onChange={handleChangeComment(item.id)}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

OrderRowItem.propTypes = {
  item: PropTypes.shape().isRequired,
  order: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.oneOf([null])]),
  isLast: PropTypes.bool,
};

OrderRowItem.defaultProps = {
  order: null,
  isLast: false,
};

export default OrderRowItem;
