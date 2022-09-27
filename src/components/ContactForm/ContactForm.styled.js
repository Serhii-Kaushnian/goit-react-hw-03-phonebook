import styled from '@emotion/styled';

export const ContactsWrapper = styled.div`
  margin-bottom: 20px;
  width: 380px;
`;
export const Title = styled.h1`
  margin: 0;
  font-size: 35px;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Input = styled.input`
  margin-top: 5px;
  font-size: 22px;
  border: none;
  padding: 5px;
  border-radius: 6px;
  background: #e0e0e0;
  box-shadow: inset 5px 5px 13px #5a5a5a, inset -5px -5px 13px #ffffff;
  &:focus,
  &:hover {
    outline: 1px solid aqua;
  }
`;
export const Button = styled.button`
  border: none;
  font-size: 20px;
  padding: 5px;
  border-radius: 6px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;
  &:focus,
  &:hover {
    outline: 1px solid aqua;
  }
`;
