import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from './CocktailCard'
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h2 style={{ textAlign: "center" }}>
        There is no matching drinks found...
      </h2>
    );
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      img: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return <Wrapper>
    {formattedDrinks.map((item)=>{
      return <CocktailCard key={item.id} {...item}/>;
    })}
  </Wrapper>;
};
export default CocktailList;
