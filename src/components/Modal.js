import React, { useState } from "react";
import api from "../../src/utils/api";

export default function Modal({
  handleClose,
  show,
  worker,
  setServiceWorkers
}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [user, setUser] = useState({
    username: worker.username,
    company: worker.company,
    balance: worker.balance
  });
  const [tip, setTip] = useState({
    balance: ""
  });
  const changeHandler = e => {
    setTip({
      [e.target.name]: e.target.value
    });
  };
  const blurHandle = e => {
    setUser({
      ...user,
      balance: addBalance(tip, user)
    });
  };
  function addBalance(tip, initial) {
    return parseInt(initial.balance) + parseInt(tip.balance);
  }
  const submitHandler = e => {
    e.preventDefault();
    if (Math.sign(parseInt(tip.balance)) === -1) {
      alert("Tip Cannot Be A Negative Number");
      setTip({
        balance: ""
      });
    } else {
      api()
        .put(`/api/customers/${worker.id}/tip`, user)
        .then(res => {
          api()
            .get("/api/serviceworker/")
            .then(response => setServiceWorkers(response.data))
            .catch(err => console.log(err));
          alert(`Tip Added for ${worker.FirstName} ${worker.LastName}!`);
          setTip({
            balance: ""
          });
        })
        .catch(error => console.log(error));
    }
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        Current Amount: ${worker.balance}
        <div>
          <form onSubmit={submitHandler}>
            <input
              type="number"
              id="TipAmount"
              onChange={changeHandler}
              name="balance"
              value={tip.balance}
              placeholder="$ Tip Amount"
              onBlur={blurHandle}
            />
            <button className="ModalUpdate" onClick={handleClose}>
              Add Tip
            </button>
          </form>
          <button className="ModalClose" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
