import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth-service";
import EditProfileField from "../components/EditProfileField";

export default function Profile() {
  const [editEmail, setEditEmail] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const [user, setUser] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [redirect, setRedirect] = useState(null);

  const handleEmailEditClick = () => {
    setEditEmail(true);
    setEditUsername(false);
  };

  const handleUsernameEditClick = () => {
    setEditUsername(true);
    setEditEmail(false)
  };

  const handleSubmit = () => {
    setEditEmail(false);
    setEditUsername(false);
  };

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) setRedirect("/home");

    setUser(currentUser);
    setUserReady(true);
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="profile-wrapper">
      {userReady ? (
        <div>
          <header>
            <h2>Welcome, {user.username}</h2>
          </header>
          {editEmail ? (
            <EditProfileField
              field={"email"}
              user={user}
              onSubmit={handleSubmit}
            />
          ) : (
            <p>
              <strong>Email:</strong> {user.email}
              <button onClick={handleEmailEditClick}>Edit Email</button>
            </p>
          )}
          {editUsername ? (
            <EditProfileField
              field={"username"}
              user={user}
              onSubmit={handleSubmit}
            />
          ) : (
            <p onClick={handleUsernameEditClick}>Change Username</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
