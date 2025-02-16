import { useFormik } from "formik";

function RegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
  });
  return (
    <div>
      <form className="form">
        <div>
          <label>Email</label>
          <input
            type="text"
            id="Email"
            placeholder="Email giriniz.."
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı giriniz.."
            value={values.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi giriniz.."
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz.."
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="checkbox"
            id="term"
            value={values.term}
            onChange={handleChange}
          />
          <label>Kullanıcı sözleşmesini kabul ediyorum</label>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
