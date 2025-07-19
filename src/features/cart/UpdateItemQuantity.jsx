import { useDispatch, useSelector } from 'react-redux';
import { decreaseItem, getItemInCartById, increaseItem } from './cartSlice';

export default function UpdateItemQuantity({ pizzaId }) {
  const totalInCart = useSelector(getItemInCartById(pizzaId));
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 ">
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 "
        onClick={() => dispatch(decreaseItem(pizzaId))}
      >
        -
      </button>
      <p>{totalInCart}</p>
      <button
        className="flex h-6 w-6  items-center justify-center rounded-full bg-yellow-400 p-1 "
        onClick={() => dispatch(increaseItem(pizzaId))}
      >
        +
      </button>
    </div>
  );
}
