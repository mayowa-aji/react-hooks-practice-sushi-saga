import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushiList, page, setPage, setIsEaten, isEaten, emptyList, setEmptyList, budget, setBudget}) {

const handleMoreButtonClick = (e) => { setPage(page+4) }
  return (
    <div className="belt">
      {sushiList.slice(page - 4, page).map(sushi =>
      <Sushi
      key={sushi.id}
      sushiItem={sushi}
      setIsEaten={setIsEaten}
      isEaten={isEaten}
      emptyList={emptyList}
      setEmptyList={setEmptyList}
      budget={budget}
      setBudget={setBudget}
      />
      )}
      <MoreButton onMoreButtonClick={handleMoreButtonClick} />
    </div>
  );
}

export default SushiContainer;
