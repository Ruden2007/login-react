export default function LogoutBtn({setState}: { setState: (value: string) => void }) {
    return <button onClick={() => setState("")}>Logout</button>
}