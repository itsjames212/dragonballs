import { atom } from "@rbxts/charm";
import { t } from "@rbxts/t";
import Remap from "@rbxts/remap";

export interface PlayerData {
	readonly kills: number;
}

export const datastore = {
	players: atom(new ReadonlyMap<string, PlayerData>()),
};

export const defaultData = {
	kills: 0,
};

export const playerDataSchema = t.strictInterface({
	kills: t.number,
});

export const getPlayerData = (name: string) => {
	return datastore.players().get(name);
};

export const setPlayerData = (name: string, data: PlayerData) => {
	datastore.players((state) => Remap.set(state, name, data));
};

export const closePlayerData = (name: string) => {
	datastore.players((state) => Remap.delete(state, name));
};

export const updatePlayerData = (name: string, callback: (data: PlayerData) => PlayerData) => {
	datastore.players((state) => Remap.change(state, name, callback));
};
