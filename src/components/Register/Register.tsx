import { useForm } from "react-hook-form";
import styles from "./Register.module.scss";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  return (
    <div className={styles.Register}>
      <div>
        <h3>Register</h3>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <span>
          <label htmlFor="txtFirstName">First Name</label>{" "}
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter first name"
            {...register("FirstName", {
              required: "First Name is required",
              maxLength: { value: 20, message: "You exceeded max length 20" },
            })}
          />
          {errors.FirstName && (
            <p className="error">{errors.FirstName.message}</p>
          )}
        </span>
        <span>
          <label htmlFor="txtLastName">Email</label>{" "}
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter last name"
            {...register("LastName", {
              required: "Last Name is required",
              maxLength: { value: 20, message: "You exceeded max length 20" },
            })}
          />
          {errors.LastName && (
            <p className="error">{errors.LastName.message}</p>
          )}
        </span>
        <span>
          <label htmlFor="txtEmailId">Email</label>{" "}
          <input
            type="email"
            className="form-control"
            id="emailId"
            placeholder="Enter email id"
            {...register("EmailId", {
              required: "Email Id is required",
              maxLength: { value: 20, message: "You exceeded max length 20" },
            })}
          />
          {errors.EmailId && <p className="error">{errors.EmailId.message}</p>}
        </span>

        <span>
          <label htmlFor="txtPassword">Password</label>{" "}
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            {...register("Password", {
              required: "Password is required",
              maxLength: { value: 20, message: "You exceeded max length 20" },
            })}
          />
          {errors.Password && (
            <p className="error">{errors.Password.message}</p>
          )}
        </span>
        <span>
          <label htmlFor="txtPasswordConfirm">Password</label>{" "}
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            placeholder="Re enter password"
            {...register("PasswordConfirm", {
              required: "Password is required",
              maxLength: { value: 20, message: "You exceeded max length 20" },
            })}
          />
          {errors.PasswordConfirm && (
            <p className="error">{errors.PasswordConfirm.message}</p>
          )}
        </span>
        <button className="btn btn-block my-3">Signup</button>
      </form>
    </div>
  );
}

export default Register;
