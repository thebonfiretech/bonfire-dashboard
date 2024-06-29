import api from "../../../services/api";


const get = async (data) => {
  try {
    const response = await api.get(`admin/user/get/${data}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getAll = async () => {
  try {
    const response = await api.get("admin/user/get-all");
    return response.data;
  } catch (error) {
    return error;
  }
};

const post = async (data) => {
  try {
    await api.post("admin/user/create", data);
  } catch (error) {
    console.error("erro");
  }
}

const update = async (id, data) => {
  try {
    await api.put("admin/user/update", {
      id: id,
      data: data,
    });
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    await api.delete("admin/user/delete", { data: { id: id } });
  } catch (error) {
    return error;
  }
};

export default { get, getAll, post, update, deleteUser };
