import React from "react"

import styles from "./LoginForm.module.sass"

export default function LoginForm({setState}: { setState: (value: string) => void }) {
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        if (!e.target || !(e.target instanceof HTMLFormElement)) return false

        const data = new FormData(e.target)

        const user = data.get("user")

        if (!user) return alert("Error, input username!")

        if (!data.get("pass")) return alert("Error, input password!")
        
        setState(user.toString())
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <input type="text" name={"user"} placeholder={"username"}/>
            <input type="password" name={"pass"} placeholder={"password"}/>
            <button>Login</button>
        </form>
    )
}