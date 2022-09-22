import React, { useRef, useState } from "react";
import { ArrowDown } from "../../../assets";
import { useOnClickOutside } from "../../../hooks";

import styles from "./styles.module.css";

type DropDownPropTypes = {
	items: string[];
	placeHolder: string;
	label?: string;
};

const DropDown = ({ items, placeHolder, label }: DropDownPropTypes) => {
	const [showDropDown, setShowDropDown] = useState<boolean>(false);

	const [currentItem, setCurrentItem] = useState<string>("");

	const dropdownRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(dropdownRef, () => setShowDropDown(false));

	return (
		<>
			{label ? (
				<label
					className={`${styles.label} ${
						showDropDown ? styles.active : ""
					}`}
				>
					{label}
				</label>
			) : (
				""
			)}
			<div
				className={styles.dropdown}
				style={
					showDropDown
						? {
								borderBottomLeftRadius: "0px",
								borderBottomRightRadius: "0px",
						  }
						: {}
				}
				onClick={() => setShowDropDown(!showDropDown)}
				ref={dropdownRef}
			>
				<span>{currentItem !== "" ? currentItem : placeHolder}</span>
				<ArrowDown className={styles.arrow} />
				{showDropDown ? (
					<div className={styles["dropdown-list"]}>
						<ul>
							{items.map((item, index) => (
								<li
									key={index + item}
									onClick={() => {
										setCurrentItem(item);
									}}
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export { DropDown };
