import React, { InputHTMLAttributes } from "react";
import CheckMark from "assets/images/icon-checkmark.svg";
function Checkbox(props: InputHTMLAttributes<any>) {
	const { className, ...rest } = props;
	return (
		<label className="flex items-center cursor-pointer relative">
			<input
				type="checkbox"
				className={`peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-purplish-blue checked:border-purplish-blue ${className}`}
				{...rest}
			/>
			<img
				src={CheckMark}
				className="absolute w-1/2 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
			></img>
		</label>
	);
}

export default React.memo(Checkbox);
