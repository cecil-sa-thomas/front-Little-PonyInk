export default function CloseIcon({ className, width, height, color }) {
    return (
    <svg className={className} width={width} height={height} role="img" viewBox="0 0 22 22" fill={color} xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke={color}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
    )
}
