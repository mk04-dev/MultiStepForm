import { makeAutoObservable } from "mobx";
import React from "react";
import { AddOns, Plan, PLANS, PlaymentPlanType } from "utils";

class Store {
	step: number = 0;

	personalInfo = {
		name: "",
		email: "",
		phoneNum: "",
	};
	payment: PlaymentPlanType = "Monthly";
	plan: Plan = PLANS[0];

	addOns: Map<number, AddOns> = new Map();

	constructor() {
		makeAutoObservable(this);
	}

    get ListAddOnsId () {
        return Array.from(this.addOns.keys());
    }
    get ListAddOns () {
        return Array.from(this.addOns.values())
    }
	goToPrevStep = () => (this.step -= 1);

	goToNextStep = () => (this.step += 1);

	setPersonalInfo = (state: any) => (this.personalInfo = { ...this.personalInfo, ...state });

	togglePayment = () => (this.payment = this.payment === "Monthly" ? "Yearly" : "Monthly");

	setPlan = (plan: Plan) => (this.plan = plan);

	onSelectAddOns = (item: AddOns) =>
		this.addOns.has(item.id) ? this.addOns.delete(item.id) : this.addOns.set(item.id, item);
}

const StoresContext = React.createContext(new Store());

export const useStores = () => React.useContext(StoresContext);
