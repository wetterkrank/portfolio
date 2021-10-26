import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  boxShadow: css`
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus {
      box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.4);
    }
  `,
};

export default mixins;
