import React, { useState } from 'react';

import * as Styled from './RoutesUI.styles';

import { DnDStateType } from '../../types/types';
import { RoutesUIProps } from '../../types/props';

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
  routeNotFound,
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
    <Styled.Points>
      {markers.map((m, i) => {
        const Point =
          dragAndDrop && dragAndDrop.draggedTo === i
            ? Styled.DropArea
            : Styled.Point;
        return (
          <Point
            key={m.id}
            data-position={i}
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            <Styled.Order>
              <Styled.OrderNumber>{i + 1}</Styled.OrderNumber>
            </Styled.Order>
            <Styled.Address>{m.address}</Styled.Address>
            <Styled.RemoveButton type="button" onClick={removeMarker(m.id)}>
              &#10008;
            </Styled.RemoveButton>
          </Point>
        );
      })}
    </Styled.Points>
  );

  return (
    <Styled.RoutesContainer>
      <Styled.AppTitle>Routes app</Styled.AppTitle>
      <Styled.RoutesInfo>Move blocks to adjust the route:</Styled.RoutesInfo>
      {routeNotFound ? (
        <Styled.NoRoutes>Sorry, no route found :(</Styled.NoRoutes>
      ) : null}
      {markers.length > 0 ? (
        renderRoutePoints()
      ) : (
        <Styled.EmptyPoints>Add some markers on map</Styled.EmptyPoints>
      )}
    </Styled.RoutesContainer>
  );
};

export default RoutesUI;
