import axios from "axios";
import toast from "react-hot-toast";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password});

  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  return res.data
};

export const signUpUser = async (name:string ,email: string, password: string) => {
  const res = await axios.post("/user/signup", { name, email, password });


  if (res.status !== 200) {
    throw new Error("Unable to signUp");
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
  const res = await axios.post("/chat/new", {message});
  if(res.status === 201){
    toast.error("Alcanzaste el limite diario", {id: "Limit Chat"})
    return res.status
  }
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

