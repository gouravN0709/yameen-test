import axios from "axios";

export const getTodos = async () => {
  const res = await axios.get("http://localhost:3000/api/list");
  return res.data;
};

export const addTodo = async (title: string, date: string) => {
  const res = await axios.post("http://localhost:3000/api/list", {
    title,
    date,
  });
  return res.data;
};

export const deleteTodo = async (date: string) => {
  console.log("date", date);
  const res = await axios.delete("http://localhost:3000/api/list", {
    data: { date },
  });
  return res.data;
};
