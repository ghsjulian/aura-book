import bcrypt from "bcryptjs";

export const genHash = async (password:string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return  await bcrypt.hashSync(password,salt)
};

export const matchHashed = async (
  password: string,
  hashed: string): Promise<boolean> => {
  try {
    return await bcrypt.compareSync(password, hashed);
  } catch (error) {
    return false;
  }
};