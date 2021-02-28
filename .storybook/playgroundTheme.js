import { create } from '@storybook/theming';
import Coding from '../stories/assets/ai-coderlab.svg';

export default create({
	base: 'light',

	colorPrimary: '#3A88A2',
	colorSecondary: '#3A88A2',

	// UI
	appBg: '#E0F4FD',
	appContentBg: '#fff',
	appBorderColor: '#fff',
	appBorderRadius: 2,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: '#28282A',
	textInverseColor: '#fff',

	// Toolbar default and active colors
	barTextColor: '#fff',
	barSelectedColor: '#BFDAEE',
	barBg: '#3A88A2',

	// Form colors
	inputBg: '#fff',
	inputBorder: '#D3D5D9',
	inputTextColor: '#28282A',
	inputBorderRadius: 2,

	brandTitle: 'Ai-CoderLab',
	brandUrl: 'https://coderlab.aiherrera.com',
	brandImage: Coding,
});
