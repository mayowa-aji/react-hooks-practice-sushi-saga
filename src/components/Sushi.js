import React, { useState } from "react";

function Sushi({sushiItem, emptyList, setEmptyList, setBudget, budget}) {
  const [isEaten, setIsEaten] = useState(false)
  const handleSushiClicked = (e) => {
    setIsEaten(!isEaten)
    setEmptyList([...emptyList, sushiItem])
    setBudget(budget - sushiItem.price)
    console.log(budget)
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClicked}>
        {isEaten ? null : (
          <img
            src={sushiItem.img_url}
            alt={sushiItem.name + 'Sushi'}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiItem.name} - ${sushiItem.price}
      </h4>
    </div>
  );
}

export default Sushi;
