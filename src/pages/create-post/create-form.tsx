import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface CreateFormData {
    title: string;
    description: string;
  }

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

const [formTitle,setFormTitle] = useState("")
const [formDescription,setFormDescription] = useState("")

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),
  });
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const formData : CreateFormData = {
      title: formTitle,
      description: formDescription
    }
    onCreatePost(formData);
  }

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/");
  };

  return (
    <form>
      <input placeholder="Title..." {...register("title")} value={formTitle} onChange={e=> setFormTitle(e.target.value)}/>
      <p style={{ color: "red" }}> {errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("description")} value={formDescription} onChange={e=>setFormDescription(e.target.value)}/>
      <p style={{ color: "red" }}> {errors.description?.message}</p>
      <button type="button" onClick={handleSubmit}>submit</button>
    </form>
  );
};