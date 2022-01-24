import express from "express";

import UserController from "./app/controllers/UserController";
import {createBullBoard }from "bull-board";
import Queue from "./app/libs/Queue";
import {BullAdapter} from 'bull-board/bullAdapter';
const app = express();



const { router, setQueues, replaceQueues, addQueue, removeQueue } = createBullBoard([new BullAdapter(Queue)]);


app.use('/admin/queues',router)

app.use(express.json());
app.post("/users", UserController.store);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    });

