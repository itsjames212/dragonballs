import { Service, OnInit } from "@flamework/core";
import { effect } from "@rbxts/charm";
import { createCollection } from "@rbxts/lapis";
import { Players } from "@rbxts/services";
import {
	closePlayerData,
	getPlayerData,
	PlayerData,
	setPlayerData,
	defaultData,
	playerDataSchema,
} from "shared/store/datastore";
import Log from "@rbxts/log";

@Service({
	loadOrder: 0,
})
export class PlayerDataService implements OnInit {
	private collection = createCollection<PlayerData>("test", {
		defaultData,
		validate: playerDataSchema,
	});

	onInit() {
		for (const player of Players.GetPlayers()) {
			this.onPlayerAdded(player);
		}

		Players.PlayerAdded.Connect((player) => {
			this.onPlayerAdded(player);
		});

		Players.PlayerRemoving.Connect((player) => {
			this.onPlayerRemoving(player);
		});
	}

	private async loadPlayerData(player: Player) {
		const document = await this.collection.load(`${player.UserId}`, [player.UserId]);

		if (!player.IsDescendantOf(Players)) {
			return document.close();
		}

		setPlayerData(player.Name, document.read());

		const unsubscribe = effect(() => {
			const data = getPlayerData(player.Name);

			if (data) {
				document.write(data);
				Log.Info("player data: {@Data}", data);
			}
		});

		Promise.fromEvent(Players.PlayerRemoving, (leavingPlayer) => player === leavingPlayer)
			.then(() => unsubscribe())
			.finally(() => document.close());
	}

	private onPlayerAdded(player: Player) {
		this.loadPlayerData(player).catch((err) => {
			Log.Warn("failed to load document for player {Player}: {Error}", player, err);
			setPlayerData(player.Name, defaultData);
		});
	}

	private onPlayerRemoving(player: Player) {
		closePlayerData(player.Name);
	}
}
