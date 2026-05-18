import { useEffect, useState } from "react";
import falafel from "./falafel.jpg";
import ramen from "./ramen.jpg";
import biryani from "./biryani.jpg";
import padthai from "./padthai.jpg";
import poutine from "./poutine.jpg";
import flan from "./flan.jpg";
import samosa from "./samosa.jpg";
import baklava from "./baklava.jpg";
import cake from "./cake.jpg";
import momo from "./momo.jpg";
import burger from "./burger.jpg";
import tiramisu from "./tiramisu.jpg";
import doro from "./doro.jpg";
import alfajores from "./alfajores.jpg";
import sweets from "./sweets.jpg";
import birria from "./birria.jpg";
import breadsticks from "./breadstick.jpg";
import pan from "./pan.jpg";
function Menu({ addToCart }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/api/menu")
      .then(res => res.json())
      .then(data => setMenuItems(data))
      .catch(err => console.log(err));
  }, []);


  const imageMap = {
    "Lebanese Falafel": falafel,
    "Japanese Shio Ramen": ramen,
    "Bengali Kacchi Biryani": biryani,
    "Pad Thai": padthai,
    "Canadian Poutine": poutine,
    "Spanish Caramel Flan": flan,
    "Indian Samosas": samosa,
    "Turkish Baklava":baklava,
    "Chocolate Fudge Cake":cake,
    "Nepali Chili Momos": momo,
    "Spicy Smashburger w/ Fries": burger,
    "Italian Tiramisu":tiramisu,
    "Argentinian Alfajores (3)":alfajores,
    "Ethiopian Doro Wat":doro,
    "Bengali Rashmalai":sweets,
    "Mexican Cheesy Birria Pie":birria,
    "Italian Soft Breadsticks (4)":breadsticks,
    "Brazilian Pão de Queijo (6)":pan

  };

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

                  <img 
                    src={imageMap[item.name] || falafel}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "10px"
                    }}
                  />

                  <span className="badge rounded-pill mb-3">
                    {item.category}
                  </span>

                  <h5 className="card-title">{item.name}</h5>

                  <p className="card-text fw-bold">
                    ${item.price.toFixed(2)}
                  </p>

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