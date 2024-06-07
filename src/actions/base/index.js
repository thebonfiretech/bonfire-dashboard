import api from '../../services/api';
import setAuthToken from "../../services/setAuthToken";


const login = async (user) => {
  try {
    const response = await api.post("user/auth/signin", user)
    const token = response.data.token;
    setAuthToken(token);
    window.location.href = "/dashboard"
  }
  catch (error) {
    return error
  }
}
export default { login }