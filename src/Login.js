import React, {useState} from 'react'


var Login = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Verifypassword, VerifyPassword] = useState('');
    

    const [hasAccount, setHasAccount] = useState(false);

    return(

        <section className="login">
        
                <div className="btnContainer">
                    {hasAccount ? (
                        <>  <div className="loginContainer">
                        <br></br>
                        <input type="email" autoFocus required value ={email} placeholder ="Email"
                        onChange={(e) => setEmail(e.target.value)}/>

                        <br></br>
                        <input type="password" required valie={password} placeholder ="Password"
                        onChange={(e) => setPassword(e.target.value)}/>
                        <br></br>

                        <button>Sign in</button>
                        <p> Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        
                      
                        </div>
                        </>
                    ) : (
                        <>   
                        <div className="loginContainer"> 

                            <div className="registerName">
                                <div className="firstnameBox">
                                    <input type="fname" autoFocus required value ={fname} placeholder ="First Name" 
                                    onChange={(e) => setFname(e.target.value)}/>
                                </div>
                                
                                <div className="lastnameBox">
                                    <input type="lname" autoFocus required value ={lname} placeholder ="Last Name" 
                                    onChange={(e) => setLname(e.target.value)}/>
                                </div>
                            </div>

                            <br></br>
                            <input type="email" autoFocus required value ={email} placeholder ="Email"
                            onChange={(e) => setEmail(e.target.value)}/>

                            <br></br>
                            <input type="password" required valie={password} placeholder ="Password"
                            onChange={(e) => setPassword(e.target.value)}/>

                            <br></br>
                            <input type="Verifypassword" required valie={Verifypassword} placeholder ="Confirm Password"
                            onChange={(e) => VerifyPassword(e.target.value)}/>
                            <br></br>

                            <button>Sign up</button>
                            <p> Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                     


                        </div>
                        </>
                    )
                    }
                
            </div>
        </section>

    )
}
export default Login;