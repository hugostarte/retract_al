import "./Product.css";

export default function Product({product,onClick}){
    return(
        <div className="product" onClick={() => onClick()}>
            <div className="name">{product.nom}</div>
            <div className="picture">
                <img src={product.image} />
            </div>
            <div className="description">{product.description}</div>
            <div className="price">{product.prix} €</div>
        </div>
    )
}