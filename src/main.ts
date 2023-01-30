import { ledger } from './mocks/ledger';
import AccountDaily from './@types/AccountDaily';
import {AccountDailyReducer} from './reducers/ledger';

const total: AccountDaily[] = AccountDailyReducer('311.0001 income', ledger);

console.log(total);
