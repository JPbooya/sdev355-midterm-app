export default function RoomCard({room}) {
    return(
    <article className={room.available ? "room-card" : "room-card unavailable"}>
        <h3>{room.name}</h3>
        <p className="building">{room.building}</p>
        <p className="seats">{room.seats} seats</p>
    </article>
    )
} 