import "./ItemListContainer.css"

export const ItemListContainer = ({greeting}) => {
    return (
        <main>
            <div className="item">
                <h3>{greeting}</h3>
            </div>
        </main>
    )
}