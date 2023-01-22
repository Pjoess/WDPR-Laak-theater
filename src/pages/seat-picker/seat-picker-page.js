import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function SeatPickerPage() {
    const [seats, setSeats] = useState([])
    const { showId } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        console.log("show id:" + showId)
        setLoading(true)
        axios
            .get(`${process.env.REACT_APP_API}/api/Show/${showId}`)
            .then((response) => {
                if (response.data.room.seats) {
                    setSeats(response.data.room.seats)
                    setLoading(false)
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
            {seats.map((seat) => (
                <td>
                    <button
                        key={seat.id}
                        className={`seat ${
                            selectedSeats.includes(seat.id) ? "selected" : ""
                        }`}
                        onClick={() => {
                            if (selectedSeats.includes(seat.id)) {
                                setSelectedSeats(
                                    selectedSeats.filter((id) => id !== seat.id)
                                )
                            } else {
                                setSelectedSeats([...selectedSeats, seat.id])
                            }
                        }}
                    >
                        {selectedSeats.includes(seat.id) ? (
                            <span>
                                U heeft rij {row} plaats {seat.nr} geselecteerd
                            </span>
                        ) : (
                            <span>
                                Kies rij {row} plaats {seat.nr}
                            </span>
                        )}
                    </button>
                </td>
            ))}
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
                    <p>Gekozen stoel id: {selectedSeats}</p>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Rijen</th>
                                <th>Stoelen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {seatRows}
                            {/* {Object.entries(groupedSeats).map(([row, seats]) => (
                            <tr key={row}>
                                <td>Rij {row}</td>
                                
                                    {seats.map((seat) => (
                                        <td>
                                        <button
                                            key={seat.id}
                                            className={`seat ${
                                                selectedSeats.includes(seat.id)
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                if (
                                                    selectedSeats.includes(
                                                        seat.id
                                                    )
                                                ) {
                                                    setSelectedSeats(
                                                        selectedSeats.filter(
                                                            (id) =>
                                                                id !== seat.id
                                                        )
                                                    )
                                                } else {
                                                    setSelectedSeats([
                                                        ...selectedSeats,
                                                        seat.id,
                                                    ])
                                                }
                                            }}
                                        >
                                            Stoel {seat.nr}
                                            {selectedSeats.includes(seat.id) && <span> geselecteerd</span>}
                                        </button>
                                        </td>
                                    ))}
                                
                            </tr>
                        ))} */}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Stoelen aan het laden...</p>
            )}
        </div>
    )
}

export default SeatPickerPage
