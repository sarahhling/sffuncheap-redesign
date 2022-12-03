import "../styles/globals.css";
import Navbar from "../Components/Navbar";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  // return <div className="MyApp"><Navbar /></div>
}

export default MyApp;
