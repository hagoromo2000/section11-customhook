import "./App.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "テスト太郎",
  email: "1234@example.com",
  address: "東京都",
};

function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}

export default App;
