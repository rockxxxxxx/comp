import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
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
        message: "Phone number must have at least 8 characters",
      },
    },
  };

  return (
    <div className="App">
      <h1>Linuxbean CRUD Test</h1>
      <hr />
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className="form">
          <div className="formt">
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
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
