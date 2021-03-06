export class Defaults {
  static DEFAULT_DATE_DISPLAY_FORMAT = '%d/%m/%Y %H:%M:%S %Z';
  static DEFAULT_THOUSAND_SEPARATOR = ',';
  static DEFAULT_DECIMAL_SEPARATOR = '.';
  static DEFAULT_CURRENCY_LOCATION: 'after' | 'before' = 'after';
  static FLOATING_PRECISION = 2;
  static RPC_ENDPOINT = 'http://localhost:8545';
  static BALANCE_SAVE_FREQUENCY = 24;
  static ANONYMIZED_LOGS = false;
  static HISTORICAL_DATA_START = '01/08/2015';
  static ANONYMOUS_USAGE_ANALYTICS = true;
  static KRAKEN_DEFAULT_ACCOUNT_TYPE = 'starter';
}

export const EXCHANGE_POLONIEX = 'poloniex';
export const EXCHANGE_KRAKEN = 'kraken';
export const EXCHANGE_BITTREX = 'bittrex';
export const EXCHANGE_BITMEX = 'bitmex';
export const EXCHANGE_BINANCE = 'binance';
export const EXCHANGE_COINBASE = 'coinbase';
export const EXCHANGE_COINBASEPRO = 'coinbasepro';
export const EXCHANGE_GEMINI = 'gemini';
export const EXCHANGE_CRYPTOCOM = 'crypto.com';

export const EXCHANGE_UNISWAP = 'uniswap';
export const TRADE_LOCATION_EXTERNAL = 'external';

export const exchanges = [
  EXCHANGE_POLONIEX,
  EXCHANGE_KRAKEN,
  EXCHANGE_BITTREX,
  EXCHANGE_BITMEX,
  EXCHANGE_BINANCE,
  EXCHANGE_COINBASE,
  EXCHANGE_COINBASEPRO,
  EXCHANGE_GEMINI,
  EXCHANGE_CRYPTOCOM
] as const;
