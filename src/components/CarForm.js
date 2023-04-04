import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar} from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const {name, cost} = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    dispatch(changeCost(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({
      name,
      cost
    }))
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          {/* Name */}
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          {/* Cost */}
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''}
              type="number"
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
