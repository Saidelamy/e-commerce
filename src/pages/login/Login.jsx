import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredentail = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredentail.user;
      console.log(user);
      setIsLoading(false);
      toast.success('Successfully logged in');
      navigate('/checkout');
    } catch (error) {
      setIsLoading(false);
      toast.error('create an email!');
    }
  };
  return (
    <>
      <div className="container m-auto h-96">
        <div className="grid grid-cols-12 ">
          {isLoading ? (
            <h3>loading...</h3>
          ) : (
            <>
              {' '}
              <div className="col-span-12 m-auto text-center ">
                <h3 className="my-5 text-3xl font-bold text-primary">Login</h3>
                <form
                  onSubmit={signIn}
                  action=""
                  className="mb-5 flex flex-col gap-5"
                >
                  <div>
                    <input
                      className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                      type="text"
                      placeholder="Enter your email..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password..."
                    />
                  </div>
                  <button type="submit" className="bg-primary p-2 text-white">
                    Login
                  </button>
                  <p>
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary">
                      Create an account
                    </Link>
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
