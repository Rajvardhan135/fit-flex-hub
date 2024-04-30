import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Explore from "./routes/Explore/Explore";
import SignIn from "./routes/SignIn/SignIn";
import SignUp from "./routes/SignIn/SignUp";
import Dashboard from './routes/Dashboard/Dashboard'
import SavedWorkout from "./routes/Saved-Workout/saved-workout";
import UserNav from "./components/home-component/user-nav";
import { getExerciseByBodyPart } from "./utils/exerciseDb/exerciseDB.utils";
import WorkoutRoutine from "./routes/WorkoutRoutine/WorkoutRoutine";

function App() {

  return (
    <Routes>
      <Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="user" element={<UserNav />}>
          <Route index element={<Dashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="workout/:bodyPart" element={<WorkoutRoutine />} />
          <Route path="saved" element={<SavedWorkout />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// 1f1c26  f24b88  1e222a  97df52  c72121  00c5ed  0068a7