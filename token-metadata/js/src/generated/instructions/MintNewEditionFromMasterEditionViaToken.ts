/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import {
  MintNewEditionFromMasterEditionViaTokenArgs,
  mintNewEditionFromMasterEditionViaTokenArgsBeet,
} from '../types/MintNewEditionFromMasterEditionViaTokenArgs';

/**
 * @category Instructions
 * @category MintNewEditionFromMasterEditionViaToken
 * @category generated
 */
export type MintNewEditionFromMasterEditionViaTokenInstructionArgs = {
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};
/**
 * @category Instructions
 * @category MintNewEditionFromMasterEditionViaToken
 * @category generated
 */
const MintNewEditionFromMasterEditionViaTokenStruct = new beet.BeetArgsStruct<
  MintNewEditionFromMasterEditionViaTokenInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    [
      'mintNewEditionFromMasterEditionViaTokenArgs',
      mintNewEditionFromMasterEditionViaTokenArgsBeet,
    ],
  ],
  'MintNewEditionFromMasterEditionViaTokenInstructionArgs',
);
/**
 * Accounts required by the _MintNewEditionFromMasterEditionViaToken_ instruction
 *
 * @property [_writable_] newMetadata New Metadata key (pda of ['metadata', program id, mint id])
 * @property [_writable_] newEdition New Edition (pda of ['metadata', program id, mint id, 'edition'])
 * @property [_writable_] masterEdition Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
 * @property [_writable_] newMint Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
 * @property [_writable_] editionMarkPda Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
 * @property [**signer**] newMintAuthority Mint authority of new mint
 * @property [**signer**] payer payer
 * @property [**signer**] tokenAccountOwner owner of token account containing master token (#8)
 * @property [] tokenAccount token account containing token from master metadata mint
 * @property [] newMetadataUpdateAuthority Update authority info for new metadata
 * @property [] metadata Master record metadata account
 * @category Instructions
 * @category MintNewEditionFromMasterEditionViaToken
 * @category generated
 */
export type MintNewEditionFromMasterEditionViaTokenInstructionAccounts = {
  newMetadata: web3.PublicKey;
  newEdition: web3.PublicKey;
  masterEdition: web3.PublicKey;
  newMint: web3.PublicKey;
  editionMarkPda: web3.PublicKey;
  newMintAuthority: web3.PublicKey;
  payer: web3.PublicKey;
  tokenAccountOwner: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  newMetadataUpdateAuthority: web3.PublicKey;
  metadata: web3.PublicKey;
};

const mintNewEditionFromMasterEditionViaTokenInstructionDiscriminator = 11;

/**
 * Creates a _MintNewEditionFromMasterEditionViaToken_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MintNewEditionFromMasterEditionViaToken
 * @category generated
 */
export function createMintNewEditionFromMasterEditionViaTokenInstruction(
  accounts: MintNewEditionFromMasterEditionViaTokenInstructionAccounts,
  args: MintNewEditionFromMasterEditionViaTokenInstructionArgs,
) {
  const {
    newMetadata,
    newEdition,
    masterEdition,
    newMint,
    editionMarkPda,
    newMintAuthority,
    payer,
    tokenAccountOwner,
    tokenAccount,
    newMetadataUpdateAuthority,
    metadata,
  } = accounts;

  const [data] = MintNewEditionFromMasterEditionViaTokenStruct.serialize({
    instructionDiscriminator: mintNewEditionFromMasterEditionViaTokenInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: newMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: newEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: masterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: newMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: editionMarkPda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: newMintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: tokenAccountOwner,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: tokenAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: newMetadataUpdateAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
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

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('ymejMoHH1bsxXCjKjjsVoCZGkq6bpmcxgTHYfLKRoHq'),
    keys,
    data,
  });
  return ix;
}
