import React from "@rbxts/react";
import { FrameProps } from "client/components/ui/frame";

interface ButtonProps extends FrameProps<TextButton> {
	key?: string;
	text?: string;
	textSize?: number;
	size?: UDim2;
	position?: UDim2;
	anchorPoint?: Vector2;
	textColor3?: Color3;
	backgroundColor3?: Color3;

	onClick?: () => void;
}

export const Button = ({
	children,
	text,
	backgroundColor3,
	textSize,
	size,
	position,
	textColor3,
	anchorPoint,
	cornerRadius,
	onClick,
}: ButtonProps) => {
	return (
		<textbutton
			Text={text}
			TextSize={textSize}
			Size={size}
			Position={position}
			AnchorPoint={anchorPoint}
			TextColor3={textColor3}
			BackgroundColor3={backgroundColor3}
			Event={{
				MouseButton1Click: onClick,
			}}
		>
			{children}
			{cornerRadius && <uicorner CornerRadius={cornerRadius} />}
		</textbutton>
	);
};
