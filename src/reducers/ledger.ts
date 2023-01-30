import AccountDaily from '../@types/AccountDaily';
import LedgerEntity from '../@types/LedgerEntity';
export const AccountDailyReducer = (accountId: string, ledger: LedgerEntity[]): AccountDaily[] =>  {
    return ledger
        .filter((ledgerEntity: LedgerEntity) => ledgerEntity.debitAccountId || ledgerEntity.creditAccountId === accountId)
        .map((entity: LedgerEntity): AccountDaily => ({
            date: formatDate(new Date(entity.posted)),
            debitDayTotal: entity.debitAccountId === accountId ? entity.amount : 0,
            creditDayTotal: entity.creditAccountId === accountId ? entity.amount : 0,
        }))
        .reduce((total: AccountDaily[], entity: AccountDaily): AccountDaily[] => {
            const daily = total.find(({ date }) => date === entity.date);

            if (daily) {
                daily.debitDayTotal += entity.debitDayTotal;
                daily.creditDayTotal += entity.creditDayTotal;
            } else {
                total.push(entity);
            }

            return total;
        }, [])
}

const formatDate = (date: Date): string => `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;