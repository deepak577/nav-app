import React, {Component} from 'react'
import './nav.css'



export default function NavBar(props){
		let {items, displayValues, toggleTab} = props;
		return(
			<nav id="navEle">
				<ul>
					{
					items.map((text, idx) => 
						{
							return <li class={displayValues[idx]=='none'?'inActiveTab':'activeTab'}>
								<a href="#" onClick={() => toggleTab(text)}>{text}</a>
							</li>}
					)
					}
				
				</ul>
			</nav>
		)
}