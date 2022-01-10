import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Hero.module.css";
import Slider from "react-slick";

const FeatureList = [
	{
		title: "Insert awesome intro title here.",
		Svg: require("../../../static/img/heroSVG.svg").default,
		SvgTraiangle1: require("../../../static/img/triangle1.svg").default,
		SvgTraiangle2: require("../../../static/img/triangle2.svg").default,
		SvgTraiangle3: require("../../../static/img/triangle3.svg").default,
		SvgTraiangle4: require("../../../static/img/triangle4.svg").default,
		SvgTraiangle5: require("../../../static/img/triangle5.svg").default,

		description: (
			<>
				Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
				suscipit quaerendum. At nam minimum ponderum.
			</>
		),
		link: {
			title: "Quick Start",
			url: "/blog",
		},

		features: [
			{
				title: "Feature 1",
				icon: require("../../../static/img/briefcase.png").default,
				description:
					"Decism heminas. Örybusa dilar av nysamma. Polig ysade äss. Plangen ungen som lasm. Tiligen antidest klimatdiktatur. Epin lorade, därför att otreng. Gensa.",
				gif: require("../../../static/gif/mp4gifcode.mp4").default,
			},
			{
				title: "Feature 2",
				icon: require("../../../static/img/briefcase.png").default,
				description:
					"Decism heminas. Örybusa dilar av nysamma. Polig ysade äss. Plangen ungen som lasm. Tiligen antidest klimatdiktatur. Epin lorade, därför att otreng. Gensa.",
				gif: require("../../../static/gif/mp4gifcode.mp4").default,
			},
		],
	},
];

function Feature({
	Svg,
	title,
	description,
	link,
	features,
	SvgTraiangle1,
	SvgTraiangle2,
	SvgTraiangle3,
	SvgTraiangle4,
	SvgTraiangle5,
}) {
	const checkTitle = (e) => {
		isVisible === e.target.id
			? toggleIsVisible(`${features[0].title}`)
			: toggleIsVisible(e.target.id);
	};

	const [isVisible, toggleIsVisible] = useState(`${features[0].title}`);

	return (
		<div className={styles.content}>
			<div className={styles.heroCardContainer}>
				<div className={styles.heroCard}>
					<h1 className={styles.heroTitle}>{title}</h1>
					<div className={styles.heroCardContent}>
						<p className={styles.heroCardDescription}>{description}</p>
						<div className={styles.heroButtonContainer}>
							<a className={styles.heroButton} href={link.url}>
								{link.title}
							</a>
						</div>
						{link.tilte}
					</div>
					<Svg className={styles.featureSvg} alt={title} />
					<SvgTraiangle1 className={styles.featureSvgTraiangle1} alt={title} />
					<SvgTraiangle2 className={styles.featureSvgTraiangle2} alt={title} />
					<SvgTraiangle3 className={styles.featureSvgTraiangle3} alt={title} />
					<SvgTraiangle4 className={styles.featureSvgTraiangle4} alt={title} />
					<SvgTraiangle5 className={styles.featureSvgTraiangle5} alt={title} />
				</div>
			</div>
			<div className={styles.carousel}>
				<div className={styles.videoHeader}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={styles.videoBlock}>
					<div className={styles.videoBlockHidden}></div>
					{features.map((feature, index) => {
						return (
							isVisible === feature.title && (
								<video key={index} autoplay="true" muted src={feature.gif} />
							)
						);
					})}
				</div>
				<div className={styles.dotMenu}>
					{features.map((feature, index) => {
						return (
							<div
								key={index}
								className={
									isVisible === feature.title
										? styles.dots
										: styles.inactivedots
								}
								id={feature.title}
								onClick={(e) => checkTitle(e)}
							></div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default function Hero() {
	const LogoRedSvg = require("../../../static/img/logoRedSVG.svg").default;

	return (
		<section className={styles.features}>
			<div className={styles.container}>
				<Feature {...FeatureList[0]} />
			</div>
			<div className={styles.leftPurpleLine}></div>
			<div className={styles.rightPurpleLine}></div>
			<LogoRedSvg className={styles.logoRedSvg} alt={"logo"} />
		</section>
	);
}
