import styled from '@emotion/styled';

export const CarouselContainer = styled.div`
  & .carousel * {
    background: none;
    user-select: none;
  }

  & .thumbs-wrapper,
  .thumbs.animated {
    margin: 0 !important;
    padding: 5px 5px 0 0;

    @media (max-width: 1025px) and (orientation: landscape) {
      .thumb {
        width: 50px;
      }
    }

    @media (max-width: 1025px) and (orientation: portrait) {
      .thumb {
        width: 50px;
      }

      padding: 3px 0 0 0;
    }
  }
`;
