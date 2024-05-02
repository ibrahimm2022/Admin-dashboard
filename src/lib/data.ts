import { Product } from "./model/productModel";
import { User } from "./model/userModel";
import { connectToDB } from "./utlis";

export const getUsers = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    await connectToDB();
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { users, count };
  } catch (error) {
    console.log(error);
    throw new Error("faild to fetch!");
  }
};
export const getUser = async (id: string) => {
  try {
    await connectToDB();

    const user = await User.findById(id);

    return JSON.stringify(user);
  } catch (error) {
    console.log(error);
    throw new Error("faild to fetch!");
  }
};

export const getProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    await connectToDB();
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { products, count };
  } catch (error) {
    console.log(error);
    throw new Error("faild to fetch!");
  }
};

export const getProduct = async (id: string) => {
  try {
    await connectToDB();
    const product = await Product.findById(id);
    return JSON.stringify(product);
  } catch (error) {
    console.log("Get Product", error);
  }
};
