import Dishes from "../../types/dishes";
import styles from "../styles/OptionalFormFields.module.scss";

interface Props {
  dishType: Dishes;
}

const OptionalFormFields: React.FC<Props> = ({ dishType }) => {
  return (
    <section className={styles.form_section}>
      {(dishType == "pizza" && (
        <div>
          <div>
            <label htmlFor="no_of_slices">Number of slices</label>
            <input type="number" step="1" min="1" defaultValue="1" />
          </div>
          <div>
            <label htmlFor="diameter">Diameter</label>
            <input type="number" step="0.01" />
          </div>
        </div>
      )) ||
        (dishType == "soup" && (
          <div>
            <div>
              <label htmlFor="spiciness_scale">Spiciness</label>
              <select name="spiciness_scale" id="spiciness_scale">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        )) ||
        (dishType == "sandwich" && (
          <div>
            <label htmlFor="slices_of_bread">Number of bread slices</label>
            <input type="number" step="1" min="1" defaultValue="1" />
          </div>
        ))}
    </section>
  );
};

export default OptionalFormFields;
