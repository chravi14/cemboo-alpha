export const replaceLocation = (url: string) => {
  window.location.replace(url);
};

export const isLinkActive = (linkPath: string) => {
  return window.location.pathname === linkPath;
};
