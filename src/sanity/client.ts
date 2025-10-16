
import { createClient } from '@sanity/client';
import { getSanityConfig, isSanityConfigured as isConfigured } from './env';


function createMockClient(): ReturnType<typeof createClient> {
  console.warn('Sanity config is missing or invalid. Using mock client. All CMS data will be null.');
  const mock = {
    fetch: () => Promise.resolve(null),
  };
  // Return a proxy that allows chaining and returns null for any method
  return new Proxy(mock, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return () => new Proxy(() => {}, { get: () => (() => {}) });
    },
  }) as any;
}

let _client: ReturnType<typeof createClient> | undefined;

export function getSanityClient(): ReturnType<typeof createClient> {
  if (_client) return _client;
  const config = getSanityConfig();
  if (!config) {
    _client = createMockClient();
    return _client;
  }
  _client = createClient(config);
  return _client;
}

export const isSanityConfigured = isConfigured;

const client = new Proxy({} as ReturnType<typeof createClient>, {
  get(_t, prop, receiver) {
    const inst = getSanityClient();
    return Reflect.get(inst, prop, receiver);
  },
});

export default client;
