export function UseDateFormatting() {
    const toDutchDate = (dateString) => {
        const date = new Date(dateString)
        const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }
        return date.toLocaleDateString("nl-NL", options)
    }

    return { toDutchDate }
}
