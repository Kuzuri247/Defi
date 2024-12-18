import React, { useContext, useState } from "react";
import { Coins } from "lucide-react";
import {
  useConnection,
  useWallet,
  WalletContext,
} from "@solana/wallet-adapter-react";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import {
  createAssociatedTokenAccountInstruction,
  createInitializeMetadataPointerInstruction,
  createInitializeMintInstruction,
  createMintToInstruction,
  ExtensionType,
  getAssociatedTokenAddressSync,
  getMintLen,
  LENGTH_SIZE,
  TOKEN_2022_PROGRAM_ID,
  TYPE_SIZE,
} from "@solana/spl-token";
import { createInitializeInstruction, pack } from "@solana/spl-token-metadata";

export function Mint() {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");

  const wallet = useWallet();
  const { connection } = useConnection();
  const { publicKey } = useContext(WalletContext);

  async function createToken() {
    const name = tokenName;
    const symbol = tokenSymbol;
    const imageURL =
      "https://imgs.search.brave.com/1raKgl7avs5XHC9AQ4qkzxtFti7j5Od4_FgiayIXvdQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmRh/aWx5bWFpbC5jby51/ay9pL25ld3BpeC8y/MDE4LzAzLzIzLzIx/LzRBNzM4QTE2MDAw/MDA1NzgtNTUzODA5/NS1pbWFnZS1tLTc1/XzE1MjE4NDEwMzM1/ODAuanBn";
    const initialSupply = totalSupply;
    console.log(name, symbol, imageURL, initialSupply);

    const mintKeyPair = Keypair.generate();
    const metaData = {
      mint: mintKeyPair.publicKey,
      name: name,
      symbol: symbol,
      uri: imageURL,
      initialSupply,
      additionalMetadata: [],
    };

    const mintLen = getMintLen([ExtensionType.MetadataPointer]);
    const metaDataLen = TYPE_SIZE + LENGTH_SIZE + pack(metaData).length;
    const totalSizeOfMint = mintLen + metaDataLen;
    const lamports =
      await connection.getMinimumBalanceForRentExemption(totalSizeOfMint);
    console.log(
      "This is the Total Cost of creating the given token: ",
      lamports,
    );
    if (!publicKey || !wallet.publicKey) {
      console.log("Wallet is not Connected!");
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: new PublicKey(publicKey),
        newAccountPubkey: mintKeyPair.publicKey,
        lamports,
        space: mintLen,
        programId: TOKEN_2022_PROGRAM_ID,
      }),
      createInitializeMetadataPointerInstruction(
        mintKeyPair.publicKey,
        wallet.publicKey,
        mintKeyPair.publicKey,
        TOKEN_2022_PROGRAM_ID,
      ),
      createInitializeMintInstruction(
        mintKeyPair.publicKey,
        9,
        wallet.publicKey,
        null,
        TOKEN_2022_PROGRAM_ID,
      ),
      createInitializeInstruction({
        programId: TOKEN_2022_PROGRAM_ID,
        metadata: mintKeyPair.publicKey,
        updateAuthority: wallet.publicKey,
        mint: mintKeyPair.publicKey,
        mintAuthority: wallet.publicKey,
        name: metaData.name,
        symbol: metaData.symbol,
        uri: metaData.uri,
      }),
    );

    transaction.feePayer = wallet.publicKey;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.partialSign(mintKeyPair);

    await wallet.sendTransaction(transaction, connection);

    // const PublicKeyBase58 = mintKeyPair.publicKey.toBase58();

    alert(`Token created -> ${mintKeyPair.publicKey.toBase58()}`);
    console.log("Token created", mintKeyPair.publicKey.toBase58());
    // mintToken();
    const associatedToken = getAssociatedTokenAddressSync(
      mintKeyPair.publicKey,
      wallet.publicKey,
      false,
      TOKEN_2022_PROGRAM_ID,
    );

    console.log(associatedToken.toBase58());

    const transaction2 = new Transaction().add(
      createAssociatedTokenAccountInstruction(
        wallet.publicKey,
        associatedToken,
        wallet.publicKey,
        mintKeyPair.publicKey,
        TOKEN_2022_PROGRAM_ID,
      ),
    );

    await wallet.sendTransaction(transaction2, connection);

    const transaction3 = new Transaction().add(
      createMintToInstruction(
        mintKeyPair.publicKey,
        associatedToken,
        wallet.publicKey,
        1000000000,
        [],
        TOKEN_2022_PROGRAM_ID,
      ),
    );

    await wallet.sendTransaction(transaction3, connection);
  }

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-8 text-3xl font-bold">Mint New Token</h1>

      <div className="rounded-lg bg-gray-800 p-6">
        <div className="mb-6 flex items-center justify-center">
          <div className="rounded-full bg-indigo-600/20 p-4">
            <Coins className="h-8 w-8 text-indigo-400" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Token Name
            </label>
            <input
              type="text"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              placeholder="e.g., My Token"
              className="w-full rounded-lg bg-gray-700 p-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Token Symbol
            </label>
            <input
              type="text"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              placeholder="e.g., MTK"
              className="w-full rounded-lg bg-gray-700 p-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Total Supply
            </label>
            <input
              type="number"
              value={totalSupply}
              onChange={(e) => setTotalSupply(e.target.value)}
              placeholder="e.g., 1000000"
              className="w-full rounded-lg bg-gray-700 p-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            className="mt-6 w-full rounded-lg bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-500"
            onClick={createToken}
          >
            Create Token
          </button>
        </div>
      </div>
    </div>
  );
}
