import React, { useState } from "react";

interface Props {
	title: string;
	description?: string;
	children: React.ReactNode;
	confirm?: true | boolean;
	goToPrevStep?: () => void;
	goToNextStep?: () => void;
}
function StepContent(props: Props) {
	const { title, description, children, confirm, goToPrevStep, goToNextStep } = props;

	return (
		<div className="flex flex-col gap-8 relative w-full h-full">
			<div>
				<h3 className="font-ubuntu-bold text-3xl mb-2 text-marine-blue">{title}</h3>
				<p className="text-cool-gray font-ubuntu mb-6">{description}</p>
			</div>
			{children}
			<div className="flex justify-between mt-auto max-md:fixed max-md:bottom-0 max-md:left-0 max-md:bg-white max-md:w-screen max-md:p-4">
				<div>
					{goToPrevStep && (
						<button
							onClick={goToPrevStep}
							className="text-sm text-cool-gray font-semibold hover:text-marine-blue"
						>
							Go Back
						</button>
					)}
				</div>
				{goToNextStep && (
					<button
						onClick={goToNextStep}
						className={`rounded-md font-medium px-6 py-2.5 text-sm text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
							confirm
								? "bg-purplish-blue focus-visible:outline-purplish-blue"
								: "bg-marine-blue focus-visible:outline-marine-blue"
						}`}
					>
						{confirm ? "Confirm" : "Next Step"}
					</button>
				)}
			</div>
		</div>
	);
}

export default React.memo(StepContent);
