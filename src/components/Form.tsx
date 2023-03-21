import styles from "../styles/Form.module.scss";
import { useState } from "react";
import Dishes from "../../types/dishes";
import OptionalFormFields from "./OptionalFormFields";

const Form = () => {
  const [dishType, setDishType] = useState<Dishes>("pizza");

  const [dishName, setDishName] = useState("");
  const [preparationTime, setPreparationTime] = useState("");

  const [numberOfSlices, setNumberOfSlices] = useState(1);
  const [diameter, setDiameter] = useState(0);

  const [sipciness, setSpiciness] = useState(1);

  const [numberOfBreadSlices, setNumberOfBreadSlices] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            defaultValue="00:00:00"
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
