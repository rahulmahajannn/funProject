import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [age, setAge] = useState();
  const [showAge, setShowAge] = useState(false);
  const [email, setEmail] = useState();
  const [showEmail, setShowEMail] = useState(false);
  const [phone, setPhone] = useState();
  const [showPhone, setShowPhone] = useState(false);
  const [image, setImage] = useState();
  const [name, setName] = useState();

  const fetchAndSetData = async () => {
    const x = await fetch("https://randomuser.me/api/").then((res) => {
      return res.json();
    });
    setData(x.results[0]);
    const fullName =
      x.results[0].name.title +
      " " +
      x.results[0].name.first +
      " " +
      x.results[0].name.last;
    setName(fullName);
    setImage(x.results[0].picture.large);
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  const buttonClick = () => {
    fetchAndSetData();
    setShowAge(false);
    setShowEMail(false);
    setShowPhone(false);
  };

  const getAge = () => {
    setAge(data.dob.age);
    setShowAge(true);
    setShowEMail(false);
    setShowPhone(false);
  };

  const getEmail = () => {
    setEmail(data.email);
    setShowAge(false);
    setShowEMail(true);
    setShowPhone(false);
  };

  const getPhone = () => {
    setPhone(data.phone);
    setShowAge(false);
    setShowEMail(false);
    setShowPhone(true);
  };

  return (
    <>
      <h1>{name}</h1>
      <img src={image}></img>
      <button onClick={getAge}>AGE</button>
      <button onClick={getEmail}>Email</button>
      <button onClick={getPhone}>Phone</button>
      {showAge ? <h1>Age: {age}</h1> : null}
      {showEmail ? <h1>Email: {email}</h1> : null}
      {showPhone ? <h1>Phone: {phone}</h1> : null}
      <button onClick={buttonClick}>New User</button>
    </>
  );
}

export default App;
