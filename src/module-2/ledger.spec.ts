import { ledger } from '../data/ledger';
import AccountDaily from '../@types/AccountDaily';
import {reduceAccountDaily} from './ledger';

const ACCOUNT_TO_PROBE = "101.0001 cash";
const ACCOUNT_DAYS_COUNT = 31;

const ACCOUNT_TO_CREDIT = "311.0001 income";
const ACCOUNT_TOTAL_CREDIT = 304964;

const ACCOUNT_TO_DEBIT = "103.0001 bank";
const ACCOUNT_TOTAL_DEBIT = 336205;

describe("general ledger reducer accountDaily", () => {
  it("creates array for each day", () => {
    const result = reduceAccountDaily(ACCOUNT_TO_PROBE, ledger);
    expect(result.length).toBe(ACCOUNT_DAYS_COUNT);
  });

  it("collects all credits for an account", () => {
    const result = reduceAccountDaily(ACCOUNT_TO_CREDIT, ledger);
    const total = result.reduce((a: number, b: AccountDaily) => a + b.creditDayTotal, 0);
    expect(Math.floor(total)).toBe(ACCOUNT_TOTAL_CREDIT);
  });


  it("collects all debits for an account", () => {
    const result = reduceAccountDaily(ACCOUNT_TO_DEBIT, ledger);
    const total = result.reduce((a, b) => a + b.creditDayTotal, 0);
    expect(Math.floor(total)).toBe(ACCOUNT_TOTAL_DEBIT);
  });
});
