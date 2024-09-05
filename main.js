import {
  URL_TYPE1,
  URL_TYPE2,
  URL_TYPE3,
  COLUMNS_TYPE1,
  COLUMNS_TYPE2,
  COLUMNS_TYPE3,
} from "./constants.js";

(function inputForm() {
  let columns;

  if (location.href.match(URL_TYPE1)) {
    columns = COLUMNS_TYPE1;
  } else if (location.href.match(URL_TYPE2)) {
    columns = COLUMNS_TYPE2;
  } else if (location.href.match(URL_TYPE3)) {
    columns = COLUMNS_TYPE3;
  }

  if (!columns) {
    return;
  }

  for (let id in columns) {
    const element = document.getElementById(id);
    if (element) {
      element.value = columns[id];
    }
  }
})();
