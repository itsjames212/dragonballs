import React from "@rbxts/react";
import { FrameProps } from "client/components/ui/frame";

interface LabelProps extends FrameProps<TextLabel> {
	text?: string;
	textColor?: Color3;
	textSize?: number;
	textWrapped?: boolean;
	textXAlignment?: Enum.TextXAlignment;
	textYAlignment?: Enum.TextYAlignment;
	textScaled?: boolean;
	textHeight?: number;
}

export const Label = ({
	children,
	text,
	textSize,
	textWrapped,
	textXAlignment,
	textYAlignment,
	textScaled,
	textHeight,
	cornerRadius,
}: LabelProps) => {
	return (
		<textlabel
			Text={text}
			TextSize={textSize}
			TextWrapped={textWrapped}
			TextXAlignment={textXAlignment}
			TextYAlignment={textYAlignment}
			TextScaled={textScaled}
			LineHeight={textHeight}
		>
			{children}
			{cornerRadius && <uicorner CornerRadius={cornerRadius} />}
		</textlabel>
	);
};
