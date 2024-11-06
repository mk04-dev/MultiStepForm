import PlanItem from "components/select-plan/PlanItem";
import { observer } from "mobx-react";
import React from "react";
import { useStores } from "stores/stores";
import { PLANS } from "utils";

function SelectPlan() {
	const { payment, togglePayment } = useStores();
	return (
		<>
			<div className="flex max-md:flex-col gap-4 md:h-40">
				{PLANS.map((item) => (
					<PlanItem
					key={item.id}
						plan={item}
					/>
				))}
			</div>
			<div className="flex items-center justify-center gap-4 h-fit bg-alabaster py-4 rounded">
				<div className={`font-ubuntu-medium ${payment === "Monthly" ? "text-marine-blue" : "text-cool-gray"}`}>
					Monthly
				</div>
				<div className="relative inline-block w-11 h-5">
					<input
						checked={payment === "Yearly"}
						id="switch-component"
						type="checkbox"
						onChange={togglePayment}
						className="peer appearance-none w-11 h-5 rounded-full bg-marine-blue cursor-pointer transition-colors duration-300"
					/>
					<label
						htmlFor="switch-component"
						className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
					></label>
				</div>
				<div className={`font-ubuntu-medium ${payment === "Yearly" ? "text-marine-blue" : "text-cool-gray"}`}>
					Yearly
				</div>
			</div>
		</>
	);
}

export default React.memo(observer(SelectPlan));
