/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConfigSchema } from '../common/config';
import { Plugin, PluginInitializerContext, CoreSetup, CoreStart } from '../../../src/core/public';
import { GoogleAnalyticsPluginSetUp, GoogleAnalyticsPluginStart } from './index';
import ReactGA from 'react-ga4';

export class GoogleAnalyticsPlugin
  implements Plugin<GoogleAnalyticsPluginSetUp, GoogleAnalyticsPluginStart> {
  constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
    // can retrieve config from initializerContext
    const { trackingID } = initializerContext.config.get();
    ReactGA.initialize(trackingID);
    ReactGA.send("pageview");
  }

  public setup(core: CoreSetup): GoogleAnalyticsPluginSetUp {
    return {};
  }

  public start(core: CoreStart): GoogleAnalyticsPluginStart {
    return {};
  }
}
