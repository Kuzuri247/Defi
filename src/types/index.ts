export interface Token {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
}

export interface Pool {
  id: string;
  token0: string;
  token1: string;
  apr: number;
  tvl: number;
  volume24h: number;
}

export interface StakingPool {
  id: string;
  token: string;
  apr: number;
  totalStaked: number;
  duration: number;
}

export interface WalletState {
  connected: boolean;
  address: string | null;
  balance: number;
}