import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/CocktailCard"
const CocktailCard = ({id,name,info,glass,img}) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={img} alt={name} className="image"/>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">details</Link>
      </div>
    </Wrapper>
  )
}
export default CocktailCard