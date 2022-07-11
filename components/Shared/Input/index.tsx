import React, { useState, SyntheticEvent, FormEvent, ChangeEvent } from "react";
import styles from "./styles.module.css";
import { FormikProps } from "formik";
// import { Eye, Email, EyeClosed } from "../../../assets";

type InputType = {
	type?: string;
	onClick?: () => void;
	label?: string;
	className?: string;
	id?: string;
	name: string;
	formik?: FormikProps<any>;
	placeholder?: string | "";
	Icon?: any;
};

function Input({
	type,
	onClick,
	label,
	className,
	id,
	name,
	formik,
	Icon,
	...rest
}: InputType) {
	const [inputType, setInputType] = useState(type || "text");
	const [isFocused, setIsFocused] = useState(false);
	const error = formik && formik.touched[name] && formik.errors?.[name];

	let classes = `${styles.container} ${className} flex flex-col relative`;
	if (type === "password" || type === "email")
		classes += ` ${styles["padding-right"]}`;
	const status = formik && formik.status?.[name];
	if (error || status) classes += ` ${styles["error"]}`;

	let placeholder = rest.placeholder;
	if (formik) {
		Object.assign(rest, {
			onChange: handleChange,
			onBlur: (e: SyntheticEvent) => {
				setIsFocused(false);
				return formik?.handleBlur(e);
			},
			value: formik?.values[name],
		});
	}

	// Handler
	const handleClick = () => {
		if (type === "password") {
			if (inputType === "password") {
				setInputType("text");
			} else setInputType("password");
		}
	};

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		formik?.setValues({ ...formik?.values, [name]: e.target.value });

		if (
			(name === "confirm_password" || name === "password")
			&& formik?.values
			&& typeof formik?.values === "object"
			&& Object.keys(formik?.values).includes("confirm_password")
		) {
			if (
				(name === "confirm_password" && formik?.values?.password !== e.target.value)
				|| (name === "password" && formik?.values?.confirm_password !== e.target.value)
			) {
				formik?.setStatus({ ...formik?.status, confirm_password: "Passwords do not match" })
			} else {
				delete formik?.status?.confirm_password;
				formik?.setStatus(formik?.status || {})
			}
		}
	}


	return (
		<div className={classes}>
			{label && (
				<label
					className={`${isFocused ? styles["active"] : ""} mb-2`}
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<input
				id={id ?? name}
				name={name}
				type={inputType}
				onClick={onClick}
				// onChange={handleChange}
				onBlur={() => setIsFocused(false)}
				onFocus={() => setIsFocused(true)}
				{...rest}
				placeholder={placeholder}
			/>
			{/*{type === "password" && (*/}
			{/*	<span className="cursor-pointer" onClick={handleClick}>*/}
			{/*		{inputType === "password" ? <Eye /> : <EyeClosed />}*/}
			{/*	</span>*/}
			{/*)}*/}
			{/*{type === "email" && (*/}
			{/*	<span>*/}
			{/*		<Email />*/}
			{/*	</span>*/}
			{/*)}*/}
			{Icon ? <Icon className={`${styles.icon}`} /> : ""}
			{(error || status) && <div className={`${styles["error-message"]}`}>{error || status}</div>}
		</div>
	);
}

export { Input };
