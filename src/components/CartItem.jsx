/* eslint-disable react/prop-types */
import {currencyFormatter} from "../util/formatting";

export default function CartItem({name , quantity ,price,onIncrease,onDescrease }) {
  return (
    <li className="cart-item">
        <p>{name} - {quantity} * {currencyFormatter.format(price)}</p>
        <p className="cart-item-actions">
            <button onClick={onDescrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
  )
}
