import { sync } from "@rbxts/charm";

import { atoms } from "shared/store";
import { Events } from "server/network";

const server = sync.server({ atoms });

server.connect((player, payload) => {
	Events.sync(player, payload);
});

Events.init.connect((player) => {
	server.hydrate(player);
});
