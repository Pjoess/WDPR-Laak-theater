import React, {useState} from 'react'
import NavigationBar from '../../components/navigation-bar/navigation-bar'
import useCart from '../../hooks/cart/use-cart'
import axios from "axios";
import { UseLoginSession } from '../../hooks/login/use-login-session'

export default function CartPage(props) {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const { items, addToCart, removeFromCart } = useCart()
    console.log(JSON.stringify(items))

    const { user } = UseLoginSession()

    const handleOrder = () => {
        if (items.length == 0) {
            setError("Winkelwagen is leeg!")
            return
        }

        const tickets = items.map((item) => ({
            ShowId: item.showId,
            SeatId: item.seat,
            RowId: item.row,
            Price: item.price,
        }))
        
        axios
            .post(`${process.env.REACT_APP_API}/api/Order/createOrder`, {
                TicketAmount: tickets.length,
                Visited: "nee",
                ShowId: items.showId,
                UserName: user.unique_name,
                tickets,
            })
            .then((res) => {
                console.log(res)
                setError("")
                setSuccess("Uw bestelling is gelukt!")
            }).catch((e) => {
                setError("Er is een fout opgetreden tijdens het bestellen.")
            })
    }

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
                        <th scope="col">Prijs</th>
                        <th scope="col">Actie</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.event}</td>
                        <td>Zaal {item.room}</td>
                        <td>Rij {item.row} Stoel {item.seat}</td>
                        <td>&euro;{item.price}</td>
                        <td><button className='btn btn-danger' onClick={() => removeFromCart(item)}>Verwijder deze stoel</button></td>
                    </tr>
                ))}
                </tbody>
                </table>
                <button onClick={handleOrder} className="btn btn-primary">Bestellen</button>
                {error && (
                    <div className="alert alert-danger mt-3" role="alert">
                    {error}
                    </div>
                )}
                {success && (
                    <div className="alert alert-success mt-3" role="alert">
                    {success}
                    </div>
                )}
            </div>
        </div>
    )
}
