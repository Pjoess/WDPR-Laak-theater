import React from 'react'
import useCart from '../../hooks/cart/use-cart'

export default function CartPage() {
    const { items, addToCart, removeFromCart } = useCart()
    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Evenement</th>
                    <th scope="col">Zaal</th>
                    <th scope="col">Zitplaats</th>
                    <th scope="col">Naam</th>
                    <th scope="col">Actie</th>
                    <th scope="col">Prijs</th>
                </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.event}</td>
                    <td>Zaal {item.room}</td>
                    <td>Rij {item.row} Stoel {item.seat}</td>
                    <td>{item.name}</td>
                    <td>&euro;{item.price}</td>
                    <td><button className='btn btn-danger' onClick={() => removeFromCart(item)}>Verwijder deze stoel</button></td>
                </tr>
            ))}
            </tbody>
            </table>
            {/* {items.map((item) => (
                <div key={item.id}>
                    Evenement: {item.event} Zaal: {item.room} Stoel: {item.seat} {item.name}
                    <button className='btn btn-danger' onClick={() => removeFromCart(item)}>Verwijder deze stoel</button>
                </div>
            ))} */}
            <button className='btn btn-primary' onClick={() => addToCart({ id: 1, event: 'Comedy Night', room: 2, row: 2, seat: 31, name: 'Toegankelijk VIP', price: 19.99 })}>
                Toevoegen aan winkelwagen
            </button>
        </div>
    )
}
