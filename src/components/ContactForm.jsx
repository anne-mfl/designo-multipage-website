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
    phone: false,
    message: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {
      name: !inputForm.name.trim(),
      email: !inputForm.email.trim(),
      phone: !inputForm.phone.trim(),
      message: !inputForm.message.trim(),
    };
    setError(newError);

    if (!Object.values(newError).includes(true)) {
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


  const ErrorMessage = () => (
    <span className="flex items-center gap-2 italic text-sm float-end -mt-8">
      Can't be empty
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
      {error.name && <ErrorMessage />}
      <input
        name="email"
        type="text"
        placeholder="Email Address"
        className="form_input"
        onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
      />
      {error.email && <ErrorMessage />}
      <input
        name="phone"
        type="text"
        placeholder="Phone"
        className="form_input"
        onChange={(e) => setInputForm({ ...inputForm, phone: e.target.value })}
      />
      {error.phone && <ErrorMessage />}
      <textarea
        name="message"
        placeholder="Your Message"
        rows={3}
        className="form_input resize-none"
        onChange={(e) => setInputForm({ ...inputForm, message: e.target.value })}
      ></textarea>
      {error.message && <ErrorMessage />}

      <input type="submit" value="SUBMIT" className="btn_white mt-10 px-12" />
      {isSubmitted && <p class="mt-8 font-semibold">Thank you! Your message has been sent successfully. We'll be in touch shortly.</p>}
    </form>
  );
}

export default ContactForm