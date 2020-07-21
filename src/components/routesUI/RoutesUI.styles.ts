import styled from 'styled-components';

export const RoutesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 35%;

  background-color: ${({ theme }) => theme.colors.main};

  border-right: 2px solid ${({ theme }) => theme.colors.darker};

  box-shadow: 0.06rem 0px 0.32rem 0 rgba(0, 0, 0, 0.75);

  box-sizing: border-box;

  z-index: 5;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    order: 2;
    width: 100%;
    height: 50vh;
    border-right: none;

    border-bottom: 2px solid ${({ theme }) => theme.colors.darker};
  }
`;

export const AppTitle = styled.h1`
  margin: 0;
  padding: 2.25rem 0;

  text-align: center;
  text-transform: uppercase;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0.25rem 0;

    font-size: ${({ theme }) => theme.fontSizes.big};
  }
`;

export const RoutesInfo = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;

  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-bottom: 0.3rem;
  }
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
  padding: 1.25rem 1rem;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  list-style: none;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 40%;
    padding: 0.5rem 0.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    width: 70%;
  }
`;

export const Point = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.625rem;
  padding: 0.625rem;

  font-size: ${({ theme }) => theme.fontSizes.small};

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

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-bottom: 0.325rem;
    padding: 0.325rem;
  }
`;

export const Order = styled.div`
  padding: 0.625rem;

  background-color: ${({ theme }) => theme.colors.danger};

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0.325rem;
  }
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
  padding: 0 0.625rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 0.325rem;
  }
`;

export const RemoveButton = styled.button`
  padding: 0.32rem 0;

  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.big};

  background-color: transparent;

  border: none;

  &:hover {
    color: ${({ theme }) => theme.colors.danger};

    cursor: pointer;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0.16rem 0;
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
    font-size: ${({ theme }) => theme.fontSizes.smallest};
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
