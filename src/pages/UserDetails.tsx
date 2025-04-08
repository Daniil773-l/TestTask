import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { fetchUserById } from '../api/usersApi'
import { User } from '../types/User'
import { useParams, Link } from 'react-router-dom'

const UserDetails = () => {
    const { id } = useParams()

    const {
        data: user,
        isLoading,
        isError,
    }: UseQueryResult<User> = useQuery({
        queryKey: ['user', id],
        queryFn: () => fetchUserById(id!),
        enabled: !!id,
    })

    if (isLoading) return <p>Загрузка...</p>
    if (isError || !user) return <p>Ошибка загрузки данных</p>

    return (
        <div className="container">
            <Link to="/">← Назад</Link>
            <h2>{user.name}</h2>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Телефон:</b> {user.phone}</p>
            <p><b>Веб-сайт:</b> {user.website}</p>
            <p><b>Компания:</b> {user.company.name}</p>
            <p><b>Адрес:</b> {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</p>
        </div>
    )
}

export default UserDetails
