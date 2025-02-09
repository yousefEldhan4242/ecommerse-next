"use client"
import { setData } from "@/app/rtk/slices/data-slice"
import { setProductsLoading } from "@/app/rtk/slices/products-loading-slice"
import Product from "@/interfaces"
import { useEffect} from "react"
import { useDispatch } from "react-redux"

const DataProvider = ({data}:{data:Product[]}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setData(data))
        dispatch(setProductsLoading(true))
    },[])
  return null
}

export default DataProvider
