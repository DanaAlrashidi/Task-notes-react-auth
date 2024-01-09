const saveToken = (token) => {
  localStorage.setItem("token", token);
};
const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
const deleteToken = () => {
  localStorage.removeItem("token");
};
export { saveToken, getToken, deleteToken };
