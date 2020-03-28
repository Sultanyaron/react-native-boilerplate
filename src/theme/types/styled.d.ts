import 'styled-components';

export interface IColors {
	mainBackgroundColor: string;
	white: string;
}

export interface IFontSizes {
	s11: number;
}

type Gradient = Array<string>;
export interface IGradients {}

declare module 'styled-components' {
	interface IButtonColors {
		textColor: string;
		backgroundColor: string;
	}

	interface IButton {
		button: {
			dark: IButtonColors;
			light: IButtonColors;
		};
	}

	export interface DefaultTheme {
		colors: IColors & IButton;
		fontSizes: IFontSizes;
		gradients: IGradients;
	}
}
