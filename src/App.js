import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import userEvent from "@testing-library/user-event";

function App() {
  const [user, setUser] = useState([]);
  const [update, setUpdate] = useState(false);

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    if (update) {
      const updatedUser = user.map((user) => {
        if (user.id === data.id) {
          user.email = data.email;
          user.fname = data.fname;
          user.lname = data.lname;
          user.phn = data.phn;
        }
        return user;
      });
      setUser(updatedUser);
      setUpdate(false);
      resetField("fname");
      resetField("lname");
      resetField("email");
      resetField("phn");
    } else {
      const unique_id = uuid();
      const data1 = { ...data, id: unique_id };
      setUser([...user, data1]);
      resetField("fname");
      resetField("lname");
      resetField("email");
      resetField("phn");
      console.log(user);
    }
  };
  const handleError = (errors) => {};

  const registerOptions = {
    fname: {
      required: "First Name is required",
      minLength: {
        value: 3,
        message: "First name must be al tleast 3 character",
      },
    },
    lname: {
      required: "Last Name is required",
      minLength: {
        value: 3,
        message: "Last name must be al tleast 3 character",
      },
    },
    email: { required: "Email is required" },
    phn: {
      required: "Phone number is required",
      minLength: {
        value: 10,
        message: "Phone number must have at least 10 characters",
      },
    },
  };

  const editHandler = (id, fname, lname, email, phn) => {
    setValue("fname", fname);
    setValue("lname", lname);
    setValue("email", email);
    setValue("phn", phn);
    setValue("id", id);
    setUpdate(true);
    console.log(id, fname);
  };

  const deleteHandler = (id) => {
    const updatedUser = user.filter((user) => user.id !== id);
    setUser(updatedUser);
    console.log(id);
  };

  return (
    <div className="App">
      <h1>Linuxbean CRUD Test</h1>
      <hr />
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className="form">
          <div className="formt">
            <input
              name="id"
              type="text"
              {...register("id", registerOptions.id)}
              hidden
            />
            <input
              name="fname"
              type="text"
              placeholder="First Name"
              {...register("fname", registerOptions.fname)}
            />
            <small className="text-danger">
              {errors?.fname && errors.fname.message}
            </small>
          </div>
          <div className="formt">
            <input
              name="lname"
              type="text"
              placeholder="Last Name"
              {...register("lname", registerOptions.lname)}
            />
            <small className="text-danger">
              {errors?.lname && errors.lname.message}
            </small>
          </div>
          <div className="formt">
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", registerOptions.email)}
            />
            <small className="text-danger">
              {errors?.email && errors.email.message}
            </small>
          </div>

          <div className="formt">
            <input
              type="number"
              name="phn"
              placeholder="Phone number"
              {...register("phn", registerOptions.phn)}
            />
            <small className="text-danger">
              {errors?.phn && errors.phn.message}
            </small>
          </div>
          {!update && <button>Submit</button>}
          {update && <button>Update</button>}
        </div>
      </form>
      <table id="customers">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
        {user.map((data) => {
          return (
            <tr>
              <td>{data.fname}</td>
              <td>{data.lname}</td>
              <td>{data.email}</td>
              <td>{data.phn}</td>
              <td>
                <span
                  onClick={() =>
                    editHandler(
                      data.id,
                      data.fname,
                      data.lname,
                      data.email,
                      data.phn
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  Edit
                </span>{" "}
                ,
                <span
                  onClick={() => deleteHandler(data.id)}
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
