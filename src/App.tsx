import UploadImage from "./modules/Gallery/UploadImage";
import Login from "./modules/Login/Login";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "./modules/shared/store/LoginSlice";
import Header from "./modules/shared/components/Header";
// import Demo from "./modules/Demo/Demo";

function App() {
  const login = useSelector(selectLoggedIn);
  return (
    <>
      {login ? (
        <Login />
      ) : (
        <>
          <Header />
          {/* <Demo/> */}
          <UploadImage />
        </>
      )}
    </>
  );
}

export default App;
