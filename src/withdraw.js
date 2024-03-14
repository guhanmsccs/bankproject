import React, { useState } from "react";
import styles from './App.module.css';
import { useContext } from "react";
import MyContext from "./Mycontext";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  let ctx = useContext(MyContext);
  let index = 0;
  let userbalance = 0;
  let i = 0;
  for (i = 0; i < ctx.currentUser.length; i++) {
    index = ctx.users.findIndex(user => user.email === ctx.currentUser[i].email)
    userbalance = ctx.currentUser[i].balance;
  }
  console.log(ctx.currentUser)
  const [balance, setBalance] = useState(userbalance);


  const handleTransactions = (e) => {
    e.preventDefault();
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount to withdraw");
      return;
    }

    if (amount > balance) {
      setError(`Insufficient balance. Your balance is ${balance}`);
      return;
    }

    let bala = userbalance - Number(amount);
    setBalance(bala);
    ctx.users[index].balance = bala;
    setError(`Successfully withdraw ${amount}`);
    setAmount("");

    // Displaying an alert message
    alert(`Successfully withdraw ${amount}`);
  };

  return (
    <>
      <div className={styles.withdraw}>
        <div key="balance">Account Balance: ${balance}</div>
        <input className={styles.input}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button className={styles.btn} type="submit" onClick={handleTransactions}>
          Submit
        </button>
      </div>
      <div className={styles.withdraws}>
        <p>{error}</p>
      </div>
    </>
  );
}
