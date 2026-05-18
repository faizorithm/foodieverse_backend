import { useEffect, useState } from "react";
function Menu({ addToCart }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/api/menu")
      .then(res => res.json())
      .then(data => {
        console.log("DATA:", data);
        setMenuItems(data);
      })
      .catch(err => console.log("ERROR:", err));
  }, []);
  return (
    <div className="menu-page">
      <div className="container py-5">
        <h1 className="text-center mb-2">Our Menu</h1>
        <p className="text-center text-muted mb-5">
          Explore bold flavors from around the world.
        </p>

        <div className="row">
          {menuItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm menu-card">
                <div className="card-body text-center">
                  <span className="badge rounded-pill mb-3">
                    {item.category}
                  </span>

                  <h5 className="card-title">{item.name}</h5>

                  <p className="card-text fw-bold">{item.price}</p>

                  <button
                    className="menu-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  export default Menu;