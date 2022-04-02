import constants from "./constants";
import eng from "./en.json";
import ban from "./bn.json";

const locales = {
  en: { ...constants, ...eng }
};

export default locales;