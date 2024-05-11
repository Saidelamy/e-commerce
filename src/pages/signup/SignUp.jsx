import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
function SignUp() {
  const [file, setFile] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uplaodTask = uploadBytesResumable(storageRef, file);

      uplaodTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uplaodTask.snapshot.ref).then(async (dawnloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: userName,
              photoURL: dawnloadURL,
            });

            // store user data in firestore database
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: dawnloadURL,
            });
          });
        },
      );
      setIsLoading(false);
      toast.success('account created');
      navigate('/login');
    } catch (error) {
      setIsLoading(false);
      toast.error('something wrong');
    }
  };
  return (
    <>
      <div className="container m-auto ">
        <div className="grid grid-cols-12 ">
          {isLoading ? (
            <h3>loading...</h3>
          ) : (
            <>
              <div className="col-span-12 m-auto text-center ">
                <h3 className="my-5 text-3xl font-bold text-primary">
                  Sign up
                </h3>
                <form
                  action=""
                  onSubmit={signup}
                  className="mb-5 flex flex-col gap-5"
                >
                  <div>
                    <input
                      className="w-full rounded border border-[#d6e5fb] p-1 outline-none"
                      type="text"
                      placeholder="Username..."
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
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
                  <div>
                    <input
                      className="w-full cursor-pointer rounded p-1 outline-none"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <button type="submit" className="bg-primary p-2 text-white">
                    Signup
                  </button>
                  <p>
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary">
                      Login
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

export default SignUp;
