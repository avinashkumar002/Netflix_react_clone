// import { useNavigate, Link } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';

// const Header = () => {
//   const navigate = useNavigate();

//   const clickHandler = (e) => {
//     e.preventDefault();
//     navigate('/login');
//   }

//   const auth = getAuth();
//   console.log(auth);

//   return(
//     <header className="topNav">
//       <nav className="navbar navbar-expand-md navbar-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
//           </Link>
          
//           <div className="navbar">
//             <form className="d-flex" role="search">
//               <select>
//                 <option>English</option>
//                 <option>Hindi</option>
//               </select>
//               <button className="btn btn-danger" onClick={clickHandler}>Signin</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Header;


import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const signInClickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  const signOutClickHandler = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Successfully signed out.
        navigate('/login');  // Navigate to the login page after sign out.
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
          
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              {
                auth.currentUser ? 
                  <button className="btn btn-danger" onClick={signOutClickHandler}>Logout</button>
                :
                  <button className="btn btn-danger" onClick={signInClickHandler}>Signin</button>
              }
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
