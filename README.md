This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Bootstrap for stlying

App Can be viewed here [Bank Details Lookup](https://spanaik.github.io/Bank-Details-Lookup/)

Bank Details Lookup App
===================

This is a react app that fetched and show the bank details

Interface
=========

Has two input, to select the city, and a filter term, post selection the App makes a call to [https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA](https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA) which inturn returns a JSON Array with the following data

Response
--------

```json
[
  {
    "ifsc": "DBSS0IN0828",
    "bank_id": 130,
    "branch": "KOLKATA",
    "address": "4A, NANDLAL BASU SARANI KOLKATA 700071",
    "city": "KOLKATA",
    "district": "KOLKATA",
    "state": "WEST BENGAL",
    "bank_name": "DEVELOPMENT BANK OF SINGAPORE"
  }
  ....
]
```

The state is managed by Redux, asynchronous data fetching is provided by Redux Thunk.
