// set up the Expense object here first
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[]; // an array of the Expense object we defined above
  onDelete: (id: number) => void; // the id comes from the Expense object
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  // do not display a table if there are no expenses
  if (expenses.length === 0) return null;
  // else, we draw the table
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* we create a tr for every expense in the expenses array */}
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              {/*
              the onDelete function is actually defined within the APP, not the component,
              but we are passing the expense.id value through this component
              */}
              <button
                onClick={() => onDelete(expense.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            {/*
            this next function takes the expenses and creates an accumulator variable (not any kind of special variable, just a number)
            the function then loops through the expenses in the table (which are saved in the App's state variable)
            and "accumulates" the expense.amount, starting at Zero. the chained .toFixed function rounds to 2 decimal places
            */}
            $
            {expenses
              .reduce((accumulator, expense) => expense.amount + accumulator, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
