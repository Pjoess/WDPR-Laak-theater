import { useState, useEffect } from 'react'

function useCart() {
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || [] // zorgen dat het niet geleegd wordt op refresh
    )
    
    useEffect(() => {
        // items van localstorage ophalen wanneer component laadt
        const savedItems = JSON.parse(localStorage.getItem('items'))
        if (savedItems) {
            setItems(savedItems)
        }
    }, [])

    useEffect(() => {
        // sla items op naar localstorage wanneer state verandert
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const addToCart = (item) => {
        setItems([...items, item])
    }

    const removeFromCart = (item) => {
        setItems(items.filter((i) => i !== item))
    }

    return { items, addToCart, removeFromCart }
}

export default useCart
