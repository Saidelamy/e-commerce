import { useSelector } from 'react-redux';
import CommonSection from '../../Ui/CommonSection';

function Checkout() {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <CommonSection title="Checkout" />
      <section>
        <div className="container m-auto">
          <div className="grid grid-cols-12 gap-5 max-sm:grid-cols-12">
            <div className="col-span-8 max-sm:col-span-12 max-sm:m-auto">
              <h6 className="mb-5 text-2xl">Billing Information</h6>
              <form
                className="flex flex-col gap-5
              "
              >
                <div>
                  <input
                    type="text"
                    className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                    placeholder="Enter Your Name..."
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                    placeholder="Enter Your email..."
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                    placeholder="Phone Number..."
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                    placeholder="Your address..."
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                    placeholder="Postal code..."
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                    placeholder="Country..."
                  />
                </div>
              </form>
            </div>
            <div className="col-span-4 bg-primary p-5 text-white max-sm:col-span-12 max-sm:mx-5">
              <div className="flex flex-col gap-3 ">
                <h6 className="flex justify-between">
                  Total Qty: <span>{totalQty}</span>
                </h6>
                <h6 className="flex justify-between">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6 className="flex justify-between">
                  Shipping: <br />
                  Free Shipping <span>$0</span>
                </h6>

                <h4 className="mt-2 flex justify-between border-t-2 pt-5 text-2xl">
                  Total Cost: <span>${totalAmount}</span>
                </h4>
              </div>
              <button className="mt-5 w-full rounded-lg bg-white px-3 py-2 text-primary">
                Place an order
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
