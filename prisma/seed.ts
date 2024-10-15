import { PrismaClient } from './generated/nestClient'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.role.upsert({
    where:{
        name: 'user'
    },
    update:{},
    create:{
        name: 'user'
    }
  });
  console.log({ alice })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })