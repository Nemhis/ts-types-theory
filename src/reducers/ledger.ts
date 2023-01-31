import AccountDaily from '../@types/AccountDaily';
type LedgerType = { debitAccountId: string; creditAccountId: string; posted: string; amount: number; };

export const AccountDailyReducer = (accountId: string, ledger: LedgerType[]): AccountDaily[] =>  {
    return ledger
        .filter((entity: LedgerType) => entity.debitAccountId || entity.creditAccountId === accountId)
        .map((entity: LedgerType): AccountDaily => ({
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
