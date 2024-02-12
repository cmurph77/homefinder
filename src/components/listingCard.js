import React from "react";
import './listingCard.css';

export default function ListingCard(props) {
    const link = "listing/" + props.id
    return(
        <section className="Card">
            <img src={props.img[0]} className="Card-Image" alt="Listing"/>
            <a clasname="Address" href={link}>{props.address}</a>
            <h1 clasname="Rent">Rent - {props.rentPerMonth}€</h1>
            <h2 clasname="Info">Beds {props.bed} Baths {props.bath}</h2>
        </section>
    );
}