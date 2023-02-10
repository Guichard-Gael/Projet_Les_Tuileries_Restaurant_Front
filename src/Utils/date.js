/* eslint-disable import/prefer-default-export */

/** fonction qui transnforme la date reçu de l'API' en une date J/M/YYYY */
export const tarnsformDate = (dateToTransform) => {
  const date = new Date(dateToTransform);
  const dateToDisplay = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
  return dateToDisplay;
};

export const currentYear = () => {
  const date = new Date();
  const actualYear = date.getFullYear();
  return actualYear;
};
