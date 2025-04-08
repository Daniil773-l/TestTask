import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
