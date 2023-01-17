import axios from 'axios';

const API_URL = 'http://localhost:3000';

class AuthService {
    // constructor(user) {
    //     this.user = user
    //     console.log(user)
    // }
    login(user) {
        return axios
            .post( API_URL +'/login', {
                first_name: user.first_name,
                last_name: user.last_name,
                user_name: user.user_name,
                email: user.email,
                password: user.password
            })

            .then(resp => {
                // console.log(resp)
                if (resp.data.accessToken) {
                    const token = resp.data.accessToken
                    const id = resp.data.user.id
                    const user = resp.data.user

                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', token)
                    localStorage.setItem('id', id);
                    console.log(token)
                }
                return resp
            })
    }
    logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('id')
    }
    register(user) {
        return axios
            .post(API_URL + '/register', {
                first_name: user.first_name,
                last_name: user.last_name,
                user_name: user.user_name,
                email: user.email,
                password: user.password
            }
            );
    }
}
export default new AuthService();