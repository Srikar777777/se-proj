const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AeBVD0KyBwovxx3SygFJe5gsyYBYkcTdgekrqF6MIQZu-CwmopdyyfnyW8ybcVfKlVbdlLApp5dszG11",
  client_secret: "EBSlb9LEhKOl3Y9BAIjDlNnnQL0qhRSNtsHTKw4CbiKYhaX72dzuWCDRdBVmi1GcT6Z6-3NYoiDkqUUp",
});

module.exports = paypal;