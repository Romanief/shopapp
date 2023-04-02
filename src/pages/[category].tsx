import React from "react"
import { useRouter } from "next/router"
import useSWR from "swr"
import { product } from "@/types/type"

import Layout from "@/components/Layout"
import Product from "@/components/Product"
import Head from "next/head"

const fetcher = (...args: any) => fetch(args).then((res) => res.json())

function Category() {
  const router = useRouter()
  const { category } = router.query

  const { data, error, isLoading } = useSWR<Array<product>>(
    `https://fakestoreapi.com/products/category/${category}`,
    fetcher
  )

  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <Layout>
        {category == "electronics" ||
        category == "jewelery" ||
        category == "men's clothing" ||
        category == "women's clothing" ? (
          isLoading ? (
            <div className=" mt-40 font-extrabold text-5xl text-center mx-auto h-screen">
              Your page is <span className="text-cyan-700">Loading</span>
            </div>
          ) : (
            <div className="mt-10">
              {data?.map((x) => (
                <Product product={x} />
              ))}
            </div>
          )
        ) : (
          <div className=" mt-40 font-extrabold text-5xl text-center mx-auto">
            <p className="text-cyan-700">Error 404</p>
            <p>Page not found</p>
          </div>
        )}
      </Layout>
    </>
  )
}

export default Category
