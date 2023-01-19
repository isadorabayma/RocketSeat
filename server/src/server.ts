import fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient} from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.register(cors)

// SELECIONA quais endereços teriam acesso ao back end ao inves de liberar para todos

// app.register(cors, {
//   origin: ['http.//localhost:3000']
// })

app.get('/', async () => {
  const habits = await prisma.habit.findMany()
  // ({
  //   where: {
  //     title: {
  //       startsWith: 'beber'
  //     }
  //   }
  // })

  return habits
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!');
  
})
