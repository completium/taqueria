// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Taqueria - Developer Tooling for Tezos",
	tagline: "Taqueria - Developer Tooling for Tezos",
	url: "https://tezostaqueria.io",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "ecadlabs", // Usually your GitHub org/user name.
	projectName: "taqueria", // Usually your repo name.

	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: "docs",
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/ecadlabs/taqueria/edit/main/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/ecadlabs/taqueria/edit/main/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				logo: {
					alt: "Tezos Taqueria Logo",
					src: "img/logoSVG.svg",
				},
				items: [
					{
						to: "/blog",
						label: " Get Started",
						position: "right",
						className: "header-link",
					},
					{
						type: "doc",
						docId: "intro",
						position: "right",
						label: "Docs",
						className: "header-link",
					},
					{
						to: "/blog",
						label: "Plugins",
						position: "right",
						className: "header-link",
					},
					{
						href: "https://discord.com/",
						position: "right",
						className: "header-discord-link",
						"aria-label": "Discord",
					},
					{
						href: "https://twitter.com/",
						position: "right",
						className: "header-twitter-link",
						"aria-label": "Twitter",
					},
					{
						href: "https://github.com/facebook/docusaurus",
						position: "right",
						className: "header-github-link",
						"aria-label": "GitHub repository",
					},
				],
			},
			footer: {
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/taqueria",
							},
							{
								label: "Discord",
								href: "https://discordapp.com/invite/tezostaqueria",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/tezostaqueria",
							},
						],
					},
					{
						title: "Contact",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/ecadlabs/taqueria",
							},
						],
					},
					{
						items: [
							{
								html: `
									<a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
									  <img src="img/footerLogoSVG.svg" alt="Deploys by Netlify" />
									</a>
								  `,
							},
							{
								html: `
									<p>
									Faplaren krorar whataboutism. Krorat kroligen. 
									</p>
								  `,
							},
							{
								html: `
								<a class='footerButton' href='https://github.com'>
								GITHUB
							  	</a>
								  `,
							},
							{
								html: `
								<form class='footerForm'>
									<h5>Register for updates</h5>
									<div class='footerInputContainer'>
									<input class='footerImail' type="email" id="email" name="email" placeholder='Your email address'>
									<input class='signupButton' type="submit" value="Sign Up">
									</div>
								</form>
								  `,
							},
							{
								label: `Copyright © 2021 ECAD Labs - This project is licensed under Apache License, Version 2.0`,
								to: "/",
								className: "copyright",
							},
						],
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
