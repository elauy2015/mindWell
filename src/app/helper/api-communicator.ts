import axios from "axios";

export const loginuser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email: email, password: password});

  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  return res.data
};

export const checkAuthToken = async () => {
    const res = await axios.get("/user/auth-status");
  
    if (res.status !== 200) {
      throw new Error("Unable to authenticate");
    }
    return res.data
  };
  
export const sendChatRequest = async (message: string)=>{
  const res = await axios.post("/chat/new", {message: message});
  if(res.status !== 200){
    throw new Error("Unable to chat request")
  }
  return await res.data

}

export const getUserChats = async ()=>{
  const res = await axios.get("/chat/all-chats");
  if(res.status !== 200){
    throw new Error("Unable to chat request")
  }
  return await res.data

}

export const deleteUserChats = async ()=>{
  const res = await axios.delete("/chat/delete-chats");
  if(res.status !== 200){
    throw new Error("Unable to chat request")
  }
  return await res.data

}

export const logoutUser = async ()=>{
  const res = await axios.get("/user/logout");
  if(res.status !== 200){
    throw new Error("Unable to logout")
  }
  return await res.data

}

