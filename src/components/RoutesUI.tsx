import React, { useState } from 'react';

import { DnDStateType } from '../types/types';
import { RoutesUIProps } from '../types/props';

const initialDnDState: DnDStateType = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

const RoutesUI: React.FC<RoutesUIProps> = ({
  markers,
  setMarker,
  removeMarker,
}) => {
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  const onDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    const initialPosition = Number(e.currentTarget.dataset.position);

    setDragAndDrop((current) => ({
      ...current,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: markers,
    }));
  };

  const onDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();

    const { originalOrder, draggedFrom } = dragAndDrop;

    const draggedTo = Number(e.currentTarget.dataset.position);
    const itemDragged = originalOrder[draggedFrom!];

    const remainingItems = originalOrder.filter((item, i) => i !== draggedFrom);

    const updatedMarkers = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop((current) => ({
        ...current,
        updatedOrder: updatedMarkers,
        draggedTo,
      }));
    }
  };

  const onDrop = () => {
    setMarker(() => dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const renderRoutePoints = () => (
    <ul className="route-points-list">
      {markers.map((m, i) => (
        <li
          key={m.id}
          data-position={i}
          draggable
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          className={
            dragAndDrop && dragAndDrop.draggedTo === i
              ? 'route-point drop-area'
              : 'route-point'
          }
        >
          <div className="point-order">
            <p className="point-order-number">{i + 1}</p>
          </div>
          <div className="point-address">{m.address}</div>
          <button
            className="point-remove-btn"
            type="button"
            onClick={removeMarker(m.id)}
          >
            &#10008;
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {markers.length > 0 ? (
        renderRoutePoints()
      ) : (
        <p className="empty-points-info">
          <i>Add some markers on map</i>
        </p>
      )}
    </>
  );
};

export default RoutesUI;
