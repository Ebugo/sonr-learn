import styles from './styles.module.css';
import React from "react";
import {Button, Input} from "../Shared";
import {EmailNav, User} from "../../assets";


const SignIn = () => {
	return (
		<section className={`container ${styles["login-container"]} flex items-center justify-center`}>
			<form className="p-5 md:px-16 md:py-14 lg:px-28">
				<h3 className="text-center">Sign in</h3>
				<p className="text-center py-2">We are the bridge to developer education about the decentralized web</p>

				<div className="py-3 flex flex-col gap-3">
					<Input Icon={User} label="First Name" name="firstname" placeholder="First name" />
					<Input Icon={EmailNav} label="Email Address" name="email" placeholder="example@gmail.com" />
				</div>

				<div className="py-3">
					<p>Use the slider to align the two Sonr logos</p>

				</div>

				<Button
					type="submit"
					text="Continue"
					className="mx-auto"
				/>
			</form>
		</section>
	);
};

export { SignIn };
