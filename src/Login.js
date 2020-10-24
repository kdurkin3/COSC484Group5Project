import React, {useState} from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    return(

        <section className="login">
            <div className="loginContainer">

                <label>Email</label>
                <input type="text" autoFocus required value ={email}
                onChange={(e) => setEmail(e.target.value)}/>

                <label>Password</label>
                <input type="password" required valie={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button>Sign in</button>
                        <p> Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                        <button>Sign up</button>
                        <p> Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )
                    }
                </div>

            </div>
        </section>

    )
}
export default Login;