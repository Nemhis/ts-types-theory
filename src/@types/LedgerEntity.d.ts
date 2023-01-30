type ReferenceId = 'invoice' | 'promo' | 'order' | 'payment' | 'letter' | 'campaign';

export default interface LedgerEntity {
    generalLedgerId: number;
    posted: string;
    debitAccountId: string;
    creditAccountId: string;
    amount: number;
    referenceId: string;
}