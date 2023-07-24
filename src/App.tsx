import "./App.css";
import { useAllUsers } from "./hooks/useAllUsers";
import { UserCard } from "./components/UserCard";

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => {
    getUsers();
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました。</p>
      ) : loading ? (
        <p>ロード中...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
