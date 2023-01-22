import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import useCart from '../../hooks/cart/use-cart'
import { ShopWindow } from "react-bootstrap-icons"
import NavigationBar from "../../components/navigation-bar/navigation-bar"

function SeatPickerPage() {
    const [seats, setSeats] = useState([])
    const { showId } = useParams()
    const [event, setEvent] = useState()
    const [room, setRoom] = useState() // zaal
    const [isLoading, setLoading] = useState(true)
    const [selectedSeats, setSelectedSeats] = useState([])
    const { addToCart, removeFromCart } = useCart()

    useEffect(() => {
        console.log("show id:" + showId)
        setLoading(true)
        axios
            .get(`${process.env.REACT_APP_API}/api/Show/${showId}`)
            .then((response) => {
                if (response.data.room.seats) {
                    setSeats(response.data.room.seats)
                    setLoading(false)
                    setRoom(response.data.room.id)
                    setEvent(response.data.event)
                    console.log(response.data)
                } else {
                    console.log("No seats data in response")
                }
            })
            .catch((error) => console.log(error))
        console.log(seats)
    }, [showId])

    const groupedSeats = seats.reduce((acc, seat) => {
        if (!acc[seat.row]) {
            acc[seat.row] = []
        }
        acc[seat.row].push(seat)
        return acc
    }, {})

    const maxColumns = Math.max(
        ...Object.values(groupedSeats).map((row) => row.length)
    )

    const seatRows = Object.entries(groupedSeats).map(([row, seats]) => (
        <tr key={row}>
            <td>Rij {row}</td>
            {seats.map((seat) => {
                const uniqueSeatId = `${seat.id}-${showId}`;
                return (
                    <td>
                        <button
                            key={uniqueSeatId}
                            className={`seat ${
                                selectedSeats.includes(uniqueSeatId) ? "selected" : ""
                            }`}
                            onClick={() => {
                                if (selectedSeats.includes(uniqueSeatId)) {
                                    setSelectedSeats(
                                        selectedSeats.filter((id) => id !== uniqueSeatId)
                                    );
                                    removeFromCart({
                                        id: uniqueSeatId,
                                        event: event.name,
                                        room: room,
                                        seat: seat.nr,
                                        row: seat.row
                                    });
                                } else {
                                    setSelectedSeats([...selectedSeats, uniqueSeatId])
                                    addToCart({
                                        id: uniqueSeatId,
                                        event: event.name,
                                        room: room,
                                        seat: seat.nr,
                                        row: seat.row
                                    });
                                }
                            }}
                        >
                            {selectedSeats.includes(uniqueSeatId) ? (
                                <span>
                                    U heeft rij {row} stoel {seat.nr} geselecteerd
                                </span>
                            ) : (
                                <span>
                                    Kies rij {row} stoel {seat.nr}
                                </span>
                            )}
                        </button>
                    </td>
                )
            })}
            {Array(maxColumns - seats.length)
                .fill(0)
                .map((_, i) => (
                    <td aria-hidden>&nbsp;</td>
                ))}
        </tr>
    ))    

    return (
        <div>
            {!isLoading && seats.length > 0 ? (
                <div>
                    <NavigationBar />
                    <div className="container">
                        <h1>Kies een stoel voor {event.name}</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Rijen</th>
                                    <th>Stoelen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {seatRows}
                                <Link to="/cart" className="btn btn-primary mt-3">Naar winkelwagen</Link>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p>Stoelen aan het laden...</p>
            )}
        </div>
    )
}

export default SeatPickerPage
