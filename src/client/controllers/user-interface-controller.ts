import { Controller, OnStart } from "@flamework/core";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { App } from "client/components/ui/app";

@Controller({})
export class UserInterfaceController implements OnStart {
	private playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");
	private root = createRoot(new Instance("Folder"));

	onStart() {
		this.root.render(createPortal(App(), this.playerGui));
	}
}
