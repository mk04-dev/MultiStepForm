import SuccessIcon from "assets/images/icon-thank-you.svg";
import StepContent from "components/common/StepContent";
import SelectPlan from "components/select-plan/SelectPlan";
import Summary from "components/summary/Summary";
import { observer } from "mobx-react";
import React, { useRef } from "react";
import { useStores } from "stores/stores";
import Step from "./components/common/Step";
import YourInfo, { YourInfoRef } from "./components/your-info/YourInfo";
import AddOnsItem from "components/add-ons/AddOnsItem";
import { LIST_ADD_ONS } from "utils";
const steps = ["Your info", "Select plan", "add-ons", "summary"];

function App() {
	const { step, goToPrevStep, goToNextStep } = useStores();

	const ref = useRef<YourInfoRef>(null);

	return (
		<div className="w-screen h-screen flex md:justify-center md:items-center bg-magnolia">
			<div className="relative flex max-w-[940px] max-h-[540px] md:w-11/12 md:h-2/3 md:bg-white md:p-4 rounded-xl max-md:w-full max-md:h-full max-md:flex-col">
				<div className="flex md:flex-[1] md:flex-col max-md:justify-evenly max-md:items-start max-md:h-60 p-8 md:rounded-lg md:flex-1 md:gap-4 bg-[url('assets/images/bg-sidebar-desktop.svg')] max-md:bg-[url('assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover bg-bottom">
					{steps.map((e, idx) => (
						<Step
							key={idx}
							title={e}
							stepNum={idx + 1}
							active={step < steps.length ? step === idx : idx === 3}
						/>
					))}
				</div>
				<div className="lg:flex-[3] md:flex-[2] max-md:bg-white rounded-lg lg:px-24 lg:pt-12 md:px-12 md:pt-8 md:pb-4 max-md:absolute max-md:top-32 max-md:mx-4 max-md:px-8 max-md:py-10">
					{step === 0 && (
						<StepContent
							title="Personal info"
							description="Please provide your name, email address, and phone number."
							goToNextStep={() => ref && ref.current && ref.current.isValidData() && goToNextStep()}
						>
							<YourInfo ref={ref} />
						</StepContent>
					)}
					{step === 1 && (
						<StepContent
							title="Select your plan"
							description="You have the options of monthly or yearly billing."
							goToPrevStep={goToPrevStep}
							goToNextStep={goToNextStep}
						>
							<SelectPlan />
						</StepContent>
					)}
					{step === 2 && (
						<StepContent
							title="Pick add-ons"
							description="Add-ons help enhance your gaming experience."
							goToPrevStep={goToPrevStep}
							goToNextStep={goToNextStep}
						>
							<div className="flex flex-col gap-4">
								{LIST_ADD_ONS.map((item) => (
									<AddOnsItem key={item.id} addOns={item} />
								))}
							</div>
						</StepContent>
					)}
					{step === 3 && (
						<StepContent
							confirm
							title="Finishing up"
							description="Double-check everything looks OK before comfirming."
							goToPrevStep={goToPrevStep}
							goToNextStep={goToNextStep}
						>
							<Summary />
						</StepContent>
					)}
					{step === 4 && (
						<div className="flex flex-col w-full h-full gap-4 items-center justify-center">
							<img src={SuccessIcon}></img>
							<span className="font-ubuntu-bold text-3xl text-marine-blue">Thank you!</span>
							<p className="text-center text-cool-gray">
								Thanks for confirming your subscription! We hope you have fun using our platform. If you
								ever need support, please feel free to email us at support@loremgaming.com.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default React.memo(observer(App));
