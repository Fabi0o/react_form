import styles from "../styles/Form.module.scss";
import { useState } from "react";
import Dishes from "../../types/dishes";
import OptionalFormFields from "./OptionalFormFields";

const Form = () => {
  const [dishType, setDishType] = useState<Dishes>("pizza");

  return (
    <form>
      <section className={styles.form_section}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>

        <div>
          <label htmlFor="preparation_time">Preparation time</label>
          <input type="time" id="preparation_time" step="1" required />
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

      <OptionalFormFields dishType={dishType} />

      <button>Submit</button>
    </form>
  );
};

export default Form;
