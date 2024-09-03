import { useDispatch } from 'react-redux';
import { setLogOut } from '../features/Auth/authSlice';

const useLogout = () => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(setLogOut());
        if (regex.test(location.pathname)) {
            navigate("/", { replace: true });
        }
    }

    return [logOut]

}

export default useLogout
