import { enhance } from "@zenstackhq/runtime"
import { prisma } from "../prisma"

export default defineEventHandler(async (event) => {
  const enhancedPrisma = enhance(prisma)
  const user = await enhancedPrisma.user.findFirst()

  return { status: 'ok', user }
})