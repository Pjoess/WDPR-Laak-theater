import React from 'react'
import NavigationBar from '../../components/navigation-bar/navigation-bar'
import useCart from '../../hooks/cart/use-cart'

export default function CartPage(props) {
    const { items, addToCart, removeFromCart } = useCart()
    console.log(JSON.stringify(items))

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <h1>Winkelwagen</h1>
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Show</th>
                        <th scope="col">Zaal</th>
                        <th scope="col">Zitplaats</th>
                        <th scope="col">Actie</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.event}</td>
                        <td>Zaal {item.room}</td>
                        <td>Rij {item.row} Stoel {item.seat}</td>
                        <td><button className='btn btn-danger' onClick={() => removeFromCart(item)}>Verwijder deze stoel</button></td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}
