import React, { forwardRef, Ref } from "@rbxts/react";

export interface FrameProps<T extends Instance = Frame> extends React.PropsWithChildren {
	ref?: Ref<T>;
	size?: UDim2;
	position?: UDim2;
	anchorPoint?: Vector2;
	backgroundColor?: Color3;
	backgroundTransparency?: number;
	zIndex?: number;
	visible?: boolean;
	layoutOrder?: number;
	cornerRadius?: UDim;
}

export const Frame = forwardRef(
	(
		{
			children,
			size,
			position,
			anchorPoint,
			backgroundColor,
			backgroundTransparency,
			visible,
			zIndex,
			layoutOrder,
			cornerRadius,
		}: FrameProps,
		ref: Ref<Frame>,
	) => {
		return (
			<frame
				ref={ref}
				Size={size}
				Position={position}
				AnchorPoint={anchorPoint}
				BackgroundColor3={backgroundColor}
				BackgroundTransparency={backgroundTransparency}
				Visible={visible}
				ZIndex={zIndex}
				LayoutOrder={layoutOrder}
			>
				{children}
				{cornerRadius && <uicorner CornerRadius={cornerRadius} />}
			</frame>
		);
	},
);
