import api from '../../../services/api';

const getAll = async () => {
  try {
    const response = await api.get('/admin/school/get-all')
    return response.data
  }
    
  catch(error) {
    return error
  }
}

const get = async () => {
  try {
    const response = await api.get(`/admin/school/get/${data}`)
    return response.data
  }
    
  catch(error) {
    return error
  }
}

const update = async (id, data) => {
  try {
    const response = await api.put("/admin/school/update", {
      id: id,
      data: data
    })
    return response.data
  }
    
  catch (error) {
    return error
  }
}

export default { get, getAll, update };