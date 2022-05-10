import PropTypes from 'prop-types';

import { useMemo } from 'react';

import OrderRowItem from './order-row-item';

import styles from './index.module.scss';

const OrderRow = ({ order }) => {
  const lastIndex = useMemo(() => order.items.length - 1, [order.items]);

  return (
    <div className={styles.row}>
      {order.items.map((item, i) => {
        if (i === 0) {
          return (
            <OrderRowItem
              key={item.id}
              item={item}
              order={order}
              isLast={i === lastIndex}
            />
          );
        }

        return (
          <OrderRowItem
            key={item.id}
            item={item}
            isLast={i === lastIndex}
          />
        );
      })}
    </div>
  );
};

OrderRow.propTypes = {
  order: PropTypes.shape().isRequired,
};

export default OrderRow;
