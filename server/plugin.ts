/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CoreSetup,
  CoreStart,
  Plugin,
  PluginInitializerContext,
} from 'opensearch-dashboards/server';
import { ConfigSchema } from '../common/config';

export class GaServerPlugin implements Plugin<object, object> {
  readonly _initializerContext: PluginInitializerContext<ConfigSchema>;
  constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
    this._initializerContext = initializerContext;
  }

  public setup(core: CoreSetup) {
    return {};
  }

  public start(core: CoreStart) {
    return {};
  }

  public stop() {}
}
