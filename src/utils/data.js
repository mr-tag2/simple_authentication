export const getData = () => {
  const dataUser = localStorage.getItem("DataUser");
  if (dataUser == null) return [];
  return JSON.parse(dataUser);
};

export const getDataByUserPass = ({ email, password }) => {
  const dataUser = getData();
  const data = dataUser.filter(
    (item) => item.email == email && item.password == password
  );
  return data;
};

export const saveData = ({ fullname, email, password }) => {
  const dataUser = getData();
  const newUser = { fullname, email, password };
  dataUser.push(newUser);
  localStorage.setItem("DataUser", JSON.stringify(dataUser));
  return newUser;
};

export const changePassWordByEmail = ({ email, password }) => {
  const dataUser = getData();
  const index = dataUser.findIndex((item) => item.email == email);
  dataUser[index].password = password;
  localStorage.setItem("DataUser", JSON.stringify(dataUser));
  return dataUser[index];
};
