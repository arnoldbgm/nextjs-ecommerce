import prisma from "@/lib/prisma"

interface PaginationOption {
   page: number,
   take: number
}

export const getPaginaterProductsWithImages = async ({
   page = 1,
   take = 12
}: PaginationOption) => {
   if (isNaN(Number(page))) page = 1;
   if (page < 1) page = 1;
   try {

      const productos = await prisma.product.findMany({
         take: take,
         skip: (page - 1) * take,
         include: {
            ProductImage: {
               take: 2,
               select: {
                  url: true
               }
            }
         }
      })

      return {
         currentPage: 1,
         totalPage: 2,
         products: productos.map(product => ({
            ...product,
            images: product.ProductImage.map(imagen => imagen.url)
         }))
      }
   } catch {
      throw new Error("Ocurrio un error")
   }
}