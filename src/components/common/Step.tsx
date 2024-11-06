import React from "react";

export interface StepProps {
	title: string;
	stepNum: number;
	active: boolean;
}
function Step(props: StepProps) {
	const { active, title, stepNum } = props;
	return (
		<div className="flex gap-4 items-center">
			<div
				className={`flex items-center justify-center border w-8 h-8 rounded-full max-md:text-lg max-md:w-12 max-md:h-12
					 ${active ? "bg-light-blue text-black" : "text-white"}`}
			>
				{stepNum}
			</div>
			<div className="flex flex-col max-md:hidden">
				<span className="text-sm uppercase text-cool-gray">STEP {stepNum}</span>
				<span className="font-ubuntu-medium uppercase text-white">{title}</span>
			</div>
		</div>
	);
}

export default React.memo(Step);
