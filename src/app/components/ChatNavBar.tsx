import React from "react";
import Image from "next/image";
import Trash from "../assets/trash.svg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { useAuth } from "../context/AuthContext";
import DeleteAllChat from "./DeleteAllChat";

const ChatNavBar = ({setChatMessages}:any) => {
  const auth = useAuth();
  return (
    <section className="flex flex-row h-16 border-b-3 top-0 fixed w-full bg-white items-center justify-between">
      <DeleteAllChat setChatMessages={setChatMessages} />

      <h1 className="text-2xl font-medium mx-auto">MindWell</h1>
      <div className="flex items-center absolute top-4 right-5">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={`${auth?.user?.image ?? 'https://i.pravatar.cc/150?u=a042581f4e29026704d'}`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{auth?.user?.email}</p>
            </DropdownItem>
            {/* <DropdownItem key="settings">My Settings</DropdownItem> */}
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={auth?.logout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </section>
  );
};

export default ChatNavBar;
