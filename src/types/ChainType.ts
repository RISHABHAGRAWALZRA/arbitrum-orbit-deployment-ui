export const ChainType = {
  Rollup: 'Rollup',
  AnyTrust: 'AnyTrust',
  Avail: 'AvailDA'
} as const;

export type ChainType = (typeof ChainType)[keyof typeof ChainType];
