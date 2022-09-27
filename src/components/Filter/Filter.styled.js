import styled from '@emotion/styled';
export const Form = styled.form``;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
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
