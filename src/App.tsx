import './App.css'
import LoginForm from "./components/LoginForm/LoginForm.tsx"
import Hello from "./components/Hello/Hello.tsx"
import {useCookieState} from "use-cookie-state"

import Cookies from "universal-cookie"
import LogoutBtn from "./components/LogoutBtn/LogoutBtn.tsx";

const cookies = new Cookies()


function App() {
    const [user, setUser] = useCookieState<string>("user", cookies.get("user"))

    return (
        <>
            <Hello name={user}/>
            {!user && <LoginForm setState={setUser}/>}
            {user && <LogoutBtn setState={setUser}/>}
        </>
    )
}

export default App
