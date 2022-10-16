/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConfigSchema } from '../config';
import { Plugin, PluginInitializerContext, CoreSetup, CoreStart } from '../../../src/core/public';
import { GoogleAnalyticsPluginSetUp, GoogleAnalyticsPluginStart } from './index';
import { renderApp } from './app';

export class GoogleAnalyticsPlugin
  implements Plugin<GoogleAnalyticsPluginSetUp, GoogleAnalyticsPluginStart> {
  private readonly _initializerContext: PluginInitializerContext<ConfigSchema>;

  constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
    // can retrieve config from initializerContext
    this._initializerContext = initializerContext;
  }

  public setup(core: CoreSetup): GoogleAnalyticsPluginSetUp {
    const config = this.config;
    return { config };
  }

  public start(core: CoreStart): GoogleAnalyticsPluginStart {
    const { trackingID } = this._initializerContext.config.get();
    renderApp(trackingID);
    return {};
  }
}
