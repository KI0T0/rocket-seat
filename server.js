// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//     res.write('oi');
//     return res.end();

// })

// server.listen(3333);

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory()



//Request body


server.get('/videos', (request) => {
    const search = request.query.search

    console.log(search);

    const videos = database.list(search)

    console.log(videos);

    return videos
})

server.post('/videos', (request, reply) =>{
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration,
    })
    
    //console.log(database.list())

    return reply.status(201).send()
})


server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    database.delete(videoId)

    return reply.status(204).send()

})

server.listen({
    port: 3333,
})