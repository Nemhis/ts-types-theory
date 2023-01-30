export default interface AccountDaily {
    date: string; // Этот день.
    debitDayTotal: number; //Сумма amount всех записей журнала за этот день, где указанный счёт дебетуется.
    creditDayTotal: number;  // Сумма amount все записей журнала за этот день, где указанный счёт кредитуется.
}