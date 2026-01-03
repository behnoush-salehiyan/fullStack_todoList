import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { signin } from "../../api/user-api";
import { useDispatch } from "react-redux";
import { creatUserToken } from "../../store/slice/user";

const helperText = {
  email: {
    required: "Email is Required",
    pattern: "Invalid Email Address",
  },
  password: {
    required: "password is Required",
    pattern:
      "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
  },
};

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      console.log(values);
      const response = await signin(values);
      const { msg, token } = response;
      dispatch(creatUserToken(token));
      alert(msg);
      reset();
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <h1 className="text-center pt-5">Welcome Back!</h1>
      <p className="text-center pb-5">
        Please enter your details to access your account.
      </p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {helperText.email[errors.email.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            })}
          />
          {errors.password && (
            <Form.Text className="text-danger">
              {helperText.password[errors.password.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Signin
        </Button>
      </Form>
    </Container>
  );
}

export default SignIn;
