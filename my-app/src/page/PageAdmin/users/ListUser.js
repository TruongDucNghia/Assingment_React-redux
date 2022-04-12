import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { deleteAccount, getAllUser, updateAccount } from '../../../features/AccountSlice'


const ListUser = () => {
    const account = useSelector(state => state.account.value)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUser())
    }, [])
    const toast = () => toast.error('Xóa tài khoản thành công !')
    const toastMess = () => toast.success('Cập nhật tài khoản thành công !')
    const handleUpdateRole = (data, id) =>{
        const datas = {roleId: +data, id: +id}
        dispatch(updateAccount(datas))
        toastMess()
    }
    const handleDelete = (id) =>{
        const action = window.confirm('Bạn chắc có muốn xóa tài khoản này !')
        if(action){
            dispatch(deleteAccount(id))
            toast()
        }
    }
  return (
    <div>
            <h1>List user</h1>

            <ToastContainer autoClose={1000} />

            <table className="table">
                <thead>
                    <tr className="">
                        <th>#</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Birthday</th>
                        <th>Role</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {account?.map((item, index) => 
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.gender == '0' ? 'Male' : 'Female'}</td>
                            <td>{item.birthday}</td>
                            <td>
                                <select onChange={(e) => handleUpdateRole(e.target.value, item.id)}>
                                    <option selected={item.roleId === 0} value={0}>Client</option>
                                    <option selected={item.roleId === 1} value={1}>Admin</option>
                                </select>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleDelete(item.id)} className="btn btn-danger btn-rounded btn-fw">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
  )
}

export default ListUser