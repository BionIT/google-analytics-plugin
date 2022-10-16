/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { PluginInitializerContext } from 'opensearch-dashboards/public';
import { GoogleAnalyticsPlugin } from './plugin';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GoogleAnalyticsPluginStart {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GoogleAnalyticsPluginSetUp {}

export function plugin(initializerContext: PluginInitializerContext) {
  return new GoogleAnalyticsPlugin(initializerContext);
}
