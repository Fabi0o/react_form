import styles from "../styles/Form.module.scss";
import { useState } from "react";
import Dishes from "../../types/dishes";
import postData from "../../types/postData";
import OptionalFormFields from "./OptionalFormFields";

const Form = () => {
  const [dishType, setDishType] = useState<Dishes>("pizza");

  const [dishName, setDishName] = useState("");
  const [preparationTime, setPreparationTime] = useState("00:00:01");

  const [numberOfSlices, setNumberOfSlices] = useState(1);
  const [diameter, setDiameter] = useState(0);

  const [sipciness, setSpiciness] = useState(1);

  const [numberOfBreadSlices, setNumberOfBreadSlices] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: postData = {
      name: dishName,
      preparation_time: preparationTime,
      type: dishType,
      no_of_slices: dishType == "pizza" ? numberOfSlices : undefined,
      diameter: dishType == "pizza" ? diameter : undefined,
      spiciness_scale: dishType == "soup" ? sipciness : undefined,
      slices_of_bread: dishType == "sandwich" ? numberOfBreadSlices : undefined,
    };

    fetch("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className={styles.form_section}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={(e) => setDishName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="preparation_time">Preparation time</label>
          <input
            type="time"
            id="preparation_time"
            step="1"
            min="00:00:01"
            defaultValue="00:00:01"
            required
            onChange={(e) => setPreparationTime(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="type">Dish type</label>
          <select
            name="type"
            id="type"
            onChange={(e) => {
              setDishType(e.target.value as Dishes);
            }}
          >
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </select>
        </div>
      </section>

      <OptionalFormFields
        dishType={dishType}
        setNumberOfSlices={setNumberOfSlices}
        setDiameter={setDiameter}
        setSpiciness={setSpiciness}
        setNumberOfBreadSlices={setNumberOfBreadSlices}
      />

      <button>Submit</button>
    </form>
  );
};

export default Form;
