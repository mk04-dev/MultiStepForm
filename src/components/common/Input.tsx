import React, { InputHTMLAttributes, useEffect, useState } from "react";

interface Props extends InputHTMLAttributes<any> {
	label?: React.ReactNode;
	error?: boolean;
	errorText?: string;
	regex?: RegExp;
}
function Input(props: Props) {
	const { label, error, errorText, name, required, regex,...rest } = props;
	return (
		<div>
			{label && (
				<div className="flex justify-between">
					<label className="block text-sm/6 font-ubuntu-medium text-marine-blue font-ubuntu">{label}</label>
					{error && (
						<label className="block text-sm/6 font-medium text-strawberry-red">
							{errorText ? errorText : required ? "This field is required" : ""}
						</label>
					)}
				</div>
			)}
			<input
				name={name}
				className={`block w-full rounded-md border-0 py-2 px-4 font-medium text-marine-blue shadow-sm ring-1 ring-inset ${error ? 'ring-strawberry-red' : 'ring-cool-gray'} placeholder:text-cool-gray focus:ring-1 focus:ring-inset focus:ring-purplish-blue text-base`}
				{...rest}
			/>
		</div>
	);
}
export default React.memo(Input);
