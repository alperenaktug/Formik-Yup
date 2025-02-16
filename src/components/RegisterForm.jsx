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
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email giriniz.."
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı giriniz.."
            value={values.age}
            onChange={handleChange}
          />
        </div>

        <div className="inputDiv">
          <label>şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi giriniz.."
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz.."
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="inputDiv">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <input
              style={{ width: "20px", height: "12px" }}
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />
            <label>Kullanıcı sözleşmesini kabul ediyorum</label>
          </div>
        </div>

        <button className="saveButton">Kaydet</button>
      </form>
    </div>
  );
}

export default RegisterForm;
