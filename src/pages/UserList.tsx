import { useState, useMemo } from 'react'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { fetchUsers } from '../api/usersApi'
import { User } from '../types/User'
import UserCard from '../componets/UserCard.tsx'
import SearchFilter from '../componets/SearchFilter.tsx'

const UserList = () => {
    const {
        data: users = [],
        isLoading,
        isError,
    }: UseQueryResult<User[]> = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const matchesSearch =
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())

            const matchesFilter = filter ? user.address.city === filter : true

            return matchesSearch && matchesFilter
        })
    }, [users, search, filter])

    const cities = useMemo(
        () => Array.from(new Set(users.map((u) => u.address.city))),
        [users]
    )

    if (isLoading) return <p>Загрузка...</p>
    if (isError) return <p>Ошибка при загрузке данных</p>

    return (
        <div className="container">
            <h1>Список пользователей</h1>
            <SearchFilter
                search={search}
                onSearch={setSearch}
                filter={filter}
                onFilter={setFilter}
                cityList={cities}
            />

            <div className="user-list">
                {filteredUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default UserList
