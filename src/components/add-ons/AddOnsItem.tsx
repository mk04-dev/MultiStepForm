import Checkbox from "components/common/Checkbox";
import { observer } from "mobx-react";
import React from "react";
import { useStores } from "stores/stores";
import { AddOns, PlaymentPlanType } from "utils";

interface Props {
	addOns: AddOns;
}
function AddOnsItem(props: Props) {
	const {payment, ListAddOnsId, onSelectAddOns} = useStores();
	const { addOns } = props;
	const { id, title, description, monthPrice, yearPrice } = addOns;
	return (
		<div
			onClick={() => onSelectAddOns(addOns)}
			className="flex gap-4 justify-between items-center px-6 py-3 rounded-lg cursor-pointer border border-cool-gray hover:border-purplish-blue has-[:checked]:bg-alabaster has-[:checked]:border-purplish-blue"
		>
			<div className="flex gap-4">
				<Checkbox checked={ListAddOnsId.includes(id)} />
				<div className="flex flex-col">
					<p className="font-ubuntu-medium text-marine-blue">{title}</p>
					<p className="text-sm text-cool-gray">{description}</p>
				</div>
			</div>
			<span className="text-sm text-purplish-blue">
				+${payment === "Monthly" ? `${monthPrice}/mo` : `${yearPrice}/yr`}
			</span>
		</div>
	);
}

export default React.memo(observer(AddOnsItem));
