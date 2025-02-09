"use client"
// import { headers } from "next/headers";
// import { parse } from "url";
import ReduxStoreProvider from "./[locale]/_providers/ReduxStoreProvider";
import axios from "axios";
import DataProvider from "./[locale]/_providers/DataProvider";
import "./[locale]/globals.css"
import { useEffect, useRef, useState } from "react";
import Loading from "./[locale]/loading";
import { useParams } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isProductsLoaded,setIsProductsLoaded] = useState(false)
  const {locale} = useParams()
  const amazonDataRef = useRef()

  let amazon_domain
  if (locale == "it"){
    amazon_domain = "amazon.it";
  }else if (locale == "fr"){
    amazon_domain = "amazon.fr";

  }else{
    amazon_domain = "amazon.com";
  }


  const api = `${process.env.NEXT_PUBLIC_API_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&type=search&amazon_domain=${amazon_domain}&search_term=movies`

  useEffect(()=>{
    axios.get(api).then((res) => {

      amazonDataRef.current = res.data.search_results;
      setIsProductsLoaded(true)
    });
  },[])
  
  if (isProductsLoaded){
    return(

    <ReduxStoreProvider>
      <DataProvider data={amazonDataRef.current!}/>
              {children}
    </ReduxStoreProvider>
    )
  }else{
    return (

    <html>
      <body>

      <Loading/>
      </body>
    </html>
    )
  }
}
