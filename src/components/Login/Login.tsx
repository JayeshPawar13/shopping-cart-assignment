import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  return (
    <div className={styles.Login}>
      <div>
        <h3>Login</h3>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <span>
          <label htmlFor="txtEmailId">Email</label>{' '}
          <input
            type="email"
            className="form-control"
            id="emailId"
            placeholder="Enter email id"
            {...register('EmailId', {
              required: 'Email Id is required',
              maxLength: { value: 20, message: 'You exceeded max length 20' },
            })}
          />
          {errors.EmailId && (
            <p style={{ color: 'red' }}>{errors.EmailId.message}</p>
          )}
        </span>

        <span>
          <label htmlFor="txtPassword">Password</label>{' '}
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            {...register('Password', {
              required: 'Password is required',
              maxLength: { value: 20, message: 'You exceeded max length 20' },
            })}
          />
          {errors.Password && (
            <p style={{ color: 'red' }}>{errors.Password.message}</p>
          )}
        </span>
        <button className="btn btn-block my-3">Login</button>
      </form>
    </div>
  );
}

export default Login;
