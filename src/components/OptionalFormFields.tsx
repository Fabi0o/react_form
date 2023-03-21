import Dishes from "../../types/dishes";
import styles from "../styles/OptionalFormFields.module.scss";

interface Props {
  dishType: Dishes;
  setNumberOfSlices: React.Dispatch<React.SetStateAction<number>>;
  setDiameter: React.Dispatch<React.SetStateAction<number>>;
  setSpiciness: React.Dispatch<React.SetStateAction<number>>;
  setNumberOfBreadSlices: React.Dispatch<React.SetStateAction<number>>;
}

const OptionalFormFields: React.FC<Props> = ({
  dishType,
  setNumberOfSlices,
  setDiameter,
  setSpiciness,
  setNumberOfBreadSlices,
}) => {
  return (
    <section className={styles.form_section}>
      {(dishType == "pizza" && (
        <div>
          <div>
            <label htmlFor="no_of_slices">Number of slices</label>
            <input
              type="number"
              step="1"
              min="1"
              defaultValue="1"
              required
              onChange={(e) => setNumberOfSlices(Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="diameter">Diameter</label>
            <input
              type="number"
              step="0.01"
              required
              onChange={(e) => setDiameter(Number(e.target.value))}
            />
          </div>
        </div>
      )) ||
        (dishType == "soup" && (
          <div>
            <div>
              <label htmlFor="spiciness_scale">Spiciness</label>
              <select
                name="spiciness_scale"
                id="spiciness_scale"
                onChange={(e) => setSpiciness(Number(e.target.value))}
              >
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
            <input
              type="number"
              step="1"
              min="1"
              defaultValue="1"
              required
              onChange={(e) => setNumberOfBreadSlices(Number(e.target.value))}
            />
          </div>
        ))}
    </section>
  );
};

export default OptionalFormFields;
