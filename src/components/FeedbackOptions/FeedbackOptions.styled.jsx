import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:first-of-type button {
    box-shadow: inset 2px 2px 5px 7px rgba(88, 255, 76, 1);
    background-color: #aafaca;

    &:hover {
      transform: scale(1.1);
      box-shadow: 2px 2px 18px 6px rgba(33, 255, 177, 1);
    }
  }

  &:nth-of-type(2) button {
    box-shadow: inset 2px 2px 5px 7px rgba(45, 209, 250, 1);
    background-color: #a8faf7;

    &:hover {
      transform: scale(1.1);
      box-shadow: 2px 2px 18px 6px rgba(33, 225, 255, 1);
    }
  }

  &:last-child button {
    box-shadow: inset 2px 2px 5px 7px rgba(255, 31, 31, 1);
    background-color: #f7888b;

    &:hover {
      transform: scale(1.1);
      box-shadow: 2px 2px 18px 6px rgba(255, 31, 31, 1);
    }
  }
`;

export const Button = styled.button`
  width: 100px;
  font-family: inherit;
  text-transform: capitalize;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
