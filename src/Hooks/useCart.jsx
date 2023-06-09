import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../providers/AuthProvider';
const useCart = email => {
    const {user, loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch (`http://localhost:5000/carts?email=${user.email}`, {headers: {
                authorization: `bearer ${token}`
            }});
            return response.json();
        },
    })
    return [cart, refetch]
}
export default useCart;