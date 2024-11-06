import { observer } from "mobx-react";
import React from "react";
import { useStores } from "stores/stores";
import { Plan } from "utils";

interface Props {
	plan: Plan;
}
function PlanItem(props: Props) {
	const {payment, plan: selectedPlan, setPlan} = useStores();
	const { plan } = props;
	const { id, title, icon, monthPrice, yearPrice } = plan;
	return (
		<div
			onClick={() => setPlan(plan)}
			className={`border cursor-pointer px-4 py-4 rounded-lg flex-1 flex max-md:items-center md:flex-col md:justify-between max-md:gap-4 ${
				plan.id === selectedPlan.id ? "border-purplish-blue bg-alabaster" : "border-cool-gray/20"
			}`}
		>
			<img src={icon} className="md:w-10 max-md:w-8" />
			<div className="flex w-full md:flex-col max-md:items-center">
				<div className="flex flex-col">
					<span className="font-bold text-marine-blue">{title}</span>
					<span className="text-cool-gray text-sm">
						${payment === "Monthly" ? `${monthPrice}/mo` : `${yearPrice}/yr`}
					</span>
					{payment === "Yearly" && (
						<span className="text-xs text-marine-blue font-medium">
							{Math.round((12 - yearPrice / monthPrice) * 10) / 10} months free
						</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default React.memo(observer(PlanItem));
