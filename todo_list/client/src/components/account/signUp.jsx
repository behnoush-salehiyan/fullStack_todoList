import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { signup } from "../../api/user-api";

const helperText = {
  name: {
    required: "Name is required",
    minLength: "your input should more than 2 characters",
    maxLength: "your input should less than 31 characters",
  },

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

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      console.log(values);
      const response = await signup(values);
      alert(response.msg);
      reset();
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <Container>
      <h1 className="text-center py-5">creat new account</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            {...register("username", {
              required: true,
              maxLength: 30,
              minLength: 3,
            })}
          />
          {errors.name && (
            <Form.Text className="text-danger">
              {helperText.name[errors.name.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
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
          Submit
        </Button>
        <Button
          variant="outline-secondary"
          style={{ marginLeft: "5px" }}
          as={Link}
          to={"/signin"}
        >
          Signin
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
