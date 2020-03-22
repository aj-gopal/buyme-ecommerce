// Navbar contrast options
export const setNavbarTheme = function(currentPage, theme) {
  var navbar = currentPage.previousElementSibling;
  navbar.className = "navbar navbar-expand-sm navbar-dark bg-" + theme;
};

export const getQueryParams = function(params, url) {
  let href = url;
  let reg = new RegExp("[?&]" + params + "=([^&#]*)", "i");
  let queryString = reg.exec(href);
  return queryString ? queryString[1] : null;
};
