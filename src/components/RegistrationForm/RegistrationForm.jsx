import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short! Min 3 chars")
    .max(50, "Too Long! Max 50 chars")
    .required("Required"),
  email: Yup.string()
    .trim()
    .email("Please, fill valid email")
    .required("Required"),
  password: Yup.string()
    .trim()
    .min(5, "Too Short! Min 3 chars")
    .max(50, "Too Long! Max 50 chars")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handelSubmit = (values, actions) => {
    const newValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
    dispatch(register(newValues));
    console.log(newValues);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handelSubmit}
    >
      <Form className={css.form}>
        <label className={css.labelFormInput}>
          Name
          <Field className={css.formInput} type="text" name="name" />
          <ErrorMessage className={css.erros} name="name" component="span" />
        </label>
        <label className={css.labelFormInput}>
          Email
          <Field className={css.formInput} type="email" name="email" />
          <ErrorMessage className={css.erros} name="email" component="span" />
        </label>
        <label className={css.labelFormInput}>
          Password
          <Field
            className={css.formInput}
            type="password"
            name="password"
            autoComplete="off"
          />
          <ErrorMessage
            className={css.erros}
            name="password"
            component="span"
          />
        </label>
        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
