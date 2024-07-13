export default function Hello({name}: { name: string | undefined | null }) {
    return (<h2>{name ? `Hello ${name}` : "Please login"}</h2>)
}