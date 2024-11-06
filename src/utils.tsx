import arcade from "assets/images/icon-arcade.svg";
import advanced from "assets/images/icon-advanced.svg";
import pro from "assets/images/icon-pro.svg";

export interface Plan {
	id: number;
	title: string;
	icon: string;
	monthPrice: number;
	yearPrice: number;
}
export enum PlaymentPlan {
	Monthly = "Monthly",
	Yearly = "Yearly",
}
export type PlaymentPlanType = keyof typeof PlaymentPlan;

export interface SelectedPlan {
	id: number | undefined;
	payment: PlaymentPlanType;
}
export const PLANS: Plan[] = [
	{
		id: 1,
		title: "Arcade",
		icon: arcade,
		monthPrice: 9,
		yearPrice: 95,
	},
	{
		id: 2,
		title: "Advanced",
		icon: advanced,
		monthPrice: 12,
		yearPrice: 120,
	},
	{
		id: 3,
		title: "Pro",
		icon: pro,
		monthPrice: 15,
		yearPrice: 150,
	},
];

export interface AddOns {
	id: number;
	title: string;
	description: string;
	monthPrice: number;
	yearPrice: number;
}

export const LIST_ADD_ONS: AddOns[] = [
	{
		id: 1,
		title: "Online service",
		description: "Access to multiplayer games",
		monthPrice: 1,
		yearPrice: 10,
	},
	{
		id: 2,
		title: "Larger storage",
		description: "Extra 1TB of could save",
		monthPrice: 2,
		yearPrice: 20,
	},
	{
		id: 3,
		title: "Customizable profile",
		description: "Custom theme on your profile",
		monthPrice: 2,
		yearPrice: 20,
	},
];