import { User } from '../types/User'
import { useNavigate } from 'react-router-dom'
import './UserCard.scss'

interface Props {
    user: User
}

const UserCard = ({ user }: Props) => {
    const navigate = useNavigate()

    return (
        <div className="user-card" onClick={() => navigate(`/user/${user.id}`)}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Company: {user.company.name}</p>
        </div>
    )
}

export default UserCard
