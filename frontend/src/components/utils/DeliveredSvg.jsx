import React from 'react';


const DeliveredSvg = () => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32 8.00001C27.5817 8.00001 24 11.5817 24 16C24 20.4183 27.5817 24 32 24C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8.00001 32 8.00001ZM18.6667 16C18.6667 8.63621 24.6362 2.66667 32 2.66667C39.3638 2.66667 45.3334 8.63621 45.3334 16C45.3334 23.3638 39.3638 29.3333 32 29.3333C24.6362 29.3333 18.6667 23.3638 18.6667 16Z" fill="url(#paint0_linear)" />
            <path d="M10.6667 17.9333C10.6667 16.2765 12.0098 14.9333 13.6667 14.9333H50.3333C51.9902 14.9333 53.3334 16.2765 53.3334 17.9333V53.6667C53.3334 56.4281 51.0948 58.6667 48.3334 58.6667H15.6667C12.9053 58.6667 10.6667 56.4281 10.6667 53.6667V17.9333Z" fill="url(#paint1_linear)" />
            <g filter="url(#filter0_i)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3333 37.12L24.9173 33.7067L29.3973 37.9733L40.1493 27.7333L43.7333 31.1467L29.3973 44.8L21.3333 37.12Z" fill="url(#paint2_linear)" />
            </g>
            <defs>
                <filter id="filter0_i" x="21.3333" y="27.7333" width="22.4" height="17.0667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0493759 0 0 0 0 0.339079 0 0 0 0 0.0644254 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                </filter>
                <linearGradient id="paint0_linear" x1="21.3334" y1="5.33334" x2="21.3334" y2="26.6667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#83D788" />
                    <stop offset="1" stop-color="#4DB051" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="10.6667" y1="14.9333" x2="10.6667" y2="58.6667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#83D888" />
                    <stop offset="1" stop-color="#4CAF50" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="24.5477" y1="25.8025" x2="21.5442" y2="43.2252" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2E7B32" />
                    <stop offset="1" stop-color="#2E7B32" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default DeliveredSvg;