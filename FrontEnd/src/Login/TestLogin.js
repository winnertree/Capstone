import react, {useState, useEffect} from 'react';

const TestLogin = () => {

    const [user, setUser] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    return (
        <>
                <section className='section'>
                    <p> test login</p>
                    <h1>Sign In</h1>
                    <form>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <button onClick={() => window.open('http://3.36.36.228:8080/login?'+'user='+user, '_blank')}>Sign In</button>
                    </form>
                </section>
        </>
    )
}

export default TestLogin
// http://3.36.36.228:8080/login?