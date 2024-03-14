import { useState } from "react";
import { useContext } from "react";
import Mycontext from "./Mycontext";
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(Mycontext);

    function Submit(e) {
        e.preventDefault();
        console.log('login Consoles start');
        console.log("Before login user", ctx.users);
        console.log("Before login", ctx.currentUser);

        if (email === "admin" && password === "admin123") {
            // Admin login
            ctx.currentUser.push({ isAdmin: true }); // Assume an admin flag
            alert('Admin successfully logged in');
        } else {
            const user = ctx.users.find(u => u.email === email && u.password === password);
            if (user) {
                ctx.currentUser.push(user);
                alert('User successfully logged in');
            } else {
                alert('Invalid email or password');
            }
        }

        console.log("after login", ctx.currentUser);
        console.log('login Consoles end');
        // setEmail('');
        // setPassword('');
    }

    function logout(e) {
        e.preventDefault();
        ctx.currentUser.pop();
        alert('logged out')
        console.log('after delete:', ctx.currentUser);
    }

    function isAdmin() {
        return ctx.currentUser.length > 0 && ctx.currentUser[0].isAdmin;
    }

    return (
        <>
            <div className="app">
                <div className="login-form">
                    <div className="title">Login</div>
                    <div className="form">
                        <form>
                            <div className="input-container">
                                <label>UserEmail: </label>
                                <input type="text" name="uname" required value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="input-container">
                                <label>Password: </label>
                                <input type="password" name="pass" required value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="button-container">
                                <button onClick={Submit}>Login</button>
                                <button id="logout" onClick={logout}>Logout</button>
                            </div>
                            <br></br>
                        </form>
                    </div>
                </div>
                {isAdmin() && // Render admin details only if user is admin
                    <div className="admin-details">
                        <h2>Admin Dashboard</h2>
                        <ul>
                            {ctx.users.map(user => (
                                <li key={user.id}>
                                    {user.name} - {user.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
                {!isAdmin() && ctx.currentUser.length > 0 && // Render user details if user is not admin
                    <div className="user-details">
                        <h2>User Dashboard</h2>
                        <ul>
                            {ctx.currentUser.map(user => (
                                <li key={user.id}>
                                    Name: {user.name}<br />
                                    Email: {user.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </>
    );
}

export default Login;
