import Button from '../Button'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantily,
  CartItem
} from './styles'

import startwars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={startwars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        {/*  */}
        <CartItem>
          <img src={startwars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        {/*  */}
      </ul>
      <Quantily>2 jogo(s) no carrinho</Quantily>
      <Prices>
        Total de R$ 250,00 <span>em até 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
