import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="mx-5 mt-5">
      <Link to="/menu" className=" text-blue-500">
        &larr; Back to menu
      </Link>

      <p className="mx-2 my-5">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
