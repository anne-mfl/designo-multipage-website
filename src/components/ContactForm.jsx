import { useState, useEffect } from "preact/hooks";


const ContactForm = () => {
  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const newError = {
      name: !inputForm.name.trim() ? "Name can't be empty" : false,
      email: !inputForm.email.trim()
      ? "Email can't be empty"
      : !isValidEmail(inputForm.email)
      ? "Invalid email address"
      : false,
      message: !inputForm.message.trim() ? "Message can't be empty" : false,
    };
    setError(newError);

    if (Object.values(newError).every((error) => error === false)) {
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    const formInputs = document.querySelectorAll(".form_input");
    formInputs.forEach((input) => {
      input.addEventListener("focus", () => {
        setError((prevError) => ({ ...prevError, [input.name]: false }));
      });
    });
    return () => {
      formInputs.forEach((input) => {
        input.removeEventListener("focus", () => {
          setError((prevError) => ({ ...prevError, [input.name]: false }));
        });
      });
    };
  }, []);



  const ErrorMessage = ({ message }) => (
    <span className="flex items-center gap-2 italic text-sm float-end -mt-8">
      {message}
      <span>
        <img src="/src/assets/contact/desktop/icon-error.svg" alt="exclamation mark" />
      </span>
    </span>
  )



  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="form_input"
        onChange={(e) => setInputForm({ ...inputForm, name: e.target.value })}
      />
      {error.name && <ErrorMessage message={error.name} />}
      <input
        name="email"
        type="text"
        placeholder="Email Address"
        className="form_input"
        onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
      />
      {error.email && <ErrorMessage message={error.email}/>}
      <input
        name="phone"
        type="text"
        placeholder="Phone"
        className="form_input"
        onChange={(e) => setInputForm({ ...inputForm, phone: e.target.value })}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={3}
        className="form_input resize-none"
        onChange={(e) => setInputForm({ ...inputForm, message: e.target.value })}
      ></textarea>
      {error.message && <ErrorMessage message={error.message}/>}

      <div class="flex justify-center md:justify-end">
        <input type="submit" value="SUBMIT" className="btn_white mt-10 px-12" />
      </div>
      {isSubmitted && <p class="mt-8 font-semibold">Thank you! Your message has been sent successfully. We'll be in touch shortly.</p>}
    </form>
  );
}

export default ContactForm