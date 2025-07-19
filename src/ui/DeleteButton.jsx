import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeItem } from '../features/cart/cartSlice';

export default function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => {
        dispatch(removeItem(pizzaId));
      }}
    >
      Delete
    </Button>
  );
}
