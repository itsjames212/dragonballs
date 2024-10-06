import { sync } from "@rbxts/charm";

import { atoms } from "shared/store";
import { Events } from "client/network";

const client = sync.client({ atoms });

Events.sync.connect((payload) => {
	client.sync(payload);
});

Events.init();
