import React, { StrictMode } from "@rbxts/react";
import { Button } from "client/components/ui/button";

export const App = () => {
	return (
		<StrictMode>
			<screengui IgnoreGuiInset ResetOnSpawn ZIndexBehavior="Sibling">
				<Button
					text="Hello, World!"
					onClick={() => {
						print("Button clicked!");
					}}
					backgroundColor3={new Color3(0.2, 0.6, 1)}
					textColor3={new Color3(1, 1, 1)}
					size={new UDim2(0, 200, 0, 50)}
					position={new UDim2(0.5, 0, 0.5, 0)}
					anchorPoint={new Vector2(0.5, 0.5)}
					textSize={15}
					cornerRadius={new UDim(0, 8)}
				/>
			</screengui>
		</StrictMode>
	);
};
