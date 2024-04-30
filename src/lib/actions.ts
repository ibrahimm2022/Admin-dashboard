"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Product } from "./model/productModel";
import { User } from "./model/userModel";
import { connectToDB } from "./utlis";

export const addUser = async (formData: FormData) => {
  const {
    username,
    password,
    phone,
    email,
    role,
    address,
  } = Object.fromEntries(formData);
  try {
    await connectToDB();

    console.log({ username, password, phone, email, role, address });
    const newUser = new User({
      username,
      password,
      phone,
      email,
      role,
      address,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("falid add user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("falid delete user");
  }
  revalidatePath("/dashboard/users");
};
interface UpdateUserFields {
  username: FormDataEntryValue;
  password: FormDataEntryValue;
  phone: FormDataEntryValue;
  email: FormDataEntryValue;
  role: FormDataEntryValue;
  address: FormDataEntryValue;
  [key: string]: FormDataEntryValue;
}
export const updateUser = async (formData: FormData) => {
  "use server";
  const {
    id,
    username,
    password,
    phone,
    email,
    role,
    address,
  } = Object.fromEntries(formData);

  const updateFields: UpdateUserFields = {
    username,
    password,
    phone,
    email,
    role,
    address,
  };
  for (const key in updateFields) {
    if (updateFields[key] === "" || updateFields[key] === undefined) {
      delete updateFields[key];
    }
  }
  // Object.keys(updateFields).forEach((key:  UpdateFields) => {
  //   return (
  //     (updateFields[key] === "" || updateFields[key] === undefined) &&
  //     delete updateFields[key]
  //   );
  // });

  try {
    await connectToDB();
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("falid add user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData: FormData) => {
  const {
    title,
    desc,
    media,
    category,
    price,
    stock,
    color,
    size,
  } = Object.fromEntries(formData);
  try {
    await connectToDB();

    const newProduct = new Product({
      title,
      desc,
      media,
      category,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("falid add product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("falid delete Product");
  }
  revalidatePath("/dashboard/Products");
};

interface UpdateProductFields {
  title: FormDataEntryValue;
  desc: FormDataEntryValue;
  price: FormDataEntryValue;
  color: FormDataEntryValue;
  stock: FormDataEntryValue;
  size: FormDataEntryValue;
  category: FormDataEntryValue;
  [index: string]: FormDataEntryValue;
}
export const updateProduct = async (formData: FormData) => {
  const {
    id,
    title,
    desc,
    price,
    color,
    stock,
    size,
    category,
  } = Object.fromEntries(formData);
  const updateFields: UpdateProductFields = {
    title,
    desc,
    price,
    color,
    stock,
    size,
    category,
  };

  for (const key in updateFields) {
    if (updateFields[key] === "" || updateFields[key] === undefined) {
      delete updateFields[key];
    }
  }
  // Object.keys(updateFields).filter(
  //   (key: string) =>
  //     (updateFields[key] === "" || updateFields[key] === undefined) &&
  //     delete updateFields[key]
  // );
  console.log(updateFields);
  try {
    await connectToDB();
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log("UdatePtoduct", error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
