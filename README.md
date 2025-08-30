# API-Atendimento

A RESTful API for customer service management, built with JavaScript and MongoDB. This API allows the management of attendants, tickets, and records, providing endpoints to create, read, update, and delete resources.

---

## 👨‍🎓 Students

- Amanda Cornelsen - RM97760  
- Vinicius Shuet - RM98160

---

## 🚀 Features

Attendants: Manage customer service representatives.

Tickets: Create and manage customer service tickets.

Records: Log interactions and updates related to tickets.

---

## 🛠️ Technologies

Node.js: JavaScript runtime environment.

Express.js: Web framework for building the API.

MongoDB: NoSQL database for storing data.

Mongoose: ODM for MongoDB and Node.js.

Insomnia: API client for testing endpoints.

---

## 📂 Project Structure
```markdown
API-Atendimento/
├── src/
│   ├── controllers/
│   │   ├── attendants-controller.js
│   │   ├── tickets-controller.js
│   │   └── records-controller.js
│   ├── models/
│   │   ├── Attendant.js
│   │   ├── Ticket.js
│   │   └── Record.js
│   ├── routes/
│   │   ├── attendants-routes.js
│   │   ├── tickets-routes.js
│   │   └── records-routes.js
│   └── app.js
├── package.json
└── README.md
```
---

## 📡 API Endpoints
### Attendants

GET api/atendente: Retrieve all attendants.

GET api/atendente/:id: Retrieve a specific attendant by ID.

POST api/atendente: Create a new attendant.

PUT api/atendente/:id: Update an existing attendant.

DELETE api/atendente/:id: Delete an attendant.

### Tickets

GET api/ticket: Retrieve all tickets.

GET api/ticket/:id: Retrieve a specific ticket by ID.

POST api/ticket: Create a new ticket.

PUT api/ticket/:id: Update an existing ticket.

DELETE api/ticket/:id: Delete a ticket.

### Records

GET api/registro: Retrieve all records.

GET api/registro/:id: Retrieve a specific record by ID.

POST api/registro: Create a new record.

PUT api/registro/:id: Update an existing record.

DELETE api/registro/:id: Delete a record.

---

## 🧪 Testing with Insomnia

Open Insomnia and create a new Request Collection named "API-Atendimento".

Add requests for each endpoint:

GET api/atentende, POST api/atendente, etc.

GET api/ticket, POST api/ticket, etc.

GET api/registro, POST api/registro, etc.

For POST and PUT requests, set the body to JSON format and include the necessary fields:

{
  "nome": "John Doe",
  "descricao": "One description"
}

Send requests and verify responses to ensure the API is functioning correctly.

---

## 📌 Notes 

Ensure MongoDB is running before starting the application.

Use appropriate HTTP methods for each action (GET for retrieval, POST for creation, PUT for updates, DELETE for removal).

Test all endpoints using Insomnia to verify functionality.
