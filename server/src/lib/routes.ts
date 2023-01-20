import dayjs from 'dayjs'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'


export function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      // title: z.string().nullable -----> para não obrigatóriass 
      title: z.string(),
      weekDays: z.array(
        z.number().min(0).max(6)
      )
    })
    // const { title, weekDays } = request.body -----> sem o zod
    const { title, weekDays } = createHabitBody.parse(request.body)
    
    const today = dayjs().startOf('day').toDate()
    // const today = dayjs().startOf('day').toDate()
    
    await prisma.habit.create({
      data: {
        title,
        // created_at: new Date(), ---> cadastra o dia e as horas
        created_at: today,
        // v cria os dias da semana na tabela weekDays ao mesmo tempo
        weekDays: {
          create: weekDays.map(weekDay => {
            return {
              week_day: weekDay,
            }
          })
        }
      }
    })
  })
}
