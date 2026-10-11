import { Minus, Plus, Trash2, X } from "lucide-react";

export default function Cart({
  open,
  onClose,
  cart,
  onQuantityChange,
  onRemove
}) {
  if (!open) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-heading">
          <h2>My Cart 🛒</h2>
          <button onClick={onClose}><X /></button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-message">Your cart is empty. Add a burger!</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <strong>
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </strong>

                    <div className="quantity">
                      <button onClick={() => onQuantityChange(item.id, -1)}>
                        <Minus size={13} />
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => onQuantityChange(item.id, 1)}>
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => onRemove(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Subtotal: ₱{subtotal.toFixed(2)}</h3>
              <p>Delivery fees are not included.</p>

              <button
                className="primary-button"
                onClick={() => alert("Demo checkout only!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
