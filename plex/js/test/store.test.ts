import test from 'tape';
import { SetStore } from '../src/transactions';
import { Store } from '../src/accounts/Store';
import { connectionURL } from './utils';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { airdrop, ConfirmedTransactionDetails, PayerTransactionHandler } from '@metaplex-foundation/amman';

test('set-store', async (t: { ok: (arg0: ConfirmedTransactionDetails, arg1: string) => void; }) => {
  const payer = Keypair.generate();
  const connection = new Connection(connectionURL, 'confirmed');
  const transactionHandler = new PayerTransactionHandler(connection, payer);
  await airdrop(connection, payer.publicKey, 2);

  const storeId = await Store.getPDA(payer.publicKey);
  const tx = new SetStore(
    { feePayer: payer.publicKey },
    {
      admin: new PublicKey(payer.publicKey),
      store: storeId,
      isPublic: true,
    },
  );
  tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
  const txId = await transactionHandler.sendAndConfirmTransaction(tx, [payer], {
    skipPreflight: true,
  });
  t.ok(txId, 'a txId should be returned');
});
