import React, { type SyntheticEvent } from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../store/LoginSlice";

const Profile: React.FC = () => {
  //   const navigate = useNavigate();
  const user = useSelector((state: any) => state.user.username);

  const dispatch = useDispatch();
  const items: MenuProps["items"] = [
    {
      key: "profile-menu-name",
      label: (
        <span className="flex flex-col">
          <span className="font-semibold">{user}</span>
        </span>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "profile-settings",
      label: <span className="font-semibold">Profile Settings</span>,
    },
    {
      type: "divider",
    },
    {
      label: <span>Log Out</span>,
      key: "2",
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "2") {
      dispatch(setLoggedIn(true));
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("username");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <Dropdown menu={{ items, onClick }} trigger={["click"]}>
        <div
          onClick={(event: SyntheticEvent) => {
            event.preventDefault();
          }}
          className="flex items-center cursor-pointer"
        >
          <Avatar
            className="hover:scale-110 transition ease-in-out delay-100"
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            {user?.substring(0, 1)}
          </Avatar>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
