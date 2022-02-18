import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > :nth-child(2) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
