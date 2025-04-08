import axios from 'axios'
import { User } from '../types/User.ts'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchUsers = async (): Promise<User[]> => {
    const res = await axios.get(`${BASE_URL}/users`)
    return res.data
}

export const fetchUserById = async (id: string): Promise<User> => {
    const res = await axios.get(`${BASE_URL}/users/${id}`)
    return res.data
}
