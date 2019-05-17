import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 30px 0;
  margin: 0;

  li {
    font-size: 3em;
    padding-right: 50px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.4s ease-in-out;
  outline: none;

  svg {
    transition: all 0.2s ease-in-out;
    transform: scale(1);
  }

  &:hover {
    opacity: 0.5;

    svg {
      transform: scale(1.05) translateY(-3px);
    }
  }
`;
