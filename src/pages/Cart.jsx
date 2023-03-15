import cartBg from "../assets/cartBg.jpg";
function Cart() {
  return (
    <div>
      <img src={cartBg} alt="" className="h-[200px] w-full" />
      {/* <Cart /> */}
      <div>
        <h2>Cart Totals</h2>
        <p>
          Subtotal: <span>$123.09</span>
        </p>
        <p>
          Shipping:{" "}
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </p>
        <hr />
        <div>
          <p>Total:</p>
          <p>$123.09</p>
        </div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
