import React, { forwardRef, useImperativeHandle, useState } from "react";
import Input from "../common/Input";
import { useStores } from "stores/stores";
import { observer } from "mobx-react";

const emailRegx =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{3,4}$/;

interface ErrorProps {
	errorNm: boolean;
	errorNmTxt: string;
	errorEmail: boolean;
	errorEmailTxt: string;
	errorPhone: boolean;
	errorPhoneTxt: string;
}
export interface YourInfoRef {
	isValidData: () => boolean;
}
const YourInfo = forwardRef(function YourInfo({}, ref: React.ForwardedRef<YourInfoRef>) {
	const { personalInfo, setPersonalInfo } = useStores();
	const { name, email, phoneNum } = personalInfo;
	const [error, setError] = useState<ErrorProps>({
		errorNm: false,
		errorNmTxt: "",
		errorEmail: false,
		errorEmailTxt: "",
		errorPhone: false,
		errorPhoneTxt: "Invalid phone number",
	});

	useImperativeHandle(ref, () => ({
		isValidData,
	}));

	const isValidEmail = () => {
		if (!email.trim()) {
			setError((error) => ({ ...error, errorEmail: true, errorEmailTxt: "" }));
			return false;
		}
		const isMatch = emailRegx.test(email);
		setError((error) => ({ ...error, errorEmail: !isMatch, errorEmailTxt: "Invalid email" }));
		return isMatch;
	};

	const isValidPhoneNum = () => {
		if (!phoneNum.trim()) {
			setError((error) => ({ ...error, errorPhone: true, errorPhoneTxt: "" }));
			return false;
		}
		const isMatch = phoneRegx.test(phoneNum);
		setError((error) => ({ ...error, errorPhone: !isMatch, errorPhoneTxt: "Invalid phone number" }));
		return isMatch;
	};

	const isValidData = () => {
		let inValid = false;
		if (!name.trim()) {
			setError((error) => ({ ...error, errorNm: true, errorNmTxt: "" }));
			inValid = true;
		}
		return !inValid || isValidEmail() || isValidPhoneNum();
	};

	return (
		<div className="grid grid-cols-1 gap-x-6 gap-y-4">
			<Input
				required
				value={name}
				label="Name"
				placeholder="e.g. Stephen King"
				onChange={(e) => {
					setError({ ...error, errorNm: false, errorNmTxt: "" });
					setPersonalInfo({ name: e.target.value });
				}}
				error={error.errorNm}
				errorText={error.errorNmTxt}
			/>
			<Input
				required
				value={email}
				type="email"
				label="Email Address"
				placeholder="e.g. stephenking@lorem.com"
				onChange={(e) => {
					setError({ ...error, errorEmail: false, errorEmailTxt: "" });
					setPersonalInfo({ email: e.target.value });
				}}
				error={error.errorEmail}
				errorText={error.errorEmailTxt}
			/>
			<Input
				required
				value={phoneNum}
				type="tel"
				label="Phone Number"
				placeholder="e.g. +1 234 567 890"
				onChange={(e) => {
					setError({ ...error, errorPhone: false, errorPhoneTxt: "" });
					setPersonalInfo({ phoneNum: e.target.value });
				}}
				error={error.errorPhone}
				errorText={error.errorPhoneTxt}
			/>
		</div>
	);
});

export default React.memo(observer(YourInfo));
