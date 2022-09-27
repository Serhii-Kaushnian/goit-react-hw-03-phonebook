import styled from '@emotion/styled';
export const ContactsListWrapper = styled.div`
  min-width: 420px;
  background-color: #fff;
  border-radius: 6px;
  background: #e0e0e0;
  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 35px;

  margin-bottom: 20px;
`;
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  font-size: 20px;
  padding: 5px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ItemContainerSpan = styled.span`
  margin-left: 10px;
  font-weight: 800;
`;
export const Button = styled.button`
  border: none;
  font-size: 15px;
  padding: 5px;
  margin-left: 20px;
  border-radius: 6px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;
  &:focus,
  &:hover {
    outline: 1px solid aqua;
  }
`;
