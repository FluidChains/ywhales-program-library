/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { UtilizeArgs, utilizeArgsBeet } from '../types/UtilizeArgs';

/**
 * @category Instructions
 * @category Utilize
 * @category generated
 */
export type UtilizeInstructionArgs = {
  utilizeArgs: UtilizeArgs;
};
/**
 * @category Instructions
 * @category Utilize
 * @category generated
 */
const UtilizeStruct = new beet.BeetArgsStruct<
  UtilizeInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['utilizeArgs', utilizeArgsBeet],
  ],
  'UtilizeInstructionArgs',
);
/**
 * Accounts required by the _Utilize_ instruction
 *
 * @property [_writable_] metadata Metadata account
 * @property [_writable_] tokenAccount Token Account Of NFT
 * @property [_writable_] mint Mint of the Metadata
 * @property [**signer**] useAuthority A Use Authority / Can be the current Owner of the NFT
 * @property [] owner Owner
 * @property [_writable_] useAuthorityRecord (optional) Use Authority Record PDA If present the program Assumes a delegated use authority
 * @property [] burner (optional) Program As Signer (Burner)
 * @category Instructions
 * @category Utilize
 * @category generated
 */
export type UtilizeInstructionAccounts = {
  metadata: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  mint: web3.PublicKey;
  useAuthority: web3.PublicKey;
  owner: web3.PublicKey;
  useAuthorityRecord?: web3.PublicKey;
  burner?: web3.PublicKey;
};

const utilizeInstructionDiscriminator = 19;

/**
 * Creates a _Utilize_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Utilize
 * @category generated
 */
export function createUtilizeInstruction(
  accounts: UtilizeInstructionAccounts,
  args: UtilizeInstructionArgs,
) {
  const { metadata, tokenAccount, mint, useAuthority, owner, useAuthorityRecord, burner } =
    accounts;

  const [data] = UtilizeStruct.serialize({
    instructionDiscriminator: utilizeInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: useAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: owner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (useAuthorityRecord != null) {
    keys.push({
      pubkey: useAuthorityRecord,
      isWritable: true,
      isSigner: false,
    });
  }

  if (burner != null) {
    if (useAuthorityRecord == null) {
      throw new Error(
        "When providing 'burner' then 'useAuthorityRecord' need(s) to be provided as well.",
      );
    }
    keys.push({
      pubkey: burner,
      isWritable: false,
      isSigner: false,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('ymejMoHH1bsxXCjKjjsVoCZGkq6bpmcxgTHYfLKRoHq'),
    keys,
    data,
  });
  return ix;
}
