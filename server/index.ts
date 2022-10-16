/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PluginConfigDescriptor, PluginInitializerContext } from 'opensearch-dashboards/server';
import { GaServerPlugin } from './plugin';
import { configSchema, ConfigSchema } from '../config';

export const config: PluginConfigDescriptor<ConfigSchema> = {
  exposeToBrowser: {
    trackingID: true,
  },
  schema: configSchema,
};

export const plugin = (initializerContext: PluginInitializerContext) =>
  new GaServerPlugin(initializerContext);
