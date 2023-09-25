/*eslint-disable*/
import classes from "./Home.module.css";
import React, {
  Suspense,
  lazy,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
// import Landing from "./Landing";

// import Features from "./Features";
import Hero from "./Hero";
const NavBar = lazy(() => import("./NavBar"));
const NewFooter = lazy(() => import("./NewFooter"));
const FAQ = lazy(() => import("./FAQ"));
const Partners = lazy(() => import("./Partners"));

// import { logout } from "../authentication/actions/auth";
// import { connect } from "react-redux";
// import NewFeatures from "./NewFeatures";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
// import Feature2New from "./Feature2New";

function Home(props) {
  const containerRef = useRef(null);
  /*eslint-disable-next-line*/
  const [pointerEvents, setPointerEvents] = useState("");
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  // useEffect(() => {
  //   if (getCookie("logged-in") && props.auth?.user_data?.verified) {
  //     props.history.push("/login");
  //   } else {
  //     props.logoutUser();
  //   }
  // }, []);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Fragment>
      <div
        data-testid="home"
        className={classes.home}
        style={{ pointerEvents: pointerEvents }}
      >
        <NavBar />
        <Hero />
        {/* <Features /> */}
        <Feature1 />
        {/* <Feature2New /> */}
        <Feature2 />
        {/* <NewFeatures /> */}
        {/* <NewLanding /> */}
        <Suspense fallback={<></>}>
          <Partners />
          <FAQ />
        </Suspense>
        <NewFooter />
      </div>
    </Fragment>
  );
}

// const mapStateToProps = (state) => ({ auth: state.auth });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logoutUser: () => {
//       dispatch(logout());
//     },
//   };
// };
export default Home;
