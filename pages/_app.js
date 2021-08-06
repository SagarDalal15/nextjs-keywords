import Sidebar from "../components/sidebar";
import NavigationBar from "../components/navigation-bar";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Sidebar>
        <div style={{ marginLeft: "230px" }}>
          <NavigationBar>
            <Component {...pageProps} />
          </NavigationBar>
        </div>
      </Sidebar>
    </div>
  );
}

export default MyApp;
