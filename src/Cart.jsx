function Cart({ cart, clearCart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function placeOrder() {
    fetch("http://127.0.0.1:3001/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: cart,
        total: total
      })
    })
      .then(res => res.json())
      .then(() => {
        alert("Order placed!");
        clearCart();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="cart-page">
      <div className="container py-5 text-center">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty. Let's find something you'll love!</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))}

            <h4>Total: {total.toFixed(2)}</h4>

            <button onClick={clearCart}>Clear Cart</button>
            <br /><br />
            <button onClick={placeOrder} className="btn btn-success">
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;