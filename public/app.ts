/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export const renderApp = (trackingID: string) => {
  const gaScript = document.createElement('script');
  gaScript.setAttribute('nonce', '{nonce}');
  gaScript.setAttribute('async', 'true');
  gaScript.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${trackingID}`);

  const gaScript2 = document.createElement('script');
  gaScript2.innerText = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'${trackingID}\');`;

  // @ts-ignore
  document.documentElement.firstChild.appendChild(gaScript);
  // @ts-ignore
  document.documentElement.firstChild.appendChild(gaScript2);
};
