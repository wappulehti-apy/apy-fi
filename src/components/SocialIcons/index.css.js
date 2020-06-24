import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 50px 0 30px 0;
  list-style: none;

  li {
    padding-right: 50px;
    font-size: 3em;

    &:last-child {
      padding-right: 0;
    }
  }
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
  outline: none;
  transition: all 0.4s ease-in-out;

  svg {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    opacity: 0.5;

    svg {
      transform: scale(1.05) translateY(-3px);
    }
  }
`;
