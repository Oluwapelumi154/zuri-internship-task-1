let { flights } = require("../models/Flight");
const crypto = require("crypto");
exports.bookFlight = (req, res) => {
  const fields = ["title", "price"];
  const { body } = req;
  const flightId = crypto.randomUUID();
  const payloadFields = Object.keys(body);
  for (let field of fields) {
    if (!payloadFields.includes(field)) {
      return res.status(422).json({
        status: "fail",
        message: "Kindly Provide the required fields",
      });
    }
  }
  const date = new Date();
  const departureTime = date.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });
  let flightDate;
  if (date.getDate() < 10 && date.getMonth() < 9) {
    flightDate = `0${date.getDate()}-0${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
  } else if (date.getDate() > 9 && date.getMonth() > 8) {
    flightDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
  } else {
    flightDate = `${date.getDate()}-0${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
  }

  const payload = {
    id: flightId,
    title: body.title,
    price: body.price,
    date: body.date || flightDate,
    time: body.time|| departureTime,
  };
  const flight=flights.find((flight)=>flight.title===payload.title)
  if (flight) {
    return res.status(400).json({
      status: "fail",
      message: "This flight has been booked",
    });
  }
  flights = [...flights, payload];
  return res.status(201).json({
    status: "success",
    message: "Successfully Booked a flight",
  });
};

exports.getFlights = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Successfully fetched all flight",
    data:  flights,
    
  });
};

exports.getFlight = (req, res) => {
  const flightId = req.params.id;
  const flight = flights.find((flight) => flight.id === flightId);
  if (!flight) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  return res.status(200).json({
    status: "success",
    message: "Sucessfully fetched a flight",
    data: {
      flight,
    },
  });
};

exports.updateFlight = (req, res) => {
  const flightId = req.params.id;
  const { body } = req;
  const flight = flights.find((flight) => flight.id === flightId);
  if (!flight) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Id",
    });
  }
  const flightIndex = flights.indexOf(flight);
  const payload = {
    id: flight.id,
    title: body.title || flight.title,
    price: body.price || flight.price,
    date: body.date || flight.date,
    time: body.time || flight.time,
  };
  flights[flightIndex] = payload;
  return res.status(200).json({
    status: "success",
    message: "Successfully Updated flight detais",
  });
};

exports.deleteFlight = (req, res) => {
  const flightId = req.params.id;
  const flight = flights.find((flight) => flight.id === flightId);
  if (!flight) {
    return res.status(400).json({
      status: "fail",
      mesage: "Invalid Id",
    });
  }
  const flightIndex = flights.indexOf(flight);
  flights.splice(flightIndex, 1);
  return res.status(200).json({
    status: "success",
    message: "Successfully Deleted Flight",
  });
};
