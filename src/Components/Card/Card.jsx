import { CardStyled } from "./Card.style";
export function Card({ items: { name, image, age, body, title } }) {
  return (
    <CardStyled>
      <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{title}</p>
      </div>

      <div>
        <img src={image} alt="" />
        <p>{body}</p>
      </div>
    </CardStyled>
  );
}
