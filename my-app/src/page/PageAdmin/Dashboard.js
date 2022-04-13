import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../features/AccountSlice'
import { getAllOrder } from '../../features/OrderSlice'

const Dashboard = () => {
  const totalOrder = useSelector(state => state.order.value)
  const totalProducts = useSelector(state => state.product.value)
  const totalAccount = useSelector(state => state.account.value)
  let totalOrderSales = 0
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrder())
    dispatch(getAllUser())
  }, [])
  totalOrder.forEach(item => {
    if (item.status === 1) {
      totalOrderSales += item.totalProducts
    }
  });
  const  totalOrderSuccess = totalOrder.filter(item => item.status === 1)
  const  totalOrderWait = totalOrder.filter(item => item.status === 0)
  const  totalOrderCancel = totalOrder.filter(item => item.status === 2)

  return (
    <div>
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Doanh Thu</div>
                  <div className="h2 mb-0 font-weight-bold text-gray-800">{totalOrderSales.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Đơn hàng chờ xác nhận</div>
                  <div className="h2 mb-0 font-weight-bold text-gray-800">{totalOrderWait.length}</div>
                </div>
                <div className="col-auto">
                  <i class="fas fa-hourglass fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Đơn hàng thành công</div>
                  <div className="h2 mb-0 font-weight-bold text-gray-800">{totalOrderSuccess.length}</div>
                </div>
                <div className="col-auto">
              <i class="fad fa-check-circle fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Đơn hàng hủy</div>
                  <div className="h2 mb-0 font-weight-bold text-gray-800">{totalOrderCancel.length}</div>
                </div>
                <div className="col-auto">
                <i class="fad fa-exclamation-triangle fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Tổng sản phẩm</div>
                  <div className="h2 mb-0 font-weight-bold text-gray-800">{totalProducts.length}</div>
                </div>
                <div className="col-auto">
                  <i class="fab fa-product-hunt fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Tài khoản</div>
                  <div className="h2 mb-0 font-weight-bold text-gray-800">{totalAccount.length}</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard