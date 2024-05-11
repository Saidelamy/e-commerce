import { useDispatch, useSelector } from 'react-redux';
import CommonSection from '../../Ui/CommonSection';
import tdImg from '../../assets/images/arm-chair-01.jpg';
import { FaTrash } from 'react-icons/fa';
import { cartActions } from '../../redux/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <CommonSection title="Shopping Cart" />
      <section className="">
        <div className="container m-auto">
          <div className="grid grid-cols-12 max-sm:grid-cols-1">
            <div className="col-span-9 text-primary">
              {cartItems.length === 0 ? (
                <h3 className="text-4xl max-sm:text-center max-sm:text-2xl">
                  No item added to the cart yet!
                </h3>
              ) : (
                <>
                  <table className="min-w-full rounded-xl bg-white shadow-md ">
                    <thead>
                      <tr className="bg-blue-gray-100 text-gray-700">
                        <th className="px-4 py-3 text-left"> Image</th>
                        <th className="px-4 py-3 text-left">Title</th>
                        <th className="px-4 py-3 text-left">Price</th>
                        <th className="px-4 py-3 text-left">Qty</th>
                        <th className="px-4 py-3 text-left"></th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-gray-900">
                      {cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
            <div className="col-span-3 pl-5">
              <div
                className="mt-6 flex items-center justify-between text-2xl font-bold text-primary
               "
              >
                <h6>Subtotal</h6>
                <span>${totalAmount}</span>
              </div>
              <p className="my-5 text-lg text-gray-600">
                taxes and shipping will calculate in checkout!
              </p>
              <div
                className="flex
               flex-col gap-4 "
              >
                <button className="rounded-lg bg-primary px-3 py-2 text-white">
                  <Link to="/shop">Continue shopping</Link>
                </button>
                <button className="rounded-lg bg-primary px-3 py-2 text-white">
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deletProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <>
      <tr className="border-blue-gray-200 border-b">
        <td className="px-4 py-3">
          <img className="h-16 w-16 object-cover" src={item.imgUrl} alt="" />
        </td>
        <td className="px-4 py-3">{item.productName}</td>
        <td className="px-4 py-3">${item.price}</td>
        <td className="px-4 py-3">{item.quantity}</td>
        <td className="px-4 py-3">
          <a
            href="#"
            onClick={deletProduct}
            className="font-medium text-red-600 hover:text-red-700"
          >
            <FaTrash />
          </a>
        </td>
      </tr>
      ;
    </>
  );
};

export default Cart;
