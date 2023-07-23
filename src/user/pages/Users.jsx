import React from "react";
import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/8350416/pexels-photo-8350416.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8350416.jpg&fm=jpg",
      place: 3,
    },
  ];

  return (
    <>
      <UsersList items={USERS} />
    </>
  );
};

export default User;
