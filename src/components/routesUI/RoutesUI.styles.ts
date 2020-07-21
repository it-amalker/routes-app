import styled from 'styled-components';

export const RoutesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 35%;
  min-width: 370px;

  background-color: ${({ theme }) => theme.colors.main};

  border-right: 2px solid ${({ theme }) => theme.colors.darker};

  box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);

  box-sizing: border-box;

  z-index: 5;
`;

export const AppTitle = styled.h1`
  width: 100%;
  margin: 1rem 0;
  padding: 20px 0;

  text-align: center;
  text-transform: uppercase;
`;

export const RoutesInfo = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
`;

export const NoRoutes = styled.p`
  font-weight: bold;
`;

export const EmptyPoints = styled.p`
  font-weight: bold;
  font-style: italic;
`;

export const Points = styled.ul`
  width: 70%;
  margin: 0;
  padding: 20px 15px;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  list-style: none;
`;

export const Point = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  padding: 10px;

  font-size: ${({ theme }) => theme.fontSizes.smallest};

  background-color: ${({ theme }) => theme.colors.main};

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darker};
    cursor: move;
  }
`;

export const Order = styled.div`
  padding: 0.625rem;

  background-color: ${({ theme }) => theme.colors.danger};

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
`;

export const OrderNumber = styled.p`
  width: 1.1rem;
  height: 1.1rem;
  margin: 0;

  color: ${({ theme }) => theme.colors.standard};
  font-weight: bold;
  text-align: center;
`;

export const Address = styled.div`
  padding: 0 10px;

  font-weight: bold;
`;

export const RemoveButton = styled.button`
  padding: 5px 0;

  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.big};

  background-color: transparent;

  border: none;

  &:hover {
    color: ${({ theme }) => theme.colors.danger};

    cursor: pointer;
  }
`;

export const DropArea = styled(Point)`
  position: relative;

  background-color: ${({ theme }) => theme.colors.secondary};

  &::before {
    content: 'Drop Here';

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.standard};
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;

    border: 2px dashed ${({ theme }) => theme.colors.danger};
    border-radius: 5px;

    box-sizing: border-box;
  }

  & ${Order} {
    margin: 0;
  }

  & ${Address} {
    display: none;
  }

  & ${RemoveButton} {
    display: none;
  }
`;
