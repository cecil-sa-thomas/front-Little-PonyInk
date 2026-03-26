export default function BurgerIcon({ className, width, height, color }) {
    return (
    <svg className={className} width={width} height={height} role="img" viewBox="0 0 22 22" fill={color} strokeWidth="1.5" stroke={color} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    )
}