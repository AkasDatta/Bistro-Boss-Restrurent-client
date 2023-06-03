import { useContext } from 'react';
import { useQuery } from 'react-query'
import { authContext } from '../providers/AuthProvider';
const useCart = email => {
    const {user} = useContext(authContext);

    const { refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch (`http://localhost:5000/carts?email=${user.email}`);
            return response.json();
        },
    })
    return [cart, refetch]
}
export default useCart;