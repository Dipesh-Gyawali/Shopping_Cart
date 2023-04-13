import { useTitle } from "../hooks/useTitle";

export const Card = ({title}) => {
  useTitle(title);
  return (
    <div>Card</div>
  )
}
