import { expect } from 'chai';
import { IWalletAddress, WalletAddressStorage } from '../../../src/models/walletAddress';

describe('WalletAddress Model', function() {
  describe('_apiTransform', () => {
    it('should return transform object with wallet addresses', () => {
      let walletAddress: IWalletAddress = {
        address: '2NA2xTdQH6CG73Gc26oQZ7FEmvTx9Kwo7uf'
      } as IWalletAddress;

      const result = WalletAddressStorage._apiTransform(walletAddress);
      expect(result).to.deep.equal({ address: '2NA2xTdQH6CG73Gc26oQZ7FEmvTx9Kwo7uf' });
    });
  });
});
