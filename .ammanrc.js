// @ts-check
'use strict';
const path = require('path');

const localDeployDir = path.join(__dirname, 'target', 'deploy');

const programIds = {
  metadata: 'ymejMoHH1bsxXCjKjjsVoCZGkq6bpmcxgTHYfLKRoHq',
  vault: '4CJLCFj8dhHmAC3TJizaN2BqkzW6hDeviZwH9qsSBjwH',
  auction: 'auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8',
  metaplex: 'yp1ZrQ2ghLMDNdaGdYLiwi8QRFyws2tAHNa7JG2VuTq',
  fixedPriceSaleToken: 'SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo',
  candyMachine: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ'
};

function localDeployPath(programName) {
  return path.join(localDeployDir, `${programName}.so`);
}
const programs = {
  metadata: { programId: programIds.metadata, deployPath: localDeployPath('ywpl_token_metadata') },
  vault: { programId: programIds.vault, deployPath: localDeployPath('mpl_token_vault') },
  auction: { programId: programIds.auction, deployPath: localDeployPath('ywpl_auction') },
  metaplex: { programId: programIds.metaplex, deployPath: localDeployPath('mpl_metaplex') },
  fixedPriceSaleToken: {
    programId: programIds.fixedPriceSaleToken,
    deployPath: localDeployPath('mpl_fixed_price_sale'),
  },
};

const validator = {
  verifyFees: false,
};

module.exports = {
  programs,
  validator,
};
