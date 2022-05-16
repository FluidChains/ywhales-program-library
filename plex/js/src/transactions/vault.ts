import { PublicKey } from '@solana/web3.js';
import { config } from '@fluidchains/ywpl-core';

export const VaultProgram = {
  PUBKEY: new PublicKey(config.programs.vault),
};

export type ParamsWithStore<P> = P & { store: PublicKey };
