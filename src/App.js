import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import MainPage from "./components/MainPage/MainPage";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "./redux/actions/user_action";
import Header from "./components/Sides/Header";
import Tail from "./components/Sides/Tail";
import ServicePage1 from "./components/ServicesPage/ServicePage1";

function App() {
  let history = useHistory();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // 로그인이 된 상태
        history.push("/");
        // 리덕스 스토어에 유저정보 저장
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  } else {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/service1" component={ServicePage1} />
        </Switch>
        <Tail />
      </>
    );
  }
}

export default App;
