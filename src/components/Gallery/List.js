import PropTypes from 'prop-types';

import React from 'react';

import { useField } from 'formik';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';

import Item from './Item';

const SortableItem = SortableElement(({ ...props }) => <Item {...props} />);

const SortableList = SortableContainer((props = {}) => {
  const { items, onRemove, onRestore } = props;

  return (
    <div className="images-gallery">
      <div className="images-gallery__title-hint">Title image</div>
      <div className="images-gallery__list">
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            index={index}
            sortIndex={index}
            item={item}
            onRemove={onRemove}
            onRestore={onRestore}
          />
        ))}
      </div>
    </div>
  );
});

const List = ({ name }) => {
  const [, meta, { setValue }] = useField({ name });

  const images = [meta.value].flat().filter(i => i);

  const onSortEnd = ({ oldIndex, newIndex }) => setValue(arrayMove(images, oldIndex, newIndex));

  const removeItem = i => {
    const file = images[i];

    if (!file.id) {
      images.splice(i, 1);
    } else {
      file._destroy = true;
    }

    setValue([...images]);
  };

  const restoreItem = i => {
    images[i]._destroy = false;
    setValue([...images]);
  };

  return (
    <SortableList
      items={images}
      onRemove={removeItem}
      onRestore={restoreItem}
      onSortEnd={onSortEnd}
      axis="xy"
      helperClass="raised"
      distance={1}
    />
  );
};

List.propTypes = {
  name: PropTypes.string.isRequired,
};

export default List;
