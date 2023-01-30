type ReferenceId = 'invoice' | 'promo' | 'order' | 'payment' | 'letter';

export default interface LedgerEntity {
    generalLedgerId: number;
    posted: string;
    debitAccountId: string;
    creditAccountId: string;
    amount: number;
    referenceId: ReferenceId;
}