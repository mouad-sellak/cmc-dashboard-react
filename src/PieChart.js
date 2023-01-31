import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class App extends Component {
	render() {
		const options = {
			theme: "dark2",
			animationEnabled: true,
			title:{
				text: "Activités les plus consultés"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "Visiter un lien hypertexte" },
					{ y: 22, label: "Poster un nouveau message" },
					{ y: 15, label: "Repondre a un message" },
					{ y: 19, label: "Bouger la ScrollBar" },
					{ y: 5, label: "Plier et deplier l'aborescence d'une structure" },
					{ y: 7, label: "Afficher les titres des message d'un forum" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}