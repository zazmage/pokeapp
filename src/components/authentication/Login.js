import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { loginEmailPassword, loginGoogle } from "../../app/slices/authSlice";
import { Link } from "react-router-dom";
import * as yup from "yup";
import googleIcon from "../../assets/btn_google_light_normal_ios.svg";
import React from "react";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="form-cont">
        <div onClick={() => dispatch(loginGoogle())}>
          <img src={googleIcon} alt="Google Icon" />
          <p>Sign in with Google</p>
        </div>
        <Formik
          className="form-cont"
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup.object().shape({
            email: yup.string().required("Email Required"),
            password: yup.string().required("Password Required"),
          })}
          onSubmit={({ email, password }, { resetForm }) => {
            dispatch(loginEmailPassword(email, password));
            resetForm();
          }}
        >
          {() => (
            <Form>
              <div>
                <label>
                  <Field
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </label>
                <ErrorMessage
                  name="email"
                  component={(errors) => <p>{errors.children}</p>}
                />
              </div>
              <div>
                <label>
                  <Field
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </label>
                <ErrorMessage
                  name="password"
                  component={(errors) => <p>{errors.children}</p>}
                />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        <p>
          You do not have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
