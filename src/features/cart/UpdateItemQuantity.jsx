import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreseItemQuantity, increseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="item-center flex gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="mt-2 text-sm font-medium font-semibold">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(increseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
