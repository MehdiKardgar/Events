import { useRef } from "react";

import Button from "../ui/button";

import classes from "./events-search.module.css";

export default function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>

      <Button>Find Events</Button>
    </form>
  );
}

// //
// .form {
//   margin: 2rem auto;
//   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
//   padding: 1rem;
//   background-color: white;
//   border-radius: 6px;
//   width: 90%;
//   max-width: 40rem;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   gap: 1rem;
// }

// .controls {
//   width: 100%;
//   display: flex;
//   gap: 1rem;
//   flex-direction: column;
// }

// .control {
//   flex: 1;
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   justify-content: space-between;
// }

// .control label {
//   font-weight: bold;
// }

// .control select {
//   font: inherit;
//   background-color: white;
//   border-radius: 6px;
//   width: 70%;
//   padding: 0.25rem;
// }

// .form button {
//   width: 100%;
//   font: inherit;
//   padding: 0.25rem 0.5rem;
//   background-color: #03be9f;
//   border: 1px solid #03be9f;
//   color: #dafff7;
//   border-radius: 4px;
// }

// @media (min-width: 768px) {
//   .form {
//     flex-direction: row;
//   }

//   .controls {
//     width: 80%;
//     flex-direction: row;
//   }

//   .control select {
//     width: 100%;
//   }

//   .form button {
//     width: 20%;
//   }
// }
