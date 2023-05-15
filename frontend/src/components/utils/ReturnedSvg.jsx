import React from 'react';


const ReturnedSvg = () => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32 8.00001C27.5817 8.00001 24 11.5817 24 16C24 20.4183 27.5817 24 32 24C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8.00001 32 8.00001ZM18.6667 16C18.6667 8.63621 24.6362 2.66667 32 2.66667C39.3638 2.66667 45.3333 8.63621 45.3333 16C45.3333 23.3638 39.3638 29.3333 32 29.3333C24.6362 29.3333 18.6667 23.3638 18.6667 16Z" fill="url(#paint0_linear)" />
            <path d="M10.6667 17.9333C10.6667 16.2765 12.0098 14.9333 13.6667 14.9333H50.3333C51.9902 14.9333 53.3333 16.2765 53.3333 17.9333V53.6667C53.3333 56.4281 51.0947 58.6667 48.3333 58.6667H15.6667C12.9052 58.6667 10.6667 56.4281 10.6667 53.6667V17.9333Z" fill="url(#paint1_linear)" />
            <g filter="url(#filter0_i)">
                <path d="M26.6667 25.6L20.2667 32L26.6667 38.4H33.0667L28.8 34.1333H36.2667L36.4796 34.1386C38.7371 34.2495 40.5333 36.115 40.5333 38.4C40.5333 40.7564 38.6231 42.6667 36.2667 42.6667H22.4V46.9333H36.2667L36.5325 46.9293C41.1223 46.7889 44.8 43.0239 44.8 38.4C44.8 33.6872 40.9795 29.8667 36.2667 29.8667H28.8L33.0667 25.6H26.6667Z" fill="#D09A2D" />
            </g>
            <defs>
                <filter id="filter0_i" x="20.2667" y="25.6" width="24.5333" height="21.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.6875 0 0 0 0 0.480719 0 0 0 0 0.0633265 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                </filter>
                <linearGradient id="paint0_linear" x1="21.3333" y1="5.33334" x2="21.3333" y2="26.6667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD681" />
                    <stop offset="1" stop-color="#E6B040" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="30.4005" y1="4.98528" x2="-1.58915" y2="38.5906" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFD782" />
                    <stop offset="1" stop-color="#E3AC39" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default ReturnedSvg;