import React from 'react'

export default function ImageLib(props){
	if(props.img_src.length > 1) {
		return (
			<div id="imageLib">
				{	
					props.img_src.map((ele, idx) => {
						return <img class="imageLibEntry" src={ele} alt="Logo" onClick={() => props.handleClick(idx)}/>
					})
				}
			</div>
		)
	}
	return "";
}