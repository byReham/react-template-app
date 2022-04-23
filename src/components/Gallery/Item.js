import PropTypes from 'prop-types';

import React from 'react';

const Item = ({ onRemove, onRestore, item, sortIndex }) => {
  const restoreItem = () => {
    onRestore(sortIndex);
  };

  const removeItem = () => {
    onRemove(sortIndex);
  };

  const renderActionButton = () => {
    if (item._destroy && item.id) {
      return (
        <div
          onClick={restoreItem}
          className="file-field__icon">
          <svg
            width="24px"
            height="24px">
            {/*<use xlinkHref={`${sprite}#undo`} />*/}
          </svg>
        </div>
      );
    }

    return (
      <div
        onClick={removeItem}
        className="file-field__icon">
        <svg
          width="24px"
          height="24px">
          {/*}<use xlinkHref={`${sprite}#delete`} />*/}
        </svg>
      </div>
    );
  };

  return (
    <div className="images-gallery__card">
      <img
        src={item.thumb || item.url}
        disabled={item._destroy}
        className={item._destroy ? 'images-gallery__removed_image' : ''}
      />
      <div className="images-gallery__action">{renderActionButton()}</div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  sortIndex: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
};

export default Item;
