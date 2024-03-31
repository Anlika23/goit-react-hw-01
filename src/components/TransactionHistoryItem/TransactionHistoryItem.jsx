// import css from '../TransactionHistoryItem/TransactionHistoryItem.module.css';
import css from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
        <tr className={css.tableItem}>
            <td className={css.column}>{type}</td>
            <td className={css.column}>{amount}</td>
            <td className={css.column}>{currency}</td>
        </tr>
    );
};

export default TransactionHistoryItem;