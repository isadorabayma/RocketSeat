import fastify from 'fastify'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors)

// SELECIONA quais endereços teriam acesso ao back end ao inves de liberar para todos
// app.register(cors, {
//   origin: ['http.//localhost:3000']
// })

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!');
  
})
