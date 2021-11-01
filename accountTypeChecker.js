/** 
 * example of input argument
  const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]
 */

/**
 * have made few assumptions for below function
 * 1. input argument should be of type array.
 * 2. the given array should contain atleast 2 or 3 months of data. It should not contain any missing month data.
 * 3. array is already sorted on month number.
 */
const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory}
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/
  let result = "B";
  if (accountBalanceHistory.length === 2) {
    return result;
  } else if (accountBalanceHistory.length > 2) {
    const fixedAmount =
      accountBalanceHistory[1].account.balance.amount -
      accountBalanceHistory[0].account.balance.amount;
    accountBalanceHistory.slice(1).map(function (n, i) {
      const getDiff =
        n.account.balance.amount -
        accountBalanceHistory[i].account.balance.amount;
      if (getDiff !== fixedAmount) {
        result = "A";
      }
    });
    return result;
  }
};

/**
 * Note:
 * 1. yes it solves the basic case.
 * 2. We can modify the given data structure for optimization. Also we should consider year-wise data.
 * 3. unit tests:
 *  a. validate the function with different typeof argument.
 *  b. validate the result on empty array.
 *  c. validate the result with multiple records.
 *  d. validate the result with balance amount decreases by varying amounts each month.
 *  e. validate the result with balance amount changes by the same amount each month.
 *  f. check if argument passed contains field "amount" with proper data type.
 */
