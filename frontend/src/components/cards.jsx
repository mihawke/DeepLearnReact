import React, { useEffect } from 'react';
import './styles/cards.css'

export const Cards = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.getElementsByClassName('card');
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        const cardsContainer = document.getElementById('cards');
        cardsContainer.addEventListener('mousemove', handleMouseMove);

        return () => {
            cardsContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div id="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
    )
}
