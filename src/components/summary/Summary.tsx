import React, { useMemo } from "react";
import { useStores } from "stores/stores";

function Summary() {
	const { payment, plan, ListAddOns, togglePayment } = useStores();

	const totalPrice = useMemo(() => {
		const isMonthly = payment === "Monthly";
		let val = isMonthly ? plan.monthPrice : plan.yearPrice;
		val += ListAddOns.reduce((sum, cur) => (sum += isMonthly ? cur.monthPrice : cur.yearPrice), 0);
		return `$${val}/${isMonthly ? "mo" : "yr"}`;
	}, [payment, plan, ListAddOns]);

	return (
		<>
			<div className="flex flex-col bg-magnolia rounded-lg px-6 py-4 gap-6">
				{plan && (
					<div className="flex items-center justify-between">
						<div className="flex flex-col">
							<span className="font-bold text-marine-blue">
								{plan.title} ({payment})
							</span>
							<span onClick={togglePayment} className="text-sm underline text-cool-gray">
								Change
							</span>
						</div>
						<span className="font-ubuntu-bold text-marine-blue">
							${payment === "Monthly" ? `${plan.monthPrice}/mo` : `${plan.yearPrice}/yr`}
						</span>
					</div>
				)}
				{!!ListAddOns.length && (
					<>
						<hr />
						<div className="flex flex-col gap-2">
							{ListAddOns.map((item) => {
								return (
									<div className="flex items-center justify-between">
										<span className="text-sm text-cool-gray">{item.title}</span>
										<span className="text-sm font-ubuntu-medium text-marine-blue">
											+${payment === "Monthly" ? `${item.monthPrice}/mo` : `${item.yearPrice}/yr`}
										</span>
									</div>
								);
							})}
						</div>
					</>
				)}
			</div>
			<div className="flex justify-between px-6">
				<span className="text-cool-gray">Total (per {payment === "Monthly" ? "month" : "year"})</span>
				<span className="text-xl font-bold text-purplish-blue">{totalPrice}</span>
			</div>
		</>
	);
}

export default React.memo(Summary);
