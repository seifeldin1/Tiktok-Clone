import { Namespace } from "socket.io";

export interface IMessageController {
    initialize: (io: Namespace) => Promise<void>;
};