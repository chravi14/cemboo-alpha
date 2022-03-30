const defaultStyles = `
    line-height: 1.5;
`;

export const types = {
  headers: {
    main: `
        ${defaultStyles}
        font-weight: 700;
        font-size: 64px;
        @media screen and (max-width: 768px) {
            font-size: 48px;
        }
        `,
    secondary: `
        ${defaultStyles}
        font-weight: 700;
        font-size: 48px;
        @media screen and (max-width: 768px) {
            font-size: 32px;
        }
     `,
    section: `
        ${defaultStyles}
        font-weight: 700;
        font-size: 32px;
        @media screen and (max-width: 768px) {
            font-size: 24px;
        }
    `,
    item: `
        ${defaultStyles}
        font-weight: 700;
        font-size: 24px;
        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    `,
  },
  body: {
    title: `
        ${defaultStyles}
        font-weight: 400;
        font-size: 32px;
        @media screen and (max-width: 768px) {
            font-size: 28px;
        }
    `,
    secondaryTitle: `
        ${defaultStyles}
        font-weight: 400;
        font-size: 24px;
        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    `,
    subtitle: `
        ${defaultStyles}
        font-weight: 400;
        font-size: 16px;
        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
     `,
    normal: `
        ${defaultStyles}
        font-weight: 400;
        font-size: 14px;
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    `,
    label: `
        ${defaultStyles}
        font-weight: 400;
        font-size: 16px;
        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    `,
  },
};
