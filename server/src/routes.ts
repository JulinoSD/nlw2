import express from 'express';

import db from './database/connection';

const routes = express.Router()

routes.post('/classes', async (req, res) =>{
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = req.body;

    //const insertedUsersIds 
    await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio
    });

    //const user_id = insertedUsersIds[0];

    // await db('/classes').insert({
    //     subject,
    //     cost,
    //     user_id
    // });

    return res.send()
})

export default routes