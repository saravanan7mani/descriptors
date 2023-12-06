// Copyright (c) 2023 Jose-Luis Landabaso - https://bitcoinerlab.com
// Distributed under the MIT software license

import type { Psbt } from 'bitcoinjs-lib';
import type { ECPairInterface } from 'ecpair';
import type { BIP32Interface } from 'bip32';

export function signInputECPair({
  psbt,
  index,
  ecpair
}: {
  psbt: Psbt;
  index: number;
  ecpair: ECPairInterface;
}): void {
  psbt.signInput(index, ecpair);
}
export function signECPair({
  psbt,
  ecpair
}: {
  psbt: Psbt;
  ecpair: ECPairInterface;
}): void {
  psbt.signAllInputs(ecpair);
}
export function signInputBIP32({
  psbt,
  index,
  node
}: {
  psbt: Psbt;
  index: number;
  node: BIP32Interface;
}): void {
  psbt.signInputHD(index, node);
}
export function signBIP32({
  psbt,
  masterNode
}: {
  psbt: Psbt;
  masterNode: BIP32Interface;
}): void {
  psbt.signAllInputsHD(masterNode);
}
