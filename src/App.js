import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Form from "./components/Form";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="App">
      <h1>Linuxbean CRUD Test</h1>
      <hr />
      <Form />
    </div>
  );
}

export default App;
