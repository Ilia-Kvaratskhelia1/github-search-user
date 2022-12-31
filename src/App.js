// import './App.css';
import Dark from "./components/Dark";
import Light from "./components/Light";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [Following, setFollowings] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserinput] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [created, setCreated] = useState("");
  const [bio, setBio] = useState("");
  const [blog, setBlog] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    location,
    email,
    twitter_username,
    created_at,
    bio,
    blog,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowings(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
    setEmail(email);
    setTwitter(twitter_username);
    setCreated(created_at);
    setBio(bio);
    setBlog(blog);
  };

  const handleSearch = (event) => {
    setUserinput(event.target.value);
  };
  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
          console.log(error);
        } else setData(data);
      });
  };

  const [display, setDisplay] = useState(true);

  return (
    <div>
      {display
        ? (document.body.style.backgroundColor = "#F2F2F2")
        : (document.body.style.backgroundColor = "#141D2F")}
      {display ? (
        <Light
          display={display}
          setDisplay={setDisplay}
          name={name}
          userName={userName}
          followers={followers}
          Following={Following}
          repos={repos}
          avatar={avatar}
          userInput={userInput}
          location={location}
          email={email}
          twitter={twitter}
          created={created}
          bio={bio}
          blog={blog}
          error={error}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Dark
          display={display}
          setDisplay={setDisplay}
          name={name}
          userName={userName}
          followers={followers}
          Following={Following}
          repos={repos}
          avatar={avatar}
          userInput={userInput}
          location={location}
          email={email}
          twitter={twitter}
          created={created}
          bio={bio}
          blog={blog}
          error={error}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
